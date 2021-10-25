const SegmentTree = require("../..").DataStructures.SegmentTree;
import assert from "assert";

describe("SegmentTree", () => {
  it("allows modification of value at any index", () => {
    const tree = new SegmentTree(10);
    tree.modify(0, 5);
    tree.modify(1, 12);
    tree.modify(2, 7);
    tree.modify(3, -100);
    tree.modify(4, 3);
    tree.modify(5, 9);
    tree.modify(6, 100);
    tree.modify(7, 0);
    tree.modify(8, -25);
    tree.modify(9, 40);

    assert.equal(tree.getSum(0, 0), 5);
    assert.equal(tree.getSum(5, 5), 9);
    assert.equal(tree.getSum(9, 9), 40);
    assert.equal(tree.getSum(4, 4), 3);
    assert.equal(tree.getSum(3, 3), -100);
    assert.equal(tree.getSum(1, 1), 12);
    assert.equal(tree.getSum(7, 7), 0);
    assert.equal(tree.getSum(8, 8), -25);
    assert.equal(tree.getMin(0, 0), 5);
    assert.equal(tree.getMin(5, 5), 9);
    assert.equal(tree.getMin(9, 9), 40);
    assert.equal(tree.getMin(4, 4), 3);
    assert.equal(tree.getMin(3, 3), -100);
    assert.equal(tree.getMin(1, 1), 12);
    assert.equal(tree.getMin(7, 7), 0);
    assert.equal(tree.getMin(8, 8), -25);
    assert.equal(tree.getMax(0, 0), 5);
    assert.equal(tree.getMax(5, 5), 9);
    assert.equal(tree.getMax(9, 9), 40);
    assert.equal(tree.getMax(4, 4), 3);
    assert.equal(tree.getMax(3, 3), -100);
    assert.equal(tree.getMax(1, 1), 12);
    assert.equal(tree.getMax(7, 7), 0);
    assert.equal(tree.getMax(8, 8), -25);
  });

  it("allows range sum queries", () => {
    const tree = new SegmentTree(10);
    tree.modify(0, 5);
    tree.modify(1, 12);
    tree.modify(2, 7);
    tree.modify(3, -100);
    tree.modify(4, 3);
    tree.modify(5, 9);
    tree.modify(6, 100);
    tree.modify(7, 0);
    tree.modify(8, -25);
    tree.modify(9, 40);

    assert.equal(tree.getSum(0, 5), 5 + 12 + 7 - 100 + 3 + 9);
    assert.equal(tree.getSum(5, 5), 9);
    assert.equal(tree.getSum(7, 9), 0 - 25 + 40);
    assert.equal(tree.getSum(4, 6), 3 + 9 + 100);
    assert.equal(tree.getSum(1, 2), 12 + 7);
    assert.equal(tree.getSum(5, 8), 9 + 100 + 0 - 25);
    assert.equal(
      tree.getSum(0, 9),
      5 + 12 + 7 - 100 + 3 + 9 + 100 + 0 - 25 + 40
    );
    assert.equal(tree.getSum(8, 8), -25);
  });

  it("allows range minimum queries", () => {
    const tree = new SegmentTree(10);
    tree.modify(0, 5);
    tree.modify(1, 12);
    tree.modify(2, 7);
    tree.modify(3, -100);
    tree.modify(4, 3);
    tree.modify(5, 9);
    tree.modify(6, 100);
    tree.modify(7, 0);
    tree.modify(8, -25);
    tree.modify(9, 40);

    assert.equal(tree.getMin(0, 5), -100);
    assert.equal(tree.getMin(5, 5), 9);
    assert.equal(tree.getMin(7, 9), -25);
    assert.equal(tree.getMin(4, 6), 3);
    assert.equal(tree.getMin(1, 2), 7);
    assert.equal(tree.getMin(5, 8), -25);
    assert.equal(tree.getMin(0, 9), -100);
    assert.equal(tree.getMin(6, 6), 100);
  });

  it("allows range maximum queries", () => {
    const tree = new SegmentTree(10);
    tree.modify(0, 5);
    tree.modify(1, 12);
    tree.modify(2, 7);
    tree.modify(3, -100);
    tree.modify(4, 3);
    tree.modify(5, 9);
    tree.modify(6, 100);
    tree.modify(7, 0);
    tree.modify(8, -25);
    tree.modify(9, 40);

    assert.equal(tree.getMax(0, 5), 12);
    assert.equal(tree.getMax(5, 5), 9);
    assert.equal(tree.getMax(7, 9), 40);
    assert.equal(tree.getMax(4, 6), 100);
    assert.equal(tree.getMax(1, 2), 12);
    assert.equal(tree.getMax(5, 8), 100);
    assert.equal(tree.getMax(0, 9), 100);
    assert.equal(tree.getMax(3, 3), -100);
  });
});
