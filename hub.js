'use strict';
// logs event
const eventPool = require('./eventPool');
require('./clients/vendor/index');
require('./clients/driver/index');
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
  console.log(`DRIVER: Package delivered to ${payload.store}`);
  console.log(`VENDOR: Thank you for delivering the package to ${payload.customer}!`);
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