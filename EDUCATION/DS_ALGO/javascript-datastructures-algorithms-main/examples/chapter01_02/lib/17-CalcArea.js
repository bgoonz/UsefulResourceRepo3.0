((global, factory) => {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    const mod = {
      exports: {},
    };
    factory(mod.exports);
    global.CalcArea = mod.exports;
  }
})(this, (exports) => {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  const circleArea = (exports.circleArea = function circleArea(r) {
    return 3.14 * r ** 2;
  });

  const squareArea = (exports.squareArea = function squareArea(s) {
    return s * s;
  });

  // export { circleArea, squareArea }; // {1}
  exports.circle = circleArea;
  exports.square = squareArea;
});
