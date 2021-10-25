var d3_geo_azimuthal = require("./azimuthal")._azimuthal,
    d3_geo_projection = require("./projection")._projection,
    D3GeoStereographic;

var d3_geo_stereographic = d3_geo_azimuthal(
  function(cos_u03bbcos_u03c6) { return 1 / (1 + cos_u03bbcos_u03c6); },
  function(_u03c1) { return 2 * Math.atan(_u03c1); }
);

(D3GeoStereographic = function() {
  return d3_geo_projection(d3_geo_stereographic);
}).raw = d3_geo_stereographic;

module.exports = D3GeoStereographic;
