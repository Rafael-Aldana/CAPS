'use strict';
// emits event
const eventPool = require('../eventPool');

var Chance = require('chance');
var chance = new Chance();

module.exports = (storeName) => {

  const payload = {
    store: chance.company(),
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  eventPool.emit('pickup', payload);
};
