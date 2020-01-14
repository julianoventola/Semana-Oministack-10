const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  // Search dev by geolocation and technology
  async index(req, res) {
    // Get information fron query params
    const {techs, longitude, latitude} = req.query;

    // Change each tech(text) in array as item
    const techsArray = parseStringAsArray(techs);

    // Do a search for a dev that has any tech near the geolocation
    const devs = await Dev.find({
      // Filter by any techs
      techs: {
        $in: techsArray,
      },
      // Find by location
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          // Distance in meters
          $maxDistance: 10000
        }
      }
    });

    return res.json(devs);
  }
}