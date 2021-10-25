// Abstract azimuthal projection.
function d3_geo_azimuthal(scale, angle) {
  function azimuthal(_u03bb, _u03c6) {
    var cos_u03bb = Math.cos(_u03bb),
        cos_u03c6 = Math.cos(_u03c6),
        k = scale(cos_u03bb * cos_u03c6);
    return [
      k * cos_u03c6 * Math.sin(_u03bb),
      k * Math.sin(_u03c6)
    ];
  }

  azimuthal.invert = function(x, y) {
    var _u03c1 = Math.sqrt(x * x + y * y),
        c = angle(_u03c1),
        sinc = Math.sin(c),
        cosc = Math.cos(c);
    return [
      Math.atan2(x * sinc, _u03c1 * cosc),
      Math.asin(_u03c1 && y * sinc / _u03c1)
    ];
  };

  return azimuthal;
}

exports._azimuthal = d3_geo_azimuthal;
