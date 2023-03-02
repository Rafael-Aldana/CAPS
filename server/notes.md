'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// socket server singleton: Listening for event at http://localhost:3001
const server = new Server();

// create a nameSpace think of a groupchat
const caps = server.of('/caps');

// create / allow for connections
caps.on('connection', (socket) => {
  console.log('connect to the caps namespace', socket.id);
  socket.onAny(() => {
    const time = new Date();
    console.log('EVENT', event, time, payload);
  });

  // manage the pick up event 
  socket.on('pickup', (payload) => {
    socket.broadcast.emit('pickup', payload);
  });
});



















server.listen(PORT);
// server.on('connection', (socket) => {
//   console.log('Socket is connected to the Event server', socket.id);

//   socket.on('MESSAGE', (payload) => {
//     console.log('SERVER: Message event', payload);
//     // 3 ways to emit this 
//     // socket.emit('MESSAGE', payload); //basic emit back to sender
//     // server.emit('MESSAGE', payload); // send to ALL clients connected to the server
//     socket.broadcast.emit('MESSAGE', payload);
//   });
// });

