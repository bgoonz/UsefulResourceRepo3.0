const moment = require('moment');
const the = JSON.stringify;
const noop = function (){}

class OhlcAggregator {
  constructor({format = 'YYYY-MM-DD HH:00:00.000', cb = noop} = {}) {
    this.format = format;
    this.map = {};
    this.lastTime = null;
    this.cb = cb;
  }

  update(data, cb) {
    const time = moment.utc(data.time).format(this.format);

    if(this.map[time]) {
      // existing
      this.updateHighLowClose(time, data);
    } else {
      // new
      this.inializeMap(time, data);
      this.sendAggregated(cb);
    }

    this.lastTime = time;
  }

  inializeMap(time, data) {
    this.map[time] = {};
    this.map[time].high = data;
    this.map[time].low = data;
    this.map[time].ticks = new Set(); // no repeated values (has to be strings)
    this.map[time].ticks.add(the(data)); // open tick
  }

  updateHighLowClose(time, data) {
    const current = this.map[time];

    if (data.price > current.high.price) {
      current.high = data;
    }

    if (data.price < current.low.price) {
      current.low = data;
    }

    current.close = data;
  }

  sendAggregated(cb) {
    if (!this.map[this.lastTime]) return;

    const callback = cb || this.cb || noop;
    const last = this.map[this.lastTime];

    if (last.high.time > last.low.time) {
      last.ticks.add(the(last.low));
      last.ticks.add(the(last.high));
    } else {
      last.ticks.add(the(last.high));
      last.ticks.add(the(last.low));
    }
    if (last.close) {
      last.ticks.add(the(last.close));
    }

    callback(Array.from(last.ticks).map(s => JSON.parse(s)));

    delete this.map[this.lastTime]; // delete when sends data
  }

  flush(cb) {
    this.sendAggregated(cb);
  }
}

module.exports = OhlcAggregator;