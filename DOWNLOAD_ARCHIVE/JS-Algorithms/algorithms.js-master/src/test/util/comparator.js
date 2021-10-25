import Comparator from "../../util/comparator";
import assert from "assert";

describe("Comparator", () => {
  it("uses a default arithmetic comparison if no function is passed", () => {
    const c = new Comparator();
    assert.equal(c.compare(1, 1), 0);
    assert.equal(c.compare(1, 2), -1);
    assert.equal(c.compare(1, 0), 1);
    assert.equal(c.compare("a", "b"), -1);
    assert(c.lessThan(0, 1));
    assert(!c.lessThan(1, 1));
    assert(c.lessThanOrEqual(1, 1));
    assert(c.lessThanOrEqual(0, 1));
    assert(!c.lessThanOrEqual(1, 0));
    assert(c.greaterThan(1, 0));
    assert(!c.greaterThan(1, 1));
    assert(c.greaterThanOrEqual(1, 1));
    assert(c.greaterThanOrEqual(1, 0));
    assert(!c.greaterThanOrEqual(0, 1));
    assert(c.equal(0, 0));
    assert(!c.equal(0, 1));
  });

  it("allows comparison function to be defined by user", () => {
    const compareFn = () => 0;
    const c = new Comparator(compareFn);
    assert.equal(c.compare(1, 1), 0);
    assert.equal(c.compare(1, 2), 0);
    assert.equal(c.compare(1, 0), 0);
    assert.equal(c.compare("a", "b"), 0);
    assert(!c.lessThan(0, 1));
    assert(!c.lessThan(1, 1));
    assert(c.lessThanOrEqual(1, 1));
    assert(c.lessThanOrEqual(0, 1));
    assert(c.lessThanOrEqual(1, 0));
    assert(!c.greaterThan(1, 0));
    assert(!c.greaterThan(1, 1));
    assert(c.greaterThanOrEqual(1, 1));
    assert(c.greaterThanOrEqual(1, 0));
    assert(c.greaterThanOrEqual(0, 1));
    assert(c.equal(0, 0));
    assert(c.equal(0, 1));
  });

  it("allows reversing the comparisons", () => {
    const c = new Comparator();
    c.reverse();
    assert.equal(c.compare(1, 1), 0);
    assert.equal(c.compare(1, 2), 1);
    assert.equal(c.compare(1, 0), -1);
    assert.equal(c.compare("a", "b"), 1);
    assert(!c.lessThan(0, 1));
    assert(!c.lessThan(1, 1));
    assert(c.lessThanOrEqual(1, 1));
    assert(!c.lessThanOrEqual(0, 1));
    assert(c.lessThanOrEqual(1, 0));
    assert(!c.greaterThan(1, 0));
    assert(!c.greaterThan(1, 1));
    assert(c.greaterThanOrEqual(1, 1));
    assert(!c.greaterThanOrEqual(1, 0));
    assert(c.greaterThanOrEqual(0, 1));
    assert(c.equal(0, 0));
    assert(!c.equal(0, 1));
  });
});
