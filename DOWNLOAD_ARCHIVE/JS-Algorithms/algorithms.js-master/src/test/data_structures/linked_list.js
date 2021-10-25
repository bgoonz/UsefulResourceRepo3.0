const LinkedList = require("../..").DataStructures.LinkedList;
import assert from "assert";

describe("LinkedList", () => {
  it("starts empty", () => {
    const l = new LinkedList();
    assert(l.isEmpty());
    assert.equal(l.length, 0);
  });

  it("increments length when an item is added", () => {
    const l = new LinkedList();
    l.add(1);
    assert.equal(l.length, 1);
    assert(!l.isEmpty());

    l.add(2);
    assert.equal(l.length, 2);
  });

  it("returns the items from the positions they were inserted", () => {
    const l = new LinkedList();
    l.add(1);
    l.add(2);
    l.add(3);
    l.add(4);
    l.add(5);
    l.add(6);
    l.add(7);
    l.add(8);
    l.add(9);
    l.add(10);
    l.add(11);
    assert.equal(l.get(0), 1);
    assert.equal(l.get(1), 2);
    assert.equal(l.get(2), 3);
    assert.equal(l.get(3), 4);
    assert.equal(l.get(4), 5);
    assert.equal(l.get(5), 6);
    assert.equal(l.get(6), 7);
    assert.equal(l.get(7), 8);
    assert.equal(l.get(8), 9);
    assert.equal(l.get(9), 10);
    assert.equal(l.get(10), 11);

    // Add 12 to the position 7
    l.add(12, 7);
    assert.equal(l.get(7), 12);
    assert.equal(l.length, 12);

    // Asserts that other elements were shifted
    assert.equal(l.get(8), 8);
    assert.equal(l.get(9), 9);
    assert.equal(l.get(10), 10);
    assert.equal(l.get(11), 11);

    l.add(13, 12);
    assert.equal(l.get(12), 13);
  });

  it("throws errors when trying to access indexes out of bounds", () => {
    const l = new LinkedList();
    assert.throws(() => l.get(0), Error);
    assert.throws(() => l.get(1), Error);
    assert.throws(() => l.get(10), Error);
    assert.throws(() => l.add(10, 1), Error);
    assert.throws(() => l.add(10, 10), Error);

    l.add(1);
    l.add(2);
    // length = 2
    assert.doesNotThrow(() => l.get(0));
    assert.doesNotThrow(() => l.get(1));
    assert.doesNotThrow(() => l.add(3, 2)); // length = 3
    assert.doesNotThrow(() => l.add(3, 0)); // length =4
    assert.doesNotThrow(() => l.add(4, 1)); // length = 5
    assert.doesNotThrow(() => l.add(5, 5)); // length = 6

    assert.throws(() => l.add(10, 10), Error);
    assert.throws(() => l.add(10, 7), Error);
    assert.throws(() => l.get(10), Error);
  });

  it("is able to delete elements", () => {
    const l = new LinkedList();

    l.add(1);
    l.add(2);
    l.add(3);
    l.add(4);
    l.add(5);
    l.add(6);
    l.add(7);
    l.add(8);

    assert.equal(l.head.value, 1);
    assert.equal(l.tail.value, 8);
    assert.equal(l.length, 8);

    assert.equal(l.get(7), 8);
    l.del(7);
    assert.equal(l.length, 7);
    assert.equal(l.tail.value, 7);
    assert.throws(() => l.get(7), Error);

    l.del(0);
    assert.equal(l.length, 6);
    assert.equal(l.head.value, 2);
    assert.equal(l.get(0), 2);
    assert.equal(l.get(1), 3);

    l.del(4);
    assert.equal(l.length, 5);

    assert.equal(l.get(0), 2);
    assert.equal(l.get(1), 3);
    assert.equal(l.get(2), 4);
    assert.equal(l.get(3), 5);
    assert.equal(l.get(4), 7);

    for (let i = 0; i < 5; i++) {
      l.del(0);
    }

    assert(l.isEmpty());
    assert.equal(l.head, null);
    assert.equal(l.tail, null);
    assert.equal(l.length, 0);
  });

  it("performs a function to all elements with forEach", () => {
    const l = new LinkedList();
    l.add(5);
    l.add(1);
    l.add(3);
    l.add(10);
    l.add(1000);

    const a = [];
    l.forEach((e) => {
      a.push(e);
    });

    assert.deepEqual(a, [5, 1, 3, 10, 1000]);
  });

  it("throws an error when trying to delete from an empty list", () => {
    const l = new LinkedList();
    assert.throws(() => l.del(0), Error);
  });
});
