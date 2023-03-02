'use strict';
// emits event
const { socket } = require('../socket');

var Chance = require('chance');
var chance = new Chance();


function createNewPackage () {
  let payload = {
    store: chance.company(),
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  socket.emit('PICKUP', payload);
}






module.exports = { createNewPackage };