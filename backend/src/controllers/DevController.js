const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

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
    }  
    return res.json(dev);
  },

};