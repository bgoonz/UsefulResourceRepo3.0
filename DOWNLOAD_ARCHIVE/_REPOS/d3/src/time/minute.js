var D3Time = require("./time"),
    d3_time_interval = require("./interval")._interval;

var D3TimeMinute = d3_time_interval(function(date) {
  return new D3Time._time(Math.floor(date / 6e4) * 6e4);
}, function(date, offset) {
  date.setTime(date.getTime() + Math.floor(offset) * 6e4); // DST breaks setMinutes
}, function(date) {
  return date.getMinutes();
});

D3TimeMinute.s = D3TimeMinute.range;
D3TimeMinute.s.utc = D3TimeMinute.utc.range;

module.exports = D3TimeMinute;
