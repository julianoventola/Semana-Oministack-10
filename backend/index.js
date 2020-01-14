const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect into MongoDb collection
mongoose.connect(
  'mongodb+srv://juliano10:juliano10@cluster0-ppp0b.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

// Enable server to get json information on routes
app.use(express.json());

// Main route
app.post("/users", (req, res) => { 
  const user = req.body
  return res.json(user);
})

app.listen(3333, () => console.log('Server running on port 3333...'));