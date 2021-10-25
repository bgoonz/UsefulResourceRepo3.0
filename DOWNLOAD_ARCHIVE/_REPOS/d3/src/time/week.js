var D3Time = require("./time"),
    d3_time_daySymbols = D3Time._daySymbols,
    d3_time_interval = require("./interval")._interval,
    D3TimeDay = require("./day"),
    D3TimeYear = require("./year");

d3_time_daySymbols.forEach(function(day, i) {
  day = day.toLowerCase();
  i = 7 - i;

  var interval = D3Time[day] = d3_time_interval(function(date) {
    (date = D3TimeDay(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
    return date;
  }, function(date, offset) {
    date.setDate(date.getDate() + Math.floor(offset) * 7);
  }, function(date) {
    var day = D3TimeYear(date).getDay();
    return Math.floor((D3TimeDay.ofYear(date) + (day + i) % 7) / 7) - (day !== i);
  });

  D3Time[day + "s"] = interval.range;
  D3Time[day + "s"].utc = interval.utc.range;

  D3Time[day + "OfYear"] = function(date) {
    var day = D3TimeYear(date).getDay();
    return Math.floor((D3TimeDay.ofYear(date) + (day + i) % 7) / 7);
  };
});

var D3TimeWeek = D3Time.sunday;
D3TimeWeek.s = D3Time.sunday.range;
D3TimeWeek.s.utc = D3Time.sunday.utc.range;
D3TimeWeek.ofYear = D3Time.sundayOfYear;

module.exports = D3TimeWeek;
