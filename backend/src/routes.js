const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Get all Devs
routes.get("/devs", DevController.index);

// Post route to Add new Devs
routes.post("/devs", DevController.store);

// Put route to Edit Devs information
routes.put("/devs/:github_username", DevController.update);

// Search Dev by tech and geolocation
routes.get("/search", SearchController.index);

module.exports = routes;