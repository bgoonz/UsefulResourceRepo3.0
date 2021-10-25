var d3_time_interval = require("./interval")._interval,
    D3TimeDay = require("./day");

var D3TimeMonth = d3_time_interval(function(date) {
  date = D3TimeDay(date);
  date.setDate(1);
  return date;
}, function(date, offset) {
  date.setMonth(date.getMonth() + offset);
}, function(date) {
  return date.getMonth();
});

D3TimeMonth.s = D3TimeMonth.range;
D3TimeMonth.s.utc = D3TimeMonth.utc.range;

module.exports = D3TimeMonth;
