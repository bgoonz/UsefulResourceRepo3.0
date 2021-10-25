var D3Bisect = require("../core/bisect");

var D3ScaleThreshold = function() {
  return d3_scale_threshold([.5], [0, 1]);
};

function d3_scale_threshold(domain, range) {

  function scale(x) {
    return range[D3Bisect(domain, x)];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain;
    domain = _;
    return scale;
  };

  scale.range = function(_) {
    if (!arguments.length) return range;
    range = _;
    return scale;
  };

  scale.copy = function() {
    return d3_scale_threshold(domain, range);
  };

  return scale;
};

module.exports = D3ScaleThreshold;
