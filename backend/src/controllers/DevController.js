const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  async store(req, res){ 
    // Get github user info from body on post route
    const { github_username, techs, latitude, longitude } = req.body;
  
    // Get response from github API with user information
    const {data} = await axios.get(`https://api.github.com/users/${github_username}`);
  
    // Get name (or login if name empty), avatar url and bio
    const { name = login, avatar_url, bio } = data;
  
    // Change each tech(text) in array as item
    const techsArray = techs.split(",").map(tech => tech.trim());
  
    // Create geolocation for lat & long (based on PointSchema)
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    }
  
    // Create new user in Database
    const dev = await Dev.create({
      name,
      github_username,
      bio,
      avatar_url,
      techs: techsArray,
      location
    })
  
    return res.json(dev);
  }
};