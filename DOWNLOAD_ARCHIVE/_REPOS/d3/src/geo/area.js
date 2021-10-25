var D3 = require("../core/core"),
    _u03c0 = D3._u03c0,
    d3_noop = require("../core/noop")._noop,
    d3_radians = D3._radians,
    D3GeoStream = require("./stream");

var D3GeoArea = function(object) {
  d3_geo_areaSum = 0;
  D3GeoStream(object, d3_geo_area);
  return d3_geo_areaSum;
};

var d3_geo_areaSum,
    d3_geo_areaRingU,
    d3_geo_areaRingV;

var d3_geo_area = {
  sphere: function() { d3_geo_areaSum += 4 * _u03c0; },
  point: d3_noop,
  lineStart: d3_noop,
  lineEnd: d3_noop,

  // Only count area for polygon rings.
  polygonStart: function() {
    d3_geo_areaRingU = 1, d3_geo_areaRingV = 0;
    d3_geo_area.lineStart = d3_geo_areaRingStart;
  },
  polygonEnd: function() {
    var area = 2 * Math.atan2(d3_geo_areaRingV, d3_geo_areaRingU);
    d3_geo_areaSum += area < 0 ? 4 * _u03c0 + area : area;
    d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
  }
};

function d3_geo_areaRingStart() {
  var _u03bb00, _u03c600, _u03bb0, cos_u03c60, sin_u03c60; // start point and two previous points

  // For the first point, …
  d3_geo_area.point = function(_u03bb, _u03c6) {
    d3_geo_area.point = nextPoint;
    _u03bb0 = (_u03bb00 = _u03bb) * d3_radians, cos_u03c60 = Math.cos(_u03c6 = (_u03c600 = _u03c6) * d3_radians / 2 + _u03c0 / 4), sin_u03c60 = Math.sin(_u03c6);
  };

  // For subsequent points, …
  function nextPoint(_u03bb, _u03c6) {
    _u03bb *= d3_radians;
    _u03c6 = _u03c6 * d3_radians / 2 + _u03c0 / 4; // half the angular distance from south pole

    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    var d_u03bb = _u03bb - _u03bb0,
        cos_u03c6 = Math.cos(_u03c6),
        sin_u03c6 = Math.sin(_u03c6),
        k = sin_u03c60 * sin_u03c6,
        u0 = d3_geo_areaRingU,
        v0 = d3_geo_areaRingV,
        u = cos_u03c60 * cos_u03c6 + k * Math.cos(d_u03bb),
        v = k * Math.sin(d_u03bb);
    // ∑ arg(z) = arg(∏ z), where z = u + iv.
    d3_geo_areaRingU = u0 * u - v0 * v;
    d3_geo_areaRingV = v0 * u + u0 * v;

    // Advance the previous points.
    _u03bb0 = _u03bb, cos_u03c60 = cos_u03c6, sin_u03c60 = sin_u03c6;
  }

  // For the last point, return to the start.
  d3_geo_area.lineEnd = function() {
    nextPoint(_u03bb00, _u03c600);
  };
}

module.exports = D3GeoArea;
