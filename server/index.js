'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const Queue = require('./lib/queue');

const PORT = process.env.PORT || 3002;

const ordersQueue = new Queue();
const server = new Server();

const caps = server.of('/caps');


caps.on('connection', (socket) => {

  socket.on('PICKUP', (payload) => {

    let driverQueue = ordersQueue.read('driver');
    if (!driverQueue) {
      const newQueueKey = ordersQueue.store('driver', new Queue());
      driverQueue = ordersQueue.read(newQueueKey);
    }
    driverQueue.store(payload.queueID, payload);

    socket.broadcast.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    socket.broadcast.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    let storeQueue = ordersQueue.read('driver');
    if (!storeQueue) {
      const newQueueKey = ordersQueue.store('driver', new Queue());
      storeQueue = ordersQueue.read(newQueueKey);
    }
    storeQueue.store(payload.queueID, payload);


    socket.broadcast.emit('DELIVERED', payload);
  });

  socket.onAny((event, payload) => {
    console.log('EVENT', event, Date(), payload);
  });
});

server.listen(PORT);