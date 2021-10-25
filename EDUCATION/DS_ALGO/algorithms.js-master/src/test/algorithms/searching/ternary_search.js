const ternarySearch = require("../../..").Search.ternarySearch;
import assert from "assert";
const eps = 1e-6;

const fn1 = (x) => -((x - 2) ** 2) + 4;

const fn2 = (x) => -2 * Math.cos(x);

const closeEnough = (a, b, precision) => Math.abs(a - b) < precision;

describe.skip("Ternary search", () => {
  it("finds the maximum of passed function", () => {
    assert(closeEnough(ternarySearch(fn1, 0.0, 4.0, eps), 2.0, eps));
    assert(closeEnough(ternarySearch(fn1, 0.0, 1.0, eps), 1.0, eps));

    assert(closeEnough(ternarySearch(fn2, -2.0, 2.0, eps), 2.0, eps));
    assert(closeEnough(ternarySearch(fn2, 0, 2 * Math.PI, eps), Math.PI, eps));
  });
});
