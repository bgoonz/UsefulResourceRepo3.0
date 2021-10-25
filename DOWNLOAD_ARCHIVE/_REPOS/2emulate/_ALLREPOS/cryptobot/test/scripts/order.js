const gdax = require('../providers/gdax');
const helper = require('../common/helper');

function orders(options) {
  const {side, size, price, cancel } = options;

  if(cancel) {
    console.log('canceling orders')
    gdax.cancelOrders(helper.callback, cancel);
  } else if(side) {
    console.log('creating order')
    gdax.setOrder({ side, size, price }, helper.callback);
  } else {
    console.log('getting orders')
    gdax.getOrders(helper.callback);
  }
}

module.exports = orders;