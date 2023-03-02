'use strict';
// picks up package ---> delivers package
const { socket } = require('../socket');

module.exports = (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  socket.emit('IN-TRANSIT', payload);
  console.log(`DRIVER: Package delivered to ${payload.store}`);
  socket.emit('DELIVERED', payload);
};