import { countingSort as cs } from "../../src/sorting/countingsort";

describe("countingsort", () => {
  "use strict";

  it("should sort the empty array", () => {
    expect(cs([])).toEqual([]);
  });

  it("should return array with the same count of elements", () => {
    expect(cs([2, 3, 4]).length).toBe(3);
  });

  it("should sort the given array in ascending order", () => {
    expect(cs([42, 3, 10])).toEqual([3, 10, 42]);
  });
});
