var D3TimeScale = require("./scale"),
    d3_time_scaleLocalMethods = D3TimeScale._scaleLocalMethods,
    d3_true = require("../core/true")._true,
    d3_time_scaleFormat = D3TimeScale._scaleFormat,
    d3_time_scaleLinear = D3TimeScale._scaleLinear,
    d3_time_scale = D3TimeScale._scale,
    D3TimeFormatUtc = require("./format-utc"),
    D3ScaleLinear = require("../scale/linear");

var d3_time_scaleUTCMethods = d3_time_scaleLocalMethods.map(function(m) {
  return [m[0].utc, m[1]];
});

var d3_time_scaleUTCFormats = [
  [D3TimeFormatUtc("%Y"), d3_true],
  [D3TimeFormatUtc("%B"), function(d) { return d.getUTCMonth(); }],
  [D3TimeFormatUtc("%b %d"), function(d) { return d.getUTCDate() != 1; }],
  [D3TimeFormatUtc("%a %d"), function(d) { return d.getUTCDay() && d.getUTCDate() != 1; }],
  [D3TimeFormatUtc("%I %p"), function(d) { return d.getUTCHours(); }],
  [D3TimeFormatUtc("%I:%M"), function(d) { return d.getUTCMinutes(); }],
  [D3TimeFormatUtc(":%S"), function(d) { return d.getUTCSeconds(); }],
  [D3TimeFormatUtc(".%L"), function(d) { return d.getUTCMilliseconds(); }]
];

var d3_time_scaleUTCFormat = d3_time_scaleFormat(d3_time_scaleUTCFormats);

function d3_time_scaleUTCSetYear(y) {
  var d = new Date(Date.UTC(y, 0, 1));
  d.setUTCFullYear(y); // Y2K fail
  return d;
}

function d3_time_scaleUTCGetYear(d) {
  var y = d.getUTCFullYear(),
      d0 = d3_time_scaleUTCSetYear(y),
      d1 = d3_time_scaleUTCSetYear(y + 1);
  return y + (d - d0) / (d1 - d0);
}

d3_time_scaleUTCMethods.year = function(extent, m) {
  return d3_time_scaleLinear.domain(extent.map(d3_time_scaleUTCGetYear)).ticks(m).map(d3_time_scaleUTCSetYear);
};

var D3TimeScaleUtc = function() {
  return d3_time_scale(D3ScaleLinear(), d3_time_scaleUTCMethods, d3_time_scaleUTCFormat);
};

module.exports = D3TimeScaleUtc;
