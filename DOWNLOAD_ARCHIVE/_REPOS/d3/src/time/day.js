var D3Time = require("./time"),
    d3_time_interval = require("./interval")._interval;

var D3TimeDay = d3_time_interval(function(date) {
  var day = new D3Time._time(1970, 0);
  day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  return day;
}, function(date, offset) {
  date.setDate(date.getDate() + offset);
}, function(date) {
  return date.getDate() - 1;
});

D3TimeDay.s = D3TimeDay.range;
D3TimeDay.s.utc = D3TimeDay.utc.range;

D3TimeDay.ofYear = function(date) {
  var year = require("./year")(date);
  return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
};

module.exports = D3TimeDay;
