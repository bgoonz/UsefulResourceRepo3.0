var d3_geo_azimuthal = require("./azimuthal")._azimuthal,
    d3_geo_projection = require("./projection")._projection,
    D3GeoGnomonic;

var d3_geo_gnomonic = d3_geo_azimuthal(
  function(cos_u03bbcos_u03c6) { return 1 / cos_u03bbcos_u03c6; },
  Math.atan
);

(D3GeoGnomonic = function() {
  return d3_geo_projection(d3_geo_gnomonic);
}).raw = d3_geo_gnomonic;

module.exports = D3GeoGnomonic;
