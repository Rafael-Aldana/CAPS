'use strict';


const { socket } = require('../socket');
const { createNewPackage } = require('./handler');


setInterval(() => {
  createNewPackage();
}, 7000);

socket.on('DELIVERED', (payload) => {
  console.log(`VENDOR: Thank you for delivering the package to ${payload.customer}!`);
});