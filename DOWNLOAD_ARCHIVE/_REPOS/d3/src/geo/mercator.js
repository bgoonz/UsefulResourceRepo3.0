var _u03c0 = require("../core/core")._u03c0,
    d3_geo_projection = require("./projection")._projection,
    D3GeoMercator;

function d3_geo_mercator(_u03bb, _u03c6) {
  return [
    _u03bb / (2 * _u03c0),
    Math.max(-.5, Math.min(+.5, Math.log(Math.tan(_u03c0 / 4 + _u03c6 / 2)) / (2 * _u03c0)))
  ];
}

d3_geo_mercator.invert = function(x, y) {
  return [
    2 * _u03c0 * x,
    2 * Math.atan(Math.exp(2 * _u03c0 * y)) - _u03c0 / 2
  ];
};

(D3GeoMercator = function() {
  return d3_geo_projection(d3_geo_mercator).scale(500);
}).raw = d3_geo_mercator;

module.exports = D3GeoMercator;
