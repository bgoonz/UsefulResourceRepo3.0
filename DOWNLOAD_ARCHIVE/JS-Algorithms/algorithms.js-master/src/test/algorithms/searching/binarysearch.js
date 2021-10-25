const binarySearch = require("../../..").Search.binarySearch;
const lowerBound = require("../../..").Search.lowerBound;
import assert from "assert";

describe("Binary Search", () => {
  it("finds elements in the sorted array", () => {
    assert.equal(binarySearch([1, 2, 3, 4, 5], 3), 2);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 1), 0);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 2), 1);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 4), 3);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 5), 4);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 0), -1);
    assert.equal(binarySearch([1, 2, 3, 4, 5, 8], 6), -1);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 100), -1);
  });
});

describe("Lower Bound", () => {
  it("finds the first element greater than search key", () => {
    let arr = [1, 2, 3, 4, 5];

    assert.equal(lowerBound(arr, 0), 0);
    assert.equal(lowerBound(arr, 1), 1);
    assert.equal(lowerBound(arr, 2), 2);
    assert.equal(lowerBound(arr, 3), 3);
    assert.equal(lowerBound(arr, 4), 4);
    assert.equal(lowerBound(arr, 5), 5);
    assert.equal(lowerBound(arr, 6), 5);
  });

  it("ignores duplicate values", () => {
    let duplicates = [1, 1, 2, 2, 3, 3];

    assert.equal(lowerBound(duplicates, 1), 2);
    assert.equal(lowerBound(duplicates, 2), 4);
    assert.equal(lowerBound(duplicates, 3), 6);
  });
});
