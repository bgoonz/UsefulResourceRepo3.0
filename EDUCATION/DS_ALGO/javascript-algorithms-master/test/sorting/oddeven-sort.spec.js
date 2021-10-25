import { oddEvenSort as oes } from "../../src/sorting/oddeven-sort";

describe("oddeven-sort", () => {
  "use strict";

  it("should sort the empty array", () => {
    expect(oes([])).toEqual([]);
  });

  it("should return array with the same count of elements", () => {
    expect(oes([2, 3, 4]).length).toBe(3);
  });

  it("should sort the given array in ascending order", () => {
    expect(oes([42, 3, 10])).toEqual([3, 10, 42]);
  });
});
