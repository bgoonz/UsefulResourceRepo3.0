const directory = "../../../algorithms/string/";
const filename = "longest_common_substring";
const longestCommonSubstring = require(directory + filename);
import assert from "assert";

describe("Longest common substring", () => {
  it("returns the longest common substring of two strings", () => {
    assert.equal("", longestCommonSubstring("", ""));
    assert.equal("", longestCommonSubstring("", "aaa"));
    assert.equal("", longestCommonSubstring("aaa", ""));
    assert.equal("aaa", longestCommonSubstring("aaa", "aaa"));
    assert.equal("xun", longestCommonSubstring("xunmjyauz", "mzjawxun"));
    assert.equal("xun", longestCommonSubstring("jyaxunmuz", "mzjawxun"));
    assert.equal("xun", longestCommonSubstring("jyamuzxun", "mzjawxun"));
  });
});
