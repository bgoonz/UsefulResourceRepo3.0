var D3GeoPathArea = require("./path-area"),
    D3GeoCentroid = require("./centroid"),
    D3 = require("../core/core"),
    d3_geo_pathArea = D3GeoPathArea._pathArea,
    d3_geo_pathCentroid = require("./path-centroid")._pathCentroid,
    d3_geo_bounds = require("./bounds")._bounds,
    d3_identity = require("../core/identity")._identity,
    d3_geo_pathContext = require("./path-context")._pathContext,
    d3_geo_resample = require("./resample")._resample,
    d3_degrees = D3._degrees,
    d3_radians = D3._radians,
    D3GeoStream = require("./stream"),
    D3GeoAlbersUsa = require("./albers-usa");

// TODO better encapsulation for d3_geo_pathArea; move to area.js
// TODO better encapsulation for d3_geo_pathCentroid; move to centroid.js

var D3GeoPath = function() {
  var pointRadius = 4.5,
      projection,
      context,
      projectStream,
      contextStream;

  function path(object) {
    if (object) D3GeoStream(object, projectStream(
        contextStream.pointRadius(typeof pointRadius === "function"
            ? +pointRadius.apply(this, arguments)
            : pointRadius)));
    return contextStream.result();
  }

  path.area = function(object) {
    D3GeoPathArea._pathAreaSum = 0;
    D3GeoStream(object, projectStream(d3_geo_pathArea));
    return D3GeoPathArea._pathAreaSum;
  };

  path.centroid = function(object) {
    D3GeoCentroid._centroidDimension = D3GeoCentroid._centroidX = D3GeoCentroid._centroidY = D3GeoCentroid._centroidZ = 0;
    D3GeoStream(object, projectStream(d3_geo_pathCentroid));
    return D3GeoCentroid._centroidZ ? [D3GeoCentroid._centroidX / D3GeoCentroid._centroidZ, D3GeoCentroid._centroidY / D3GeoCentroid._centroidZ] : undefined;
  };

  path.bounds = function(object) {
    return d3_geo_bounds(projectStream)(object);
  };

  path.projection = function(_) {
    if (!arguments.length) return projection;
    projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
    return path;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = (context = _) == null ? new (require("./path-buffer")._pathBuffer) : new d3_geo_pathContext(_);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : +_;
    return path;
  };

  return path.projection(D3GeoAlbersUsa()).context(null);
};

function d3_geo_pathCircle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + (-2 * radius)
      + "a" + radius + "," + radius + " 0 1,1 0," + (+2 * radius)
      + "z";
}

function d3_geo_pathProjectStream(project) {
  var resample = d3_geo_resample(function(_u03bb, _u03c6) { return project([_u03bb * d3_degrees, _u03c6 * d3_degrees]); });
  return function(stream) {
    stream = resample(stream);
    return {
      point: function(_u03bb, _u03c6) { stream.point(_u03bb * d3_radians, _u03c6 * d3_radians); },
      sphere: function() { stream.sphere(); },
      lineStart: function() { stream.lineStart(); },
      lineEnd: function() { stream.lineEnd(); },
      polygonStart: function() { stream.polygonStart(); },
      polygonEnd: function() { stream.polygonEnd(); }
    };
  };
}

D3GeoPath._pathCircle = d3_geo_pathCircle;

module.exports = D3GeoPath;
