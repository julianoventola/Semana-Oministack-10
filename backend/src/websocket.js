const socketio = require('socket.io');

const parseStringAsArray = require('./utils/parseStringAsArray'); 
const calculateDistance = require('./utils/calculateDistance');

// Connection
let io;

// "Save" each connection
const connections = [];

exports.setupWebsocket = (server) => { 
  io = socketio(server); 

  io.on('connection', socket => {   
  
    const { latitude, longitude , techs } =  socket.handshake.query;

    // Saved connections to find new devs by tech and location
    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs),
    })

  });
}

// Function to find new devs by tech and location
exports.findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return calculateDistance(coordinates, connection.coordinates) < 10
      && connection.techs.some(item => techs.includes(item))
  });
}

exports.sendMessage = (to, message, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
}