var D3SVGDiagonal = require("./diagonal"),
    d3_svg_diagonalProjection = D3SVGDiagonal._diagonalProjection,
    d3_svg_arcOffset = require("./arc")._arcOffset;

var D3SVGDiagonalRadial = function() {
  var diagonal = D3SVGDiagonal(),
      projection = d3_svg_diagonalProjection,
      projection_ = diagonal.projection;

  diagonal.projection = function(x) {
    return arguments.length
        ? projection_(d3_svg_diagonalRadialProjection(projection = x))
        : projection;
  };

  return diagonal;
};

function d3_svg_diagonalRadialProjection(projection) {
  return function() {
    var d = projection.apply(this, arguments),
        r = d[0],
        a = d[1] + d3_svg_arcOffset;
    return [r * Math.cos(a), r * Math.sin(a)];
  };
}

module.exports = D3SVGDiagonalRadial;
