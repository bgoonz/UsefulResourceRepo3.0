var D3 = require("../core/core"),
    d3_radians = D3._radians,
    d3_geo_projectionMutator = require("./projection")._projectionMutator,
    d3_degrees = D3._degrees,
    D3GeoAlbers;

function d3_geo_albers(_u03c60, _u03c61) {
  var sin_u03c60 = Math.sin(_u03c60),
      n = (sin_u03c60 + Math.sin(_u03c61)) / 2,
      C = 1 + sin_u03c60 * (2 * n - sin_u03c60),
      _u03c10 = Math.sqrt(C) / n;

  function albers(_u03bb, _u03c6) {
    var _u03c1 = Math.sqrt(C - 2 * n * Math.sin(_u03c6)) / n;
    return [
      _u03c1 * Math.sin(_u03bb *= n),
      _u03c10 - _u03c1 * Math.cos(_u03bb)
    ];
  }

  albers.invert = function(x, y) {
    var _u03c10_y = _u03c10 - y;
    return [
      Math.atan2(x, _u03c10_y) / n,
      Math.asin((C - (x * x + _u03c10_y * _u03c10_y) * n * n) / (2 * n))
    ];
  };

  return albers;
}

(D3GeoAlbers = function() {
  var _u03c60 = 29.5 * d3_radians,
      _u03c61 = 45.5 * d3_radians,
      m = d3_geo_projectionMutator(d3_geo_albers),
      p = m(_u03c60, _u03c61);

  p.parallels = function(_) {
    if (!arguments.length) return [_u03c60 * d3_degrees, _u03c61 * d3_degrees];
    return m(_u03c60 = _[0] * d3_radians, _u03c61 = _[1] * d3_radians);
  };

  return p.rotate([98, 0]).center([0, 38]).scale(1000);
}).raw = d3_geo_albers;

module.exports = D3GeoAlbers;
