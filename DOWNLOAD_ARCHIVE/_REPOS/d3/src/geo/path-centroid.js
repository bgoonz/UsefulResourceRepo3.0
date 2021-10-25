var D3GeoCentroid = require("./centroid");

// TODO Unify this code with d3.geom.polygon centroid?
// TODO Enforce positive area for exterior, negative area for interior?

var d3_geo_pathCentroid = {
  point: d3_geo_pathCentroidPoint,

  // For lines, weight by length.
  lineStart: d3_geo_pathCentroidLineStart,
  lineEnd: d3_geo_pathCentroidLineEnd,

  // For polygons, weight by area.
  polygonStart: function() {
    d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
  },
  polygonEnd: function() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
    d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
    d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
  }
};

function d3_geo_pathCentroidPoint(x, y) {
  if (D3GeoCentroid._centroidDimension) return;
  D3GeoCentroid._centroidX += x;
  D3GeoCentroid._centroidY += y;
  ++D3GeoCentroid._centroidZ;
}

function d3_geo_pathCentroidLineStart() {
  var x0, y0;

  if (D3GeoCentroid._centroidDimension !== 1) {
    if (D3GeoCentroid._centroidDimension < 1) {
      D3GeoCentroid._centroidDimension = 1;
      D3GeoCentroid._centroidX = D3GeoCentroid._centroidY = D3GeoCentroid._centroidZ = 0;
    } else return;
  }

  d3_geo_pathCentroid.point = function(x, y) {
    d3_geo_pathCentroid.point = nextPoint;
    x0 = x, y0 = y;
  };

  function nextPoint(x, y) {
    var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
    D3GeoCentroid._centroidX += z * (x0 + x) / 2;
    D3GeoCentroid._centroidY += z * (y0 + y) / 2;
    D3GeoCentroid._centroidZ += z;
    x0 = x, y0 = y;
  }
}

function d3_geo_pathCentroidLineEnd() {
  d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
}

function d3_geo_pathCentroidRingStart() {
  var x00, y00, x0, y0;

  if (D3GeoCentroid._centroidDimension < 2) {
    D3GeoCentroid._centroidDimension = 2;
    D3GeoCentroid._centroidX = D3GeoCentroid._centroidY = D3GeoCentroid._centroidZ = 0;
  }

  // For the first point, …
  d3_geo_pathCentroid.point = function(x, y) {
    d3_geo_pathCentroid.point = nextPoint;
    x00 = x0 = x, y00 = y0 = y;
  };

  // For subsequent points, …
  function nextPoint(x, y) {
    var z = y0 * x - x0 * y;
    D3GeoCentroid._centroidX += z * (x0 + x);
    D3GeoCentroid._centroidY += z * (y0 + y);
    D3GeoCentroid._centroidZ += z * 3;
    x0 = x, y0 = y;
  }

  // For the last point, return to the start.
  d3_geo_pathCentroid.lineEnd = function() {
    nextPoint(x00, y00);
  };
}

exports._pathCentroid = d3_geo_pathCentroid;
