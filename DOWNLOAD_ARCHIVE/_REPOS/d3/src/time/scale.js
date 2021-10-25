var d3_scale_nice = require("../scale/nice")._nice,
    d3_true = require("../core/true")._true,
    D3Bisect = require("../core/bisect"),
    D3Rebind = require("../core/rebind"),
    D3TimeSecond = require("./second"),
    D3TimeMinute = require("./minute"),
    D3TimeHour = require("./hour"),
    D3TimeDay = require("./day"),
    D3TimeWeek = require("./week"),
    D3TimeMonth = require("./month"),
    D3TimeYear = require("./year"),
    D3TimeFormat = require("./format"),
    D3ScaleLinear = require("../scale/linear");

function d3_time_scale(linear, methods, format) {

  function scale(x) {
    return linear(x);
  }

  scale.invert = function(x) {
    return d3_time_scaleDate(linear.invert(x));
  };

  scale.domain = function(x) {
    if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
    linear.domain(x);
    return scale;
  };

  scale.nice = function(m) {
    return scale.domain(d3_scale_nice(scale.domain(), function() { return m; }));
  };

  scale.ticks = function(m, k) {
    var extent = d3_time_scaleExtent(scale.domain());
    if (typeof m !== "function") {
      var span = extent[1] - extent[0],
          target = span / m,
          i = D3Bisect(d3_time_scaleSteps, target);
      if (i == d3_time_scaleSteps.length) return methods.year(extent, m);
      if (!i) return linear.ticks(m).map(d3_time_scaleDate);
      if (Math.log(target / d3_time_scaleSteps[i - 1]) < Math.log(d3_time_scaleSteps[i] / target)) --i;
      m = methods[i];
      k = m[1];
      m = m[0].range;
    }
    return m(extent[0], new Date(+extent[1] + 1), k); // inclusive upper bound
  };

  scale.tickFormat = function() {
    return format;
  };

  scale.copy = function() {
    return d3_time_scale(linear.copy(), methods, format);
  };

  // TOOD expose d3_scale_linear_rebind?
  return D3Rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
}

// TODO expose d3_scaleExtent?
function d3_time_scaleExtent(domain) {
  var start = domain[0], stop = domain[domain.length - 1];
  return start < stop ? [start, stop] : [stop, start];
}

function d3_time_scaleDate(t) {
  return new Date(t);
}

function d3_time_scaleFormat(formats) {
  return function(date) {
    var i = formats.length - 1, f = formats[i];
    while (!f[1](date)) f = formats[--i];
    return f[0](date);
  };
}

function d3_time_scaleSetYear(y) {
  var d = new Date(y, 0, 1);
  d.setFullYear(y); // Y2K fail
  return d;
}

function d3_time_scaleGetYear(d) {
  var y = d.getFullYear(),
      d0 = d3_time_scaleSetYear(y),
      d1 = d3_time_scaleSetYear(y + 1);
  return y + (d - d0) / (d1 - d0);
}

var d3_time_scaleSteps = [
  1e3,    // 1-second
  5e3,    // 5-second
  15e3,   // 15-second
  3e4,    // 30-second
  6e4,    // 1-minute
  3e5,    // 5-minute
  9e5,    // 15-minute
  18e5,   // 30-minute
  36e5,   // 1-hour
  108e5,  // 3-hour
  216e5,  // 6-hour
  432e5,  // 12-hour
  864e5,  // 1-day
  1728e5, // 2-day
  6048e5, // 1-week
  2592e6, // 1-month
  7776e6, // 3-month
  31536e6 // 1-year
];

var d3_time_scaleLocalMethods = [
  [D3TimeSecond, 1],
  [D3TimeSecond, 5],
  [D3TimeSecond, 15],
  [D3TimeSecond, 30],
  [D3TimeMinute, 1],
  [D3TimeMinute, 5],
  [D3TimeMinute, 15],
  [D3TimeMinute, 30],
  [D3TimeHour, 1],
  [D3TimeHour, 3],
  [D3TimeHour, 6],
  [D3TimeHour, 12],
  [D3TimeDay, 1],
  [D3TimeDay, 2],
  [D3TimeWeek, 1],
  [D3TimeMonth, 1],
  [D3TimeMonth, 3],
  [D3TimeYear, 1]
];

var d3_time_scaleLocalFormats = [
  [D3TimeFormat("%Y"), d3_true],
  [D3TimeFormat("%B"), function(d) { return d.getMonth(); }],
  [D3TimeFormat("%b %d"), function(d) { return d.getDate() != 1; }],
  [D3TimeFormat("%a %d"), function(d) { return d.getDay() && d.getDate() != 1; }],
  [D3TimeFormat("%I %p"), function(d) { return d.getHours(); }],
  [D3TimeFormat("%I:%M"), function(d) { return d.getMinutes(); }],
  [D3TimeFormat(":%S"), function(d) { return d.getSeconds(); }],
  [D3TimeFormat(".%L"), function(d) { return d.getMilliseconds(); }]
];

var d3_time_scaleLinear = D3ScaleLinear(),
    d3_time_scaleLocalFormat = d3_time_scaleFormat(d3_time_scaleLocalFormats);

d3_time_scaleLocalMethods.year = function(extent, m) {
  return d3_time_scaleLinear.domain(extent.map(d3_time_scaleGetYear)).ticks(m).map(d3_time_scaleSetYear);
};

var D3TimeScale = function() {
  return d3_time_scale(D3ScaleLinear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
};

D3TimeScale._scaleLocalMethods = d3_time_scaleLocalMethods;
D3TimeScale._scaleLinear = d3_time_scaleLinear;
D3TimeScale._scale = d3_time_scale;
D3TimeScale._scaleFormat = d3_time_scaleFormat;

module.exports = D3TimeScale;
