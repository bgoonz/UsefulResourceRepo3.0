import { maxSubarray as maxSubArray } from "../../src/searching/maximum-subarray";

describe("Maximum subarray", () => {
  "use strict";

  it("should work with empty arrays", () => {
    expect(maxSubArray([])).toBeUndefined();
  });

  it("should return the only element when an array with single element is passed", () => {
    expect(maxSubArray([42])).toBe(42);
  });

  it("should return the only negative element when an array with single element is passed", () => {
    expect(maxSubArray([-42])).toBe(-42);
  });

  it("should return the zero when an array with single element, which is zero is passed", () => {
    expect(maxSubArray([0])).toBe(0);
  });

  it("should return the max sum of a subarray", () => {
    expect(maxSubArray([1, -1, 2, 3, -1])).toBe(5);
  });

  it("should return the max negative number when array with negative numbers is provided", () => {
    expect(maxSubArray([-10, -1, -2, -3, -1])).toBe(-1);
  });
});
