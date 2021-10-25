const directory = "../../../algorithms/string/";
const filename = "longest_common_subsequence";
const longestCommonSubsequence = require(directory + filename);
import assert from "assert";

describe("Longest common subsequence", () => {
  it("returns the longest common subsequence of " + "two strings", () => {
    assert.equal("", longestCommonSubsequence("", ""));
    assert.equal("", longestCommonSubsequence("", "aaa"));
    assert.equal("", longestCommonSubsequence("aaa", ""));
    assert.equal("aaa", longestCommonSubsequence("aaa", "aaa"));
    assert.equal("mjau", longestCommonSubsequence("xmjyauz", "mzjawxu"));
    assert.equal("hman", longestCommonSubsequence("human", "chimpanzee"));
  });
});
