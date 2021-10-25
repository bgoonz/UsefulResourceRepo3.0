import { jumpSearch } from "../../src/searching/jump-search";

describe("Jump search", () => {
  "use strict";

  it("should find the element at position 0 ", () => {
    expect(jumpSearch([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

  it("should find the element at position 4 ", () => {
    expect(jumpSearch([1, 2, 3, 4, 6, 8], 6)).toBe(4);
  });

  it("should return -1 ", () => {
    expect(jumpSearch([1, 2, 3, 4, 6, 8], 10)).toBe(-1);
  });

  it("should return -1 ", () => {
    expect(jumpSearch([], 10)).toBe(-1);
  });
});
