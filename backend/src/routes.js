const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

// Main route
routes.post("/devs",DevController.store);

module.exports = routes;