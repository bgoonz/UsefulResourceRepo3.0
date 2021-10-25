var d3_geo_azimuthal = require("./azimuthal")._azimuthal,
    d3_identity = require("../core/identity")._identity,
    d3_geo_projection = require("./projection")._projection,
    D3GeoAzimuthalEquidistant;

var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(
  function(cos_u03bbcos_u03c6) { var c = Math.acos(cos_u03bbcos_u03c6); return c && c / Math.sin(c); },
  d3_identity
);

(D3GeoAzimuthalEquidistant = function() {
  return d3_geo_projection(d3_geo_azimuthalEquidistant);
}).raw = d3_geo_azimuthalEquidistant;

module.exports = D3GeoAzimuthalEquidistant;
