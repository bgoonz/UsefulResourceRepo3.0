import { Math as math } from "../../..";
const collatzConjecture = math.collatzConjecture;
import assert from "assert";

describe("Collatz Conjecture", () => {
  it("returns odd numbers divided by two", () => {
    assert.equal(collatzConjecture.calculate(200), 100);
    assert.equal(collatzConjecture.calculate(222), 111);
    assert.equal(collatzConjecture.calculate(444), 222);
  });

  it("returns even numbers multiplied by 3 + 1", () => {
    assert.equal(collatzConjecture.calculate(111), 334);
    assert.equal(collatzConjecture.calculate(333), 1000);
    assert.equal(collatzConjecture.calculate(555), 1666);
  });

  it("returns Collatz Conjecture sequence ", () => {
    assert.deepEqual(collatzConjecture.generate(10), [5, 16, 8, 4, 2, 1]);
  });
});
