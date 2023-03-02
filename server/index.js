'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

const server = new Server();

const caps = server.of('/caps');

caps.on('connection', (socket) => {

  socket.on('PICKUP', (payload) => {
    socket.broadcast.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    socket.broadcast.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    socket.broadcast.emit('DELIVERED', payload);
  });

  socket.onAny((event, payload) =>{
    console.log('EVENT', event, Date(), payload);
  });
});

server.listen(PORT);