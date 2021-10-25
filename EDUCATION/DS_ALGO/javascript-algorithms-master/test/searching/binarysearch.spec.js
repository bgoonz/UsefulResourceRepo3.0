import { binarySearch } from "../../src/searching/binarysearch";

describe("Binary search", () => {
  "use strict";

  it("should find the element at position 0 ", () => {
    expect(binarySearch([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

  it("should find the element in position arr.length - 1", () => {
    const arr = [1, 2, 3, 4, 6, 8];
    expect(binarySearch(arr, 8)).toBe(arr.length - 1);
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

  it("should work with a key string", () => {
    expect(binarySearch([{ x: 1 }, { x: 2 }, { x: 3 }], { x: 2 }, "x")).toBe(1);
  });

  it("should work with a key function", () => {
    expect(
      binarySearch([{ x: 1 }, { x: 2 }, { x: 3 }], { x: 2 }, ({ x }) => {
        return x;
      })
    ).toBe(1);
  });
});
