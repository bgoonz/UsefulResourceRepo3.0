/** A really, really, really fake websocket */
class FakeWebSocket {
  constructor({url, values, time = 10} = {}) {
    this.url = url;
    this.values = values;
    this.time = time;
    // console.log('connecting to ' + url);
    this.open();
    this.start();
    // console.log('FakeWebSocket::constructor');
  }

  start() {
    let i = 0;
    if(this.values) {
      this.id = setInterval(() => this.triggerEvent('message', this.values[i >= this.values.length ? i - 1 : ++i]), this.time);
    } else {
      this.id = setInterval(() => this.triggerEvent('message', ++i), this.time);
    }
  }

  open() {
    this.triggerEvent('open', 'opened');
  }

  close() {
    // console.log('closing connection to ' + this.url);
    clearInterval(this.id);
  }

  disconnect() {
    this.close();
  }

  addEventListener(name, handler) {
    const listeners = this.listeners = this.listeners || {};
    const handlers = listeners[name] = listeners[name] || [];
    handlers.push(handler);
  }

  removeEventListener(name) {
    // throw new Error('No implemented');
  }

  off(name) {
    this.removeEventListener(name);
  }

  on(name, handler) {
    this.addEventListener(name, handler);
  }

  triggerEvent(type, msg) {
    // console.log('t', msg);

    const listeners = this.listeners;
    if (listeners) {
      const handlers = listeners[type];
      handlers.forEach(handler => handler({
        // target: this,
        type: 'match',
        trade_id: 17499723,
        maker_order_id: '7031b122-c342-4b13-98f1-173539fe17a6',
        taker_order_id: '42ba677f-2ed0-44c6-bc98-5750ff16f487',
        side: 'buy',
        size: '0.02000000',
        price: msg,
        product_id: 'BTC-USD',
        sequence: 3436653933,
        time: '2017-06-27T21:27:16.802000Z'
      }));
    }
  }
}

module.exports = FakeWebSocket;