var d3_time_interval = require("./interval")._interval;

var D3TimeYear = d3_time_interval(function(date) {
  date = require("./day")(date);
  date.setMonth(0, 1);
  return date;
}, function(date, offset) {
  date.setFullYear(date.getFullYear() + offset);
}, function(date) {
  return date.getFullYear();
});

D3TimeYear.s = D3TimeYear.range;
D3TimeYear.s.utc = D3TimeYear.utc.range;

module.exports = D3TimeYear;
