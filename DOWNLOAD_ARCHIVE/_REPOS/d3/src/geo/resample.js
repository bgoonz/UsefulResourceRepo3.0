var d3_geo_cartesian = require("./cartesian")._cartesian,
    _u03b5 = require("../core/core")._u03b5;

function d3_geo_resample(project) {
  var _u03b42 = .5, // precision, px²
      maxDepth = 16;

  function resample(stream) {
    var _u03bb0, x0, y0, a0, b0, c0; // previous point

    var resample = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resample.lineStart = polygonLineStart; },
      polygonEnd: function() { stream.polygonEnd(); resample.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resample.point = linePoint;
      stream.lineStart();
    }

    function linePoint(_u03bb, _u03c6) {
      var c = d3_geo_cartesian([_u03bb, _u03c6]), p = project(_u03bb, _u03c6);
      resampleLineTo(x0, y0, _u03bb0, a0, b0, c0, x0 = p[0], y0 = p[1], _u03bb0 = _u03bb, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resample.point = point;
      stream.lineEnd();
    }

    function polygonLineStart() {
      var _u03bb00, _u03c600, x00, y00, a00, b00, c00; // first point

      lineStart();

      resample.point = function(_u03bb, _u03c6) {
        linePoint(_u03bb00 = _u03bb, _u03c600 = _u03c6), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      };

      resample.lineEnd = function() {
        resampleLineTo(x0, y0, _u03bb0, a0, b0, c0, x00, y00, _u03bb00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      };
    }

    return resample;
  }

  function resampleLineTo(x0, y0, _u03bb0, a0, b0, c0, x1, y1, _u03bb1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * _u03b42 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = Math.sqrt(a * a + b * b + c * c),
          _u03c62 = Math.asin(c /= m),
          _u03bb2 = Math.abs(Math.abs(c) - 1) < _u03b5 ? (_u03bb0 + _u03bb1) / 2 : Math.atan2(b, a),
          p = project(_u03bb2, _u03c62),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > _u03b42 || Math.abs((dx * dx2 + dy * dy2) / d2 - .5) > .3) {
        resampleLineTo(x0, y0, _u03bb0, a0, b0, c0, x2, y2, _u03bb2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, _u03bb2, a, b, c, x1, y1, _u03bb1, a1, b1, c1, depth, stream);
      }
    }
  }

  resample.precision = function(_) {
    if (!arguments.length) return Math.sqrt(_u03b42);
    maxDepth = (_u03b42 = _ * _) > 0 && 16;
    return resample;
  };

  return resample;
}

exports._resample = d3_geo_resample;
