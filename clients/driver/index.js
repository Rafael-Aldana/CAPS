'use strict';
// picks up package ---> delivers package
const eventPool = require('../../eventPool');

module.exports = (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  eventPool.emit('in-transit', payload);
};