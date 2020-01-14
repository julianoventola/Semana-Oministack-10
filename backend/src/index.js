const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

// Connect into MongoDb collection
mongoose.connect(
  'mongodb+srv://juliano10:juliano10@cluster0-ppp0b.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// Enable server to get json information on routes
app.use(express.json());

// Enable server to use routes
app.use(routes);

// Running server
app.listen(3333, () => console.log('Server running on port 3333...'));