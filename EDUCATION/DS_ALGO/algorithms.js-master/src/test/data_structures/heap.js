const heap = require("../..").DataStructures.Heap;
import assert from "assert";

describe("Min Heap", () => {
  it("always returns the lowest element", () => {
    const h = new heap.MinHeap();
    assert(h.isEmpty());
    h.insert(10);
    h.insert(2091);
    h.insert(4);
    h.insert(1);
    h.insert(5);
    h.insert(500);
    h.insert(0);
    h.insert(18);
    h.insert(3);
    h.insert(22);
    h.insert(20);
    assert(!h.isEmpty());

    assert.equal(h.extract(), 0);
    assert.equal(h.extract(), 1);
    assert.equal(h.extract(), 3);
    assert.equal(h.extract(), 4);
    assert.equal(h.extract(), 5);
    assert.equal(h.extract(), 10);
    assert.equal(h.extract(), 18);
    assert.equal(h.extract(), 20);
    assert.equal(h.extract(), 22);
    assert.equal(h.extract(), 500);
    assert.equal(h.extract(), 2091);

    assert(h.isEmpty());
  });

  it("heapifies an unordered array", () => {
    const h = new heap.MinHeap();
    h.heapify([10, 2091, 4, 1, 5, 500, 0, 18, 3, 22, 20]);

    assert.equal(h.extract(), 0);
    assert.equal(h.extract(), 1);
    assert.equal(h.extract(), 3);
    assert.equal(h.extract(), 4);
    assert.equal(h.extract(), 5);
    assert.equal(h.extract(), 10);
    assert.equal(h.extract(), 18);
    assert.equal(h.extract(), 20);
    assert.equal(h.extract(), 22);
    assert.equal(h.extract(), 500);
    assert.equal(h.extract(), 2091);

    assert(h.isEmpty());
  });

  it(
    "calls a function to all elements from smallest to largest" +
      " with forEach",
    () => {
      const h = new heap.MinHeap();
      h.heapify([3, 10, 1000, 0, 2, 1]);

      const output = [];
      h.forEach((n) => {
        output.push(n);
      });

      assert.deepEqual(output, [0, 1, 2, 3, 10, 1000]);

      // Make sure nothing was really removed
      assert.equal(h.n, 6);
    }
  );
});

describe("Max Heap", () => {
  it("always returns the greatest element", () => {
    const h = new heap.MaxHeap();
    assert(h.isEmpty());
    h.insert(10);
    h.insert(2091);
    h.insert(4);
    h.insert(1);
    h.insert(5);
    h.insert(500);
    h.insert(0);
    h.insert(18);
    h.insert(3);
    h.insert(22);
    h.insert(20);
    assert(!h.isEmpty());

    assert.equal(h.extract(), 2091);
    assert.equal(h.extract(), 500);
    assert.equal(h.extract(), 22);
    assert.equal(h.extract(), 20);
    assert.equal(h.extract(), 18);
    assert.equal(h.extract(), 10);
    assert.equal(h.extract(), 5);
    assert.equal(h.extract(), 4);
    assert.equal(h.extract(), 3);
    assert.equal(h.extract(), 1);
    assert.equal(h.extract(), 0);

    assert(h.isEmpty());
  });

  it("heapifies an unordered array", () => {
    const h = new heap.MaxHeap();
    h.heapify([10, 2091, 4, 1, 5, 500, 0, 18, 3, 22, 20]);

    assert.equal(h.extract(), 2091);
    assert.equal(h.extract(), 500);
    assert.equal(h.extract(), 22);
    assert.equal(h.extract(), 20);
    assert.equal(h.extract(), 18);
    assert.equal(h.extract(), 10);
    assert.equal(h.extract(), 5);
    assert.equal(h.extract(), 4);
    assert.equal(h.extract(), 3);
    assert.equal(h.extract(), 1);
    assert.equal(h.extract(), 0);

    assert(h.isEmpty());
  });

  it("calls a function to all elements from largest to smallest with forEach", () => {
    const h = new heap.MaxHeap();
    h.heapify([3, 10, 1000, 0, 2, 1]);

    const output = [];
    h.forEach((n) => {
      output.push(n);
    });

    assert.deepEqual(output, [1000, 10, 3, 2, 1, 0]);
  });
});
