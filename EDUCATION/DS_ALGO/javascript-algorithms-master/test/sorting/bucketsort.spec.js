import { bucketSort as bs } from "../../src/sorting/bucketsort";

describe("bucketsort", () => {
  "use strict";

  it("should sort the empty array", () => {
    expect(bs([])).toEqual([]);
  });

  it("should return array with the same count of elements", () => {
    expect(bs([2, 3, 4]).length).toBe(3);
  });

  it("should sort the given array in ascending order", () => {
    expect(bs([42, 3, 10])).toEqual([3, 10, 42]);
  });
});
