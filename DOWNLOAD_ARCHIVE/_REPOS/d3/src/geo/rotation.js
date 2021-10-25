var d3_geo_compose = require("./compose")._compose,
    _u03c0 = require("../core/core")._u03c0;

// Note: |δλ| and |δφ| must be < 2π
function d3_geo_rotation(_u03b4_u03bb, _u03b4_u03c6, _u03b4_u03b3) {
  return _u03b4_u03bb ? (_u03b4_u03c6 || _u03b4_u03b3 ? d3_geo_compose(d3_geo_rotation_u03bb(_u03b4_u03bb), d3_geo_rotation_u03c6_u03b3(_u03b4_u03c6, _u03b4_u03b3))
    : d3_geo_rotation_u03bb(_u03b4_u03bb))
    : (_u03b4_u03c6 || _u03b4_u03b3 ? d3_geo_rotation_u03c6_u03b3(_u03b4_u03c6, _u03b4_u03b3)
    : require("./equirectangular")._equirectangular);
}

function d3_geo_forwardRotation_u03bb(_u03b4_u03bb) {
  return function(_u03bb, _u03c6) {
    return _u03bb += _u03b4_u03bb, [_u03bb > _u03c0 ? _u03bb - 2 * _u03c0 : _u03bb < -_u03c0 ? _u03bb + 2 * _u03c0 : _u03bb, _u03c6];
  };
}

function d3_geo_rotation_u03bb(_u03b4_u03bb) {
  var rotation = d3_geo_forwardRotation_u03bb(_u03b4_u03bb);
  rotation.invert = d3_geo_forwardRotation_u03bb(-_u03b4_u03bb);
  return rotation;
}

function d3_geo_rotation_u03c6_u03b3(_u03b4_u03c6, _u03b4_u03b3) {
  var cos_u03b4_u03c6 = Math.cos(_u03b4_u03c6),
      sin_u03b4_u03c6 = Math.sin(_u03b4_u03c6),
      cos_u03b4_u03b3 = Math.cos(_u03b4_u03b3),
      sin_u03b4_u03b3 = Math.sin(_u03b4_u03b3);

  function rotation(_u03bb, _u03c6) {
    var cos_u03c6 = Math.cos(_u03c6),
        x = Math.cos(_u03bb) * cos_u03c6,
        y = Math.sin(_u03bb) * cos_u03c6,
        z = Math.sin(_u03c6),
        k = z * cos_u03b4_u03c6 + x * sin_u03b4_u03c6;
    return [
      Math.atan2(y * cos_u03b4_u03b3 - k * sin_u03b4_u03b3, x * cos_u03b4_u03c6 - z * sin_u03b4_u03c6),
      Math.asin(Math.max(-1, Math.min(1, k * cos_u03b4_u03b3 + y * sin_u03b4_u03b3)))
    ];
  }

  rotation.invert = function(_u03bb, _u03c6) {
    var cos_u03c6 = Math.cos(_u03c6),
        x = Math.cos(_u03bb) * cos_u03c6,
        y = Math.sin(_u03bb) * cos_u03c6,
        z = Math.sin(_u03c6),
        k = z * cos_u03b4_u03b3 - y * sin_u03b4_u03b3;
    return [
      Math.atan2(y * cos_u03b4_u03b3 + z * sin_u03b4_u03b3, x * cos_u03b4_u03c6 + k * sin_u03b4_u03c6),
      Math.asin(Math.max(-1, Math.min(1, k * cos_u03b4_u03c6 - x * sin_u03b4_u03c6)))
    ];
  };

  return rotation;
}

exports._rotation = d3_geo_rotation;
