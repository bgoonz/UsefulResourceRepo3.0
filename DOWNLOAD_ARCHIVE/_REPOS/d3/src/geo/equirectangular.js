var _u03c0 = require("../core/core")._u03c0,
    D3GeoEquirectangular;

function d3_geo_equirectangular(_u03bb, _u03c6) {
  return [_u03bb, _u03c6];
}

(D3GeoEquirectangular = function() {
  return require("./projection")._projection(d3_geo_equirectangular).scale(250 / _u03c0);
}).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;

D3GeoEquirectangular._equirectangular = d3_geo_equirectangular;

module.exports = D3GeoEquirectangular;
