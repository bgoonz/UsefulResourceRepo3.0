const levenshtein = require("../../..").String.levenshtein;
import assert from "assert";

describe("Levenshtein", () => {
  it("calculates the minimal edit distance between two words", () => {
    assert.equal(levenshtein("", ""), 0);
    assert.equal(levenshtein("a", ""), 1);
    assert.equal(levenshtein("", "a"), 1);
    // Should just add I to the beginning
    assert.equal(levenshtein("ISLANDER", "SLANDER"), 1);
    // Needs to substitute M by K, T by M and add an A to the end
    assert.equal(levenshtein("MART", "KARMA"), 3);
    // Needs to substitute K by S, E by I and add G to the end
    assert.equal(levenshtein("KITTEN", "SITTING"), 3);
    // Needs to substitute the first 5 chars: INTEN by EXECU
    assert.equal(levenshtein("INTENTION", "EXECUTION"), 5);
  });
});
