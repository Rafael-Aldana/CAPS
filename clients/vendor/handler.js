'use strict';

const eventPool = require('../../eventPool');
const vendor = require('./index');

eventPool.on('VENDOR', (storeName) => {
  setTimeout(() => {
    vendor(storeName);
  },1000);
});