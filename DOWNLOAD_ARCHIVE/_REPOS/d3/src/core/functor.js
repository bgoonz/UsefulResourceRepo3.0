function d3_functor(v) {
  return typeof v === "function" ? v : function() { return v; };
}

var D3Functor = d3_functor;

D3Functor._functor = d3_functor;

module.exports = D3Functor;
