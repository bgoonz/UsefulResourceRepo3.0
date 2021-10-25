const DisjointSetForest = require("../..").DataStructures.DisjointSetForest;
import assert from "assert";

describe("Disjoint Set Forest", () => {
  it("decides if two elements belong to the same subset or not", () => {
    const forest = new DisjointSetForest();
    assert(!forest.sameSubset(1, 2));
    forest.merge(1, 2);
    assert(forest.sameSubset(1, 2));
    forest.merge(3, 4);
    assert(!forest.sameSubset(2, 4));
    forest.merge(1, 3);
    assert(forest.sameSubset(1, 2, 3, 4));
    assert(!forest.sameSubset(1, 5));
  });

  it("maintains subset sizes", () => {
    const forest = new DisjointSetForest();
    const assertSizesCorrect = (elements, size) => {
      elements.forEach((element) => {
        assert.equal(forest.size(element), size);
      });
    };
    assertSizesCorrect([0, 1, 2, 3, 4], 1);
    forest.merge(0, 1);
    assertSizesCorrect([0, 1], 2);
    forest.merge(0, 2);
    assertSizesCorrect([0, 1, 2], 3);
    forest.merge(2, 1);
    assertSizesCorrect([0, 1, 2], 3);
    forest.merge(3, 4);
    assertSizesCorrect([3, 4], 2);
    forest.merge(0, 4);
    assertSizesCorrect([0, 1, 2, 3, 4], 5);
  });

  it("points all elements to the same root", () => {
    const forest = new DisjointSetForest();
    const assertSameRoot = (element, ...rest) => {
      const root = forest.root(element);
      rest.forEach((element) => {
        assert.equal(forest.root(element), root);
      });
    };
    forest.merge(0, 1);
    assertSameRoot(0, 1);
    forest.merge(1, 2);
    assertSameRoot(0, 1, 2);
    forest.merge(1, 3, 4);
    assertSameRoot(0, 1, 2, 3, 4);
    forest.merge(0, 5);
    assertSameRoot(0, 1, 2, 3, 4, 5);
  });

  it("does not choose the root element outside the subset", () => {
    const forest = new DisjointSetForest();
    const assertInside = (value, set) =>
      set.some((element) => element === value);
    assert.equal(forest.root(0), 0);
    forest.merge(0, 1);
    assertInside(forest.root(0), [0, 1]);
    forest.merge(2, 3);
    assertInside(forest.root(2), [2, 3]);
    forest.merge(4, 5, 6);
    assertInside(forest.root(4), [4, 5, 6]);
    forest.merge(0, 1, 2, 5, 6);
    assertInside(forest.root(4), [0, 1, 2, 3, 4, 5, 6]);
  });
});
