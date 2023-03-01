'use strict';

const eventPool = require('../../eventPool');
const DRIVER = require('./index');

eventPool.on('pickup', (payload) => {
  setTimeout(() => {
    DRIVER(payload);
  }, 1000);
});