var D3ScaleLinear = require("./linear"),
    d3_scale_linearTicks = D3ScaleLinear._linearTicks,
    d3_scale_linearTickFormat = D3ScaleLinear._linearTickFormat;

var D3ScaleIdentity = function() {
  return d3_scale_identity([0, 1]);
};

function d3_scale_identity(domain) {

  function identity(x) { return +x; }

  identity.invert = identity;

  identity.domain = identity.range = function(x) {
    if (!arguments.length) return domain;
    domain = x.map(identity);
    return identity;
  };

  identity.ticks = function(m) {
    return d3_scale_linearTicks(domain, m);
  };

  identity.tickFormat = function(m) {
    return d3_scale_linearTickFormat(domain, m);
  };

  identity.copy = function() {
    return d3_scale_identity(domain);
  };

  return identity;
}

module.exports = D3ScaleIdentity;
