if (!Function.prototype.seal) {
  Function.prototype.seal = function (o) {
    var fn = this,
      args = [].slice.call(arguments, 1);
    return function () {
      return fn.apply(o, args);
    };
  };
}
