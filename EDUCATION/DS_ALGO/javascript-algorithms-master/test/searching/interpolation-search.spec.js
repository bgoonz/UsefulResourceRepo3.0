import { interpolationSearch } from "../../src/searching/interpolation-search";

describe("Interpolation search", () => {
  "use strict";

  it("should find the element at position 0 ", () => {
    expect(interpolationSearch([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

  it("should find the element at position 4 ", () => {
    expect(interpolationSearch([1, 2, 3, 4, 6, 8], 6)).toBe(4);
  });

  it("should return -1 if element is not found", () => {
    expect(interpolationSearch([1, 2, 3, 4, 6, 8], 17)).toBe(-1);
  });

  it("should return -1 if array is empty", () => {
    expect(interpolationSearch([], 10)).toBe(-1);
  });
});
