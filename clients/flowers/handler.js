'use strict';
// emits event
const { socket } = require('../socket');

var Chance = require('chance');
var chance = new Chance();


function createNewPackage () {
  let payload = {
    store: '1-800-flowers',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  const order = {
    queueID: payload.store,
    ...payload,
  };
  console.log('VENDOR: Hey we have an order of flowers for pickup!');
  socket.emit('PICKUP', order);
}






module.exports = { createNewPackage };