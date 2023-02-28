'use strict';
// logs event
const eventPool = require('./eventPool');
require('./vendor/handler');
require('./driver/handler');
var Chance = require('chance');
var chance = new Chance();

eventPool.on('pickup', (payload) => {
  console.log({
    event: 'pickup',
    time: new Date().toISOString(),
    payload,
  });
});

eventPool.on('in-transit', (payload) => {
  console.log({
    event: 'in-transit',
    time: new Date().toISOString(),
    payload,
  });
  eventPool.emit('delivered', payload);
});

eventPool.on('delivered', (payload) => {
  console.log(`DRIVER: Package delivered ${payload.orderID}`);
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}!`);
  console.log({
    event: 'delivered',
    time: new Date().toISOString(),
    payload,
  });
});



const start = () => {
  setInterval(() => {
    let store = chance.company();
    eventPool.emit('VENDOR', store);
  }, 5000);
};

start();