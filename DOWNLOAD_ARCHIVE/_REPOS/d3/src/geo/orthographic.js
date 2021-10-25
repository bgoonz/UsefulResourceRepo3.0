var d3_geo_azimuthal = require("./azimuthal")._azimuthal,
    d3_geo_projection = require("./projection")._projection,
    D3GeoOrthographic;

var d3_geo_orthographic = d3_geo_azimuthal(
  function() { return 1; },
  Math.asin
);

(D3GeoOrthographic = function() {
  return d3_geo_projection(d3_geo_orthographic);
}).raw = d3_geo_orthographic;

module.exports = D3GeoOrthographic;
