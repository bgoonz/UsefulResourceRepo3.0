import { binarySearch } from "../../src/searching/recursive-binarysearch";

describe("Binary search", () => {
  "use strict";

  it("should find the element at position 0 ", () => {
    expect(binarySearch([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

  it("should find the eleent in position arr.length", () => {
    expect(binarySearch([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

  it("should work with arrays with 2 elements", () => {
    expect(binarySearch([1, 8], 1)).toBe(0);
    expect(binarySearch([1, 8], 8)).toBe(1);
  });

  it("should return a negative number for missing elements", () => {
    expect(binarySearch([1, 2, 3], 4)).toBeLessThan(0);
  });

  it("should work with empty arrays", () => {
    expect(binarySearch([], 4)).toBe(-1);
  });
});
