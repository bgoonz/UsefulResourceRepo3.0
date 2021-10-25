import { Math as math } from "../../..";
const newtonSqrt = math.newtonSqrt;
import assert from "assert";

describe("Newton square root", () => {
  it("calculates the exact root of square numbers", () => {
    assert.strictEqual(newtonSqrt(0), 0);
    assert.strictEqual(newtonSqrt(1), 1);
    assert.strictEqual(newtonSqrt(4), 2);
    assert.strictEqual(newtonSqrt(9), 3);
    assert.strictEqual(newtonSqrt(16), 4);
    assert.strictEqual(newtonSqrt(25), 5);
    assert.strictEqual(newtonSqrt(36), 6);
    assert.strictEqual(newtonSqrt(49), 7);
    assert.strictEqual(newtonSqrt(64), 8);
    assert.strictEqual(newtonSqrt(81), 9);
    assert.strictEqual(newtonSqrt(100), 10);
  });

  it("calculates an approximated root for every number", () => {
    for (let i = 0; i < 1000; i++) {
      const newton = newtonSqrt(i);
      const nativeJS = Math.sqrt(i);
      const difference = Math.abs(newton - nativeJS);
      assert(
        difference < 1e-6,
        `Square root of ${i} should be ${nativeJS} but got ${newton} instead`
      );
    }
  });
});
