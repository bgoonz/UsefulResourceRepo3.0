var D3 = require("./core");

var D3Random = {
  normal: function(_u00b5, _u03c3) {
    var n = arguments.length;
    if (n < 2) _u03c3 = 1;
    if (n < 1) _u00b5 = 0;
    return function() {
      var x, y, r;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        r = x * x + y * y;
      } while (!r || r > 1);
      return _u00b5 + _u03c3 * x * Math.sqrt(-2 * Math.log(r) / r);
    };
  },
  logNormal: function() {
    var random = D3Random.normal.apply(D3, arguments);
    return function() {
      return Math.exp(random());
    };
  },
  irwinHall: function(m) {
    return function() {
      for (var s = 0, j = 0; j < m; j++) s += Math.random();
      return s / m;
    };
  }
};

module.exports = D3Random;
