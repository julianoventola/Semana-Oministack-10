const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();

// Connect into MongoDb collection
mongoose.connect(
  'mongodb+srv://juliano10:juliano10@cluster0-ppp0b.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

// External access to the server - no option mean ANY origin access 
app.use(cors());

// Enable server to get json information on routes
app.use(express.json());

// Enable server to use routes
app.use(routes);

// Running server
app.listen(3333, () => console.log('Server running on port 3333...'));