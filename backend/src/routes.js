const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

// Get all Devs
routes.get("/devs", DevController.index);

// Post route to Add new Devs
routes.post("/devs", DevController.store);

module.exports = routes;