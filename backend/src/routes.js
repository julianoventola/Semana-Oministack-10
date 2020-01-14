const { Router } = require('express');

const routes = Router();

// Main route
routes.post("/users", (req, res) => { 
  const user = req.body
  return res.json(user);
})

module.exports = routes;