const socketio = require('socket.io');

exports.setupWebsocket = (server) => { 
  const io = socketio(server);
  console.log('ok instancia');  
  io.on('connection', function(socket){
    console.log('ok conexao');    
    console.log(socket.id);    
    console.log(socket.handshake.query);
    
  })
}