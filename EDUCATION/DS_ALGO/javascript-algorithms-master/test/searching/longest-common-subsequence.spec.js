const longestCommonSubsequence = require("../../src/searching/" +
  "longest-common-subsequence").longestCommonSubsequence;

describe("longest common subsequence", () => {
  "use strict";

  it("should work with empty strings", () => {
    expect(longestCommonSubsequence("", "")).toBe("");
  });

  it("should work with first string empty", () => {
    expect(longestCommonSubsequence("", "abcd")).toBe("");
  });

  it("should work with second string empty", () => {
    expect(longestCommonSubsequence("abcd", "")).toBe("");
  });

  it("should work if there is no lcs", () => {
    expect(longestCommonSubsequence("qtwer", "zvxcv")).toBe("");
  });

  it("should work if lcs is whole first string", () => {
    expect(longestCommonSubsequence("abc", "abcdefghi")).toBe("abc");
  });

  it("should work if lcs is whole second string", () => {
    expect(longestCommonSubsequence("qwerty", "rty")).toBe("rty");
  });

  it("should work with repeated letter", () => {
    expect(longestCommonSubsequence("AAATC", "GGTAGGC")).toBe("AC");
  });

  it("should work with custom characters", () => {
    expect(longestCommonSubsequence(":-)", "B-)")).toBe("-)");
  });

  it("should work with long strings", () => {
    expect(
      longestCommonSubsequence("this is the first string", "that is second")
    ).toBe("tht is sn");
  });

  it("should work with very long strings", () => {
    expect(
      longestCommonSubsequence(
        "giiiiiiit1huuuuuu2bbb",
        "zzxxcvasdfgmntplpliiggggu2b222"
      )
    ).toBe("giiu2b");
  });
});
