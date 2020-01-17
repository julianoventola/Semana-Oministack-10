import socketio from 'socket.io-client';

// Connect to websocket on server
const socket = socketio('http://192.168.15.45:3333', {
  autoConnect: false,
});

function subcribeToNewDevs(subcribeFunction) {
  socket.on('new-dev', subcribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude, longitude, techs,
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subcribeToNewDevs
};