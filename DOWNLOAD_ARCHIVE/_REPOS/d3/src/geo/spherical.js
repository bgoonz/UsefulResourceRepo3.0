var _u03b5 = require("../core/core")._u03b5;

function d3_geo_spherical(cartesian) {
  return [
    Math.atan2(cartesian[1], cartesian[0]),
    Math.asin(Math.max(-1, Math.min(1, cartesian[2])))
  ];
}

function d3_geo_sphericalEqual(a, b) {
  return Math.abs(a[0] - b[0]) < _u03b5 && Math.abs(a[1] - b[1]) < _u03b5;
}

exports._spherical = d3_geo_spherical;
exports._sphericalEqual = d3_geo_sphericalEqual;
