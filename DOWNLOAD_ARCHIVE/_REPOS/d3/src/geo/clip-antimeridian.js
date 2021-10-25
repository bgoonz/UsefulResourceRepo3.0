var D3 = require("../core/core"),
    d3_geo_clip = require("./clip")._clip,
    d3_true = require("../core/true")._true,
    _u03c0 = D3._u03c0,
    _u03b5 = D3._u03b5;

var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate);

// Takes a line and cuts into visible segments. Return values:
//   0: there were intersections or the line was empty.
//   1: no intersections.
//   2: there were intersections, and the first and last segments should be
//      rejoined.
function d3_geo_clipAntimeridianLine(listener) {
  var _u03bb0 = NaN,
      _u03c60 = NaN,
      s_u03bb0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      listener.lineStart();
      clean = 1;
    },
    point: function(_u03bb1, _u03c61) {
      var s_u03bb1 = _u03bb1 > 0 ? _u03c0 : -_u03c0,
          d_u03bb = Math.abs(_u03bb1 - _u03bb0);
      if (Math.abs(d_u03bb - _u03c0) < _u03b5) { // line crosses a pole
        listener.point(_u03bb0, _u03c60 = (_u03c60 + _u03c61) / 2 > 0 ? _u03c0 / 2 : -_u03c0 / 2);
        listener.point(s_u03bb0, _u03c60);
        listener.lineEnd();
        listener.lineStart();
        listener.point(s_u03bb1, _u03c60);
        listener.point( _u03bb1, _u03c60);
        clean = 0;
      } else if (s_u03bb0 !== s_u03bb1 && d_u03bb >= _u03c0) { // line crosses antimeridian
        // handle degeneracies
        if (Math.abs(_u03bb0 - s_u03bb0) < _u03b5) _u03bb0 -= s_u03bb0 * _u03b5;
        if (Math.abs(_u03bb1 - s_u03bb1) < _u03b5) _u03bb1 -= s_u03bb1 * _u03b5;
        _u03c60 = d3_geo_clipAntimeridianIntersect(_u03bb0, _u03c60, _u03bb1, _u03c61);
        listener.point(s_u03bb0, _u03c60);
        listener.lineEnd();
        listener.lineStart();
        listener.point(s_u03bb1, _u03c60);
        clean = 0;
      }
      listener.point(_u03bb0 = _u03bb1, _u03c60 = _u03c61);
      s_u03bb0 = s_u03bb1;
    },
    lineEnd: function() {
      listener.lineEnd();
      _u03bb0 = _u03c60 = NaN;
    },
    // if there are intersections, we always rejoin the first and last segments.
    clean: function() { return 2 - clean; }
  };
}

function d3_geo_clipAntimeridianIntersect(_u03bb0, _u03c60, _u03bb1, _u03c61) {
  var cos_u03c60,
      cos_u03c61,
      sin_u03bb0__u03bb1 = Math.sin(_u03bb0 - _u03bb1);
  return Math.abs(sin_u03bb0__u03bb1) > _u03b5
      ? Math.atan((Math.sin(_u03c60) * (cos_u03c61 = Math.cos(_u03c61)) * Math.sin(_u03bb1)
                 - Math.sin(_u03c61) * (cos_u03c60 = Math.cos(_u03c60)) * Math.sin(_u03bb0))
                 / (cos_u03c60 * cos_u03c61 * sin_u03bb0__u03bb1))
      : (_u03c60 + _u03c61) / 2;
}

function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
  var _u03c6;
  if (from == null) {
    _u03c6 = direction * _u03c0 / 2;
    listener.point(-_u03c0,  _u03c6);
    listener.point( 0,  _u03c6);
    listener.point( _u03c0,  _u03c6);
    listener.point( _u03c0,  0);
    listener.point( _u03c0, -_u03c6);
    listener.point( 0, -_u03c6);
    listener.point(-_u03c0, -_u03c6);
    listener.point(-_u03c0,  0);
    listener.point(-_u03c0,  _u03c6);
  } else if (Math.abs(from[0] - to[0]) > _u03b5) {
    var s = (from[0] < to[0] ? 1 : -1) * _u03c0;
    _u03c6 = direction * s / 2;
    listener.point(-s, _u03c6);
    listener.point( 0, _u03c6);
    listener.point( s, _u03c6);
  } else {
    listener.point(to[0], to[1]);
  }
}

exports._clipAntimeridian = d3_geo_clipAntimeridian;
