import { maxSubarray as maxSubArray } from "../../src/searching/maximum-subarray-divide-and-conquer";

describe("Maximum subarray implemented with divide and conquer", () => {
  "use strict";

  it("should work with empty arrays", () => {
    expect(isNaN(maxSubArray([]))).toBeTruthy();
  });

  it(
    "should return the only element when an array with" +
      "single element is passed",
    () => {
      expect(maxSubArray([42])).toBe(42);
    }
  );

  it(
    "should return the only negative element when an array with" +
      "single element is passed",
    () => {
      expect(maxSubArray([-42])).toBe(-42);
    }
  );

  it(
    "should return the zero when an array with" +
      "single element, which is zero is passed",
    () => {
      expect(maxSubArray([0])).toBe(0);
    }
  );

  it("should return the max sum of a subarray", () => {
    expect(maxSubArray([1, -1, 2, 3, -1])).toBe(5);
  });

  it(
    "should return the max nevative number when array" +
      "with nevative numbers is provided",
    () => {
      expect(maxSubArray([-10, -1, -2, -3, -1])).toBe(-1);
    }
  );
});
