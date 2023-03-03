'use strict';
// emits event
const { socket } = require('../socket');

var Chance = require('chance');
var chance = new Chance();


function createNewPackage () {
  let payload = {
    store: 'acme-widgets',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  const order = {
    queueID: payload.store,
    ...payload,
  };
  console.log('VENDOR: Hey we have a package for pickup!');
  socket.emit('PICKUP', order);
}






module.exports = { createNewPackage };