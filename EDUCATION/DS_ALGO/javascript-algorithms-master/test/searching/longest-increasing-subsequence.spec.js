const longestIncreasingSubsequence = require("../../src/searching/" +
  "longest-increasing-subsequence").longestIncreasingSubsequence;

describe("longest increasing subsequence", () => {
  "use strict";

  let sequence;
  beforeEach(() => {
    sequence = [5, 2, 8, 6, 3, 6, 9, 7, 11];
  });

  it("should work with empty array", () => {
    expect(longestIncreasingSubsequence([]).length).toBe(0);
  });

  it("should return the only element in a single element array", () => {
    const array = [1];
    expect(longestIncreasingSubsequence(array)).toEqual([1]);
  });

  it("should give the right length", () => {
    expect(longestIncreasingSubsequence(sequence).length).toBe(5);
  });

  it("should work with empty arrays", () => {
    expect(longestIncreasingSubsequence([]).length).toBe(0);
  });

  it("should return the correct path", () => {
    expect(longestIncreasingSubsequence(sequence).toString()).toBe(
      [2, 3, 6, 9, 11].toString()
    );
  });

  it("should work with a custom comparator", () => {
    const cmp = (a, b) => {
      return b - a;
    };
    const seq = [1, 2, -1];
    const result = longestIncreasingSubsequence(seq, cmp);
    expect(result.length).toBe(2);
    expect(result).toEqual([1, -1]);
  });
});
