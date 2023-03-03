'use strict';

class Queue {
  constructor() {
    this.data = {};
  }
  store(key, value) {
    this.data[key] = value;
    console.log(`${value} was added to ${key} queue`);
    return key;
  }

  read(key) {
    return this.data[key];
  }

  remove(key) {
    console.log(`${value} was deleted from ${key} queue`);
    let value = this.data[key];
    delete this.data[key];
    return value;
  }
}

module.exports = Queue;

//   mainQueue = {
//     this.data = {
//       driver = {
//         orderID: payload
//       },
//       flowers = {
//         orderID: payload
//       },
//       widgets = {
//         orderID: payload
//       }
//     }
// }