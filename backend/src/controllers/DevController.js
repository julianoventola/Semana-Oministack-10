const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');
module.exports = {
  // List all devs
  async index(req, res){
    const devs = await Dev.find();

    return res.json(devs);
  },

  // Create a new dev
  async store(req, res){ 
    // Get github user info from body on post route
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({github_username});

    if (!dev) {
      // Get response from github API with user information
      const {data} = await axios.get(`https://api.github.com/users/${github_username}`);
  
      // Get name (or login if name empty), avatar url and bio
      const { name = login, avatar_url, bio } = data;
  
      // Change each tech(text) in array as item
      const techsArray = parseStringAsArray(techs);
  
      // Create geolocation for lat & long (based on PointSchema)
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }
  
      // Create new user in Database
      dev = await Dev.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techsArray,
        location
      })

      // Use websocket connections to filter new devs by techs and location
      const sendSocketMessageTo = findConnections(
        {latitude, longitude},
        techsArray,
        )
      
      //Sending new devs in filter searched
      sendMessage(sendSocketMessageTo, 'new-dev', dev)      
    }  
    return res.json(dev);
  },

  // Update dev information
  async update(req, res){
    // Get github username
    const {github_username} = req.params;

    // Check if user exists in database
    let dev = await Dev.findOne({github_username});

    // If username do not exists
    if(!dev){
      return res.status(400).json({message: "Usuário não encontrado!"});
    }
    
    // If exists, update it
    // If update just for some fields, it will use old dev info to complete
    const {
        name = dev.name,
        bio = dev.bio,
        longitude = dev.location.coordinates[0],
        latitude = dev.location.coordinates[1], 
        avatar_url = dev.avatar_url } = req.body;

    // Check if techs were updated to transform text in Array for each tech
    const techs = req.body.techs ? parseStringAsArray(req.body.techs) : dev.techs;
    
     // Create geolocation for lat & long (based on PointSchema)
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    }

    // Update Dev and return the "updated" Dev
    let updatedDev = await Dev.findOneAndUpdate(github_username, {name, techs, bio, avatar_url, location}, {
      new: true
    });  

    return res.json(updatedDev);
  },

  // Delete Dev
  async destroy(req, res){
     // Get github username
     const {github_username} = req.params;

     // Check if user exists in database
     let dev = await Dev.findOne({github_username});

     if(!dev) {
      return res.status(400).json({message: "Usuário não encontrado!"});
     }

     // Delete user
     await Dev.findOneAndDelete(github_username)

     return res.json({ deleted : true});
  }
};