import { radixSort as rx } from "../../src/sorting/radixsort.js";

describe("radixsort", () => {
  "use strict";

  it("should sort the empty array", () => {
    expect(rx([])).toEqual([]);
  });

  it("should return array with the same count of elements", () => {
    expect(rx([2, 3, 4]).length).toBe(3);
  });

  it("should sort the given array in ascending order", () => {
    expect(rx([42, 3, 10])).toEqual([3, 10, 42]);
  });
});
