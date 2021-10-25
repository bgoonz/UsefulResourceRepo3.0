import mod from "../../src/others/levenshtein-distance.js";
const levenshteinDistance = mod.levenshteinDistance;

describe("Levenstein's minimum edit distance algorithm", () => {
  "use strict";

  it("should be defined", () => {
    expect(levenshteinDistance).toBeDefined();
  });

  it('"" -> "" should return 0.', () => {
    expect(levenshteinDistance("", "")).toBe(0);
  });

  it('"T" -> "" should return 1.', () => {
    expect(levenshteinDistance("T", "")).toBe(1);
  });

  it('"cake" -> "rake" should return 1.', () => {
    expect(levenshteinDistance("cake", "rake")).toBe(1);
  });

  it('"Sofia" -> "Sof" should return 2.', () => {
    expect(levenshteinDistance("Sofia", "Sof")).toBe(2);
  });

  it('"kitten" -> "sitting" should return 3', () => {
    expect(levenshteinDistance("kitten", "sitting")).toBe(3);
  });

  it('"google" -> "lookat" should return 4.', () => {
    expect(levenshteinDistance("google", "lookat")).toBe(4);
  });

  it('"emacs" -> "vim" should return 5.', () => {
    expect(levenshteinDistance("emacs", "vim")).toBe(5);
  });

  it('"coffee" -> "cocoa" should return 4.', () => {
    expect(levenshteinDistance("coffee", "cocoa")).toBe(4);
  });

  it('"Munich" -> "Muenchen" should return 4.', () => {
    expect(levenshteinDistance("Munich", "Muenchen")).toBe(4);
  });

  it('"rosebud" -> "budrose" should return 6.', () => {
    expect(levenshteinDistance("rosebud", "budrose")).toBe(6);
  });

  it('"decided" -> "decisive" should return 4.', () => {
    expect(levenshteinDistance("decided", "decisive")).toBe(4);
  });

  it('"similar" -> "simile" should return 2.', () => {
    expect(levenshteinDistance("similar", "simile")).toBe(2);
  });
});
