var D3 = require("../core/core"),
    d3_geo_resample = require("./resample")._resample,
    d3_geo_clipAntimeridian = require("./clip-antimeridian")._clipAntimeridian,
    d3_radians = D3._radians,
    d3_degrees = D3._degrees,
    d3_geo_compose = require("./compose")._compose,
    _u03c0 = D3._u03c0,
    D3Rebind = require("../core/rebind");

var D3GeoProjection = d3_geo_projection;
D3GeoProjection.mutator = d3_geo_projectionMutator;

function d3_geo_projection(project) {
  return d3_geo_projectionMutator(function() { return project; })();
}

function d3_geo_projectionMutator(projectAt) {
  var project,
      rotate,
      projectRotate,
      projectResample = d3_geo_resample(function(x, y) { x = project(x, y); return [x[0] * k + _u03b4x, _u03b4y - x[1] * k]; }),
      k = 150, // scale
      x = 480, y = 250, // translate
      _u03bb = 0, _u03c6 = 0, // center
      _u03b4_u03bb = 0, _u03b4_u03c6 = 0, _u03b4_u03b3 = 0, // rotate
      _u03b4x, _u03b4y, // center
      clip = d3_geo_clipAntimeridian,
      clipAngle = null;

  function projection(point) {
    point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
    return [point[0] * k + _u03b4x, _u03b4y - point[1] * k];
  }

  function invert(point) {
    point = projectRotate.invert((point[0] - _u03b4x) / k, (_u03b4y - point[1]) / k);
    return point && [point[0] * d3_degrees, point[1] * d3_degrees];
  }

  projection.stream = function(stream) {
    return d3_geo_projectionRadiansRotate(rotate, clip(projectResample(stream)));
  };

  projection.clipAngle = function(_) {
    if (!arguments.length) return clipAngle;
    clip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : require("./clip-circle")._clipCircle(clipAngle = +_);
    return projection;
  };

  projection.scale = function(_) {
    if (!arguments.length) return k;
    k = +_;
    return reset();
  };

  projection.translate = function(_) {
    if (!arguments.length) return [x, y];
    x = +_[0];
    y = +_[1];
    return reset();
  };

  projection.center = function(_) {
    if (!arguments.length) return [_u03bb * d3_degrees, _u03c6 * d3_degrees];
    _u03bb = _[0] % 360 * d3_radians;
    _u03c6 = _[1] % 360 * d3_radians;
    return reset();
  };

  projection.rotate = function(_) {
    if (!arguments.length) return [_u03b4_u03bb * d3_degrees, _u03b4_u03c6 * d3_degrees, _u03b4_u03b3 * d3_degrees];
    _u03b4_u03bb = _[0] % 360 * d3_radians;
    _u03b4_u03c6 = _[1] % 360 * d3_radians;
    _u03b4_u03b3 = _.length > 2 ? _[2] % 360 * d3_radians : 0;
    return reset();
  };

  D3Rebind(projection, projectResample, "precision");

  function reset() {
    projectRotate = d3_geo_compose(rotate = require("./rotation")._rotation(_u03b4_u03bb, _u03b4_u03c6, _u03b4_u03b3), project);
    var center = project(_u03bb, _u03c6);
    _u03b4x = x - center[0] * k;
    _u03b4y = y + center[1] * k;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return reset();
  };
}

function d3_geo_projectionRadiansRotate(rotate, stream) {
  return {
    point: function(x, y) {
      y = rotate(x * d3_radians, y * d3_radians), x = y[0];
      stream.point(x > _u03c0 ? x - 2 * _u03c0 : x < -_u03c0 ? x + 2 * _u03c0 : x, y[1]);
    },
    sphere: function() { stream.sphere(); },
    lineStart: function() { stream.lineStart(); },
    lineEnd: function() { stream.lineEnd(); },
    polygonStart: function() { stream.polygonStart(); },
    polygonEnd: function() { stream.polygonEnd(); }
  };
}

D3GeoProjection._projection = d3_geo_projection;
D3GeoProjection._projectionMutator = d3_geo_projectionMutator;

module.exports = D3GeoProjection;
