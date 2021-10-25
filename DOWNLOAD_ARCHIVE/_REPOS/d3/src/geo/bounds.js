var d3_identity = require("../core/identity")._identity,
    d3_noop = require("../core/noop")._noop,
    D3GeoStream = require("./stream");

var D3GeoBounds = d3_geo_bounds(d3_identity);

function d3_geo_bounds(projectStream) {
  var x0, y0, x1, y1;

  var bound = {
    point: boundPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,

    // While inside a polygon, ignore points in holes.
    polygonStart: function() { bound.lineEnd = boundPolygonLineEnd; },
    polygonEnd: function() { bound.point = boundPoint; }
  };

  function boundPoint(x, y) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  function boundPolygonLineEnd() {
    bound.point = bound.lineEnd = d3_noop;
  }

  return function(feature) {
    y1 = x1 = -(x0 = y0 = Infinity);
    D3GeoStream(feature, projectStream(bound));
    return [[x0, y0], [x1, y1]];
  };
}

D3GeoBounds._bounds = d3_geo_bounds;

module.exports = D3GeoBounds;
