const HashSet = require("../..").DataStructures.Set;
import assert from "assert";

describe("HashSet", () => {
  it("starts empty", () => {
    const s = new HashSet();
    assert.equal(s.size, 0);
  });

  it("adds all initial arguments", () => {
    const s = new HashSet(1, 2, 3);
    assert.equal(s.size, 3);
    assert(s.contains(1));
    assert(s.contains(2));
    assert(s.contains(3));
  });

  it("adds all arguments", () => {
    const s = new HashSet(1, 2, 3);
    assert.equal(s.size, 3);
    s.add(4, 5, 6);
    assert.equal(s.size, 6);
    assert(s.contains(1));
    assert(s.contains(2));
    assert(s.contains(3));
    assert(s.contains(4));
    assert(s.contains(5));
    assert(s.contains(6));
  });

  it("removes all arguments", () => {
    const s = new HashSet(1, 2, 3);
    assert.equal(s.size, 3);
    s.remove(1, 3);
    assert.equal(s.size, 1);
    assert(!s.contains(1));
    assert(!s.contains(3));
    assert(s.contains(2));
  });

  it("does nothing when trying to remove an element that doesnt exist", () => {
    const s = new HashSet(1, 2, 3);
    assert.equal(s.size, 3);
    s.remove(4);
    assert.equal(s.size, 3);
    assert(s.contains(1));
    assert(s.contains(2));
    assert(s.contains(3));
  });

  it("only contains its elements", () => {
    const s = new HashSet(1, 2, 3);
    assert(s.contains(1));
    assert(!s.contains(4));
  });

  it("performs a function to all elements with forEach", () => {
    const s = new HashSet();
    s.add(1, 2, 3);

    let total = 0;
    s.forEach((elem) => {
      total += elem;
    });

    assert.equal(total, 6);
  });
});
