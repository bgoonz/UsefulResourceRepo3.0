const freeGlobal = require("./_freeGlobal");

/** Detect free variable `self`. */
const freeSelf =
  typeof self == "object" && self && self.Object === Object && self;

/** Used as a reference to the global object. */
const root = freeGlobal || freeSelf || Function("return this")();

module.exports = root;
