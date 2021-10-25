var D3 = require("../core/core"),
    _u03b5 = D3._u03b5,
    d3_degrees = D3._degrees,
    d3_radians = D3._radians,
    D3GeoStream = require("./stream");

var D3GeoCentroid = function(object) {
  D3GeoCentroid._centroidDimension = d3_geo_centroidW = D3GeoCentroid._centroidX = D3GeoCentroid._centroidY = D3GeoCentroid._centroidZ = 0;
  D3GeoStream(object, d3_geo_centroid);
  var m;
  if (d3_geo_centroidW &&
      Math.abs(m = Math.sqrt(D3GeoCentroid._centroidX * D3GeoCentroid._centroidX + D3GeoCentroid._centroidY * D3GeoCentroid._centroidY + D3GeoCentroid._centroidZ * D3GeoCentroid._centroidZ)) > _u03b5) {
    return [
      Math.atan2(D3GeoCentroid._centroidY, D3GeoCentroid._centroidX) * d3_degrees,
      Math.asin(Math.max(-1, Math.min(1, D3GeoCentroid._centroidZ / m))) * d3_degrees
    ];
  }
};

var d3_geo_centroidDimension,
    d3_geo_centroidW,
    d3_geo_centroidX,
    d3_geo_centroidY,
    d3_geo_centroidZ;

var d3_geo_centroid = {
  sphere: function() {
    if (D3GeoCentroid._centroidDimension < 2) {
      D3GeoCentroid._centroidDimension = 2;
      d3_geo_centroidW = D3GeoCentroid._centroidX = D3GeoCentroid._centroidY = D3GeoCentroid._centroidZ = 0;
    }
  },
  point: d3_geo_centroidPoint,
  lineStart: d3_geo_centroidLineStart,
  lineEnd: d3_geo_centroidLineEnd,
  polygonStart: function() {
    if (D3GeoCentroid._centroidDimension < 2) {
      D3GeoCentroid._centroidDimension = 2;
      d3_geo_centroidW = D3GeoCentroid._centroidX = D3GeoCentroid._centroidY = D3GeoCentroid._centroidZ = 0;
    }
    d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
  },
  polygonEnd: function() {
    d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
  }
};

// Arithmetic mean of Cartesian vectors.
function d3_geo_centroidPoint(_u03bb, _u03c6) {
  if (D3GeoCentroid._centroidDimension) return;
  ++d3_geo_centroidW;
  _u03bb *= d3_radians;
  var cos_u03c6 = Math.cos(_u03c6 *= d3_radians);
  D3GeoCentroid._centroidX += (cos_u03c6 * Math.cos(_u03bb) - D3GeoCentroid._centroidX) / d3_geo_centroidW;
  D3GeoCentroid._centroidY += (cos_u03c6 * Math.sin(_u03bb) - D3GeoCentroid._centroidY) / d3_geo_centroidW;
  D3GeoCentroid._centroidZ += (Math.sin(_u03c6) - D3GeoCentroid._centroidZ) / d3_geo_centroidW;
}

function d3_geo_centroidRingStart() {
  var _u03bb00, _u03c600; // first point

  D3GeoCentroid._centroidDimension = 1;
  d3_geo_centroidLineStart();
  D3GeoCentroid._centroidDimension = 2;

  var linePoint = d3_geo_centroid.point;
  d3_geo_centroid.point = function(_u03bb, _u03c6) {
    linePoint(_u03bb00 = _u03bb, _u03c600 = _u03c6);
  };
  d3_geo_centroid.lineEnd = function() {
    d3_geo_centroid.point(_u03bb00, _u03c600);
    d3_geo_centroidLineEnd();
    d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
  };
}

function d3_geo_centroidLineStart() {
  var x0, y0, z0; // previous point

  if (D3GeoCentroid._centroidDimension > 1) return;
  if (D3GeoCentroid._centroidDimension < 1) {
    D3GeoCentroid._centroidDimension = 1;
    d3_geo_centroidW = D3GeoCentroid._centroidX = D3GeoCentroid._centroidY = D3GeoCentroid._centroidZ = 0;
  }

  d3_geo_centroid.point = function(_u03bb, _u03c6) {
    _u03bb *= d3_radians;
    var cos_u03c6 = Math.cos(_u03c6 *= d3_radians);
    x0 = cos_u03c6 * Math.cos(_u03bb);
    y0 = cos_u03c6 * Math.sin(_u03bb);
    z0 = Math.sin(_u03c6);
    d3_geo_centroid.point = nextPoint;
  };

  function nextPoint(_u03bb, _u03c6) {
    _u03bb *= d3_radians;
    var cos_u03c6 = Math.cos(_u03c6 *= d3_radians),
        x = cos_u03c6 * Math.cos(_u03bb),
        y = cos_u03c6 * Math.sin(_u03bb),
        z = Math.sin(_u03c6),
        w = Math.atan2(
          Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w),
          x0 * x + y0 * y + z0 * z);
    d3_geo_centroidW += w;
    D3GeoCentroid._centroidX += w * (x0 + (x0 = x));
    D3GeoCentroid._centroidY += w * (y0 + (y0 = y));
    D3GeoCentroid._centroidZ += w * (z0 + (z0 = z));
  }
}

function d3_geo_centroidLineEnd() {
  d3_geo_centroid.point = d3_geo_centroidPoint;
}

D3GeoCentroid._centroidDimension = d3_geo_centroidDimension;
D3GeoCentroid._centroidX = d3_geo_centroidX;
D3GeoCentroid._centroidY = d3_geo_centroidY;
D3GeoCentroid._centroidZ = d3_geo_centroidZ;

module.exports = D3GeoCentroid;
