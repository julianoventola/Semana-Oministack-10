const express = require('express');

const app = express();

// Main route
app.get("/", (req, res) => {
  return res.json({message: 'Hello all'});
})

app.listen(3333, () => console.log('Server running on port 3333...'));