var _u03b5 = require("../core/core")._u03b5,
    D3Range = require("../core/range");

var D3GeoGraticule = function() {
  var x1, x0,
      y1, y0,
      dx = 22.5, dy = dx,
      x, y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return D3Range(Math.ceil(x0 / dx) * dx, x1, dx).map(x)
        .concat(D3Range(Math.ceil(y0 / dy) * dy, y1, dy).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  }

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        x(x0).concat(
        y(y1).slice(1),
        x(x1).reverse().slice(1),
        y(y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = d3_geo_graticuleX(y0, y1, precision);
    y = d3_geo_graticuleY(x0, x1, precision);
    return graticule;
  };

  return graticule.extent([[-180 + _u03b5, -90 + _u03b5], [180 - _u03b5, 90 - _u03b5]]);
};

function d3_geo_graticuleX(y0, y1, dy) {
  var y = D3Range(y0, y1 - _u03b5, dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function d3_geo_graticuleY(x0, x1, dx) {
  var x = D3Range(x0, x1 - _u03b5, dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

module.exports = D3GeoGraticule;
