'use strict';

const { socket } = require('../socket');
const DRIVER = require('./handler');

socket.on('PICKUP', (payload) => {
  setTimeout(() => {
    DRIVER(payload);
  }, 1000);
});

socket.on('DELIVERED', (payload) => {
  
});