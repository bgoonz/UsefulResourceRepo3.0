var d3_geo_azimuthal = require("./azimuthal")._azimuthal,
    d3_geo_projection = require("./projection")._projection,
    D3GeoAzimuthalEqualArea;

var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(
  function(cos_u03bbcos_u03c6) { return Math.sqrt(2 / (1 + cos_u03bbcos_u03c6)); },
  function(_u03c1) { return 2 * Math.asin(_u03c1 / 2); }
);

(D3GeoAzimuthalEqualArea = function() {
  return d3_geo_projection(d3_geo_azimuthalEqualArea);
}).raw = d3_geo_azimuthalEqualArea;

module.exports = D3GeoAzimuthalEqualArea;
