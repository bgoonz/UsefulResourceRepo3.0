import { quickselect } from "../../src/searching/quickselect";

describe("quickselect", () => {
  "use strict";

  it("should be defined as function", () => {
    expect(typeof quickselect).toBe("function");
  });

  it("should work with empty array", () => {
    expect(quickselect([], 1)).toBe(undefined);
  });

  it("should find the only element in the list", () => {
    expect(quickselect([1], 0)).toBe(1);
  });

  it("should return undefined if the list is smaller than the index", () => {
    expect(quickselect([2, 1], 3)).toBeUndefined();
  });

  it("should find the element if in sorted order", () => {
    expect(quickselect([1, 2], 0)).toBe(1);
    expect(quickselect([1, 2], 1)).toBe(2);
  });

  it("should fine the element if not in sorted order", () => {
    expect(quickselect([2, 1, 9, 6], 3)).toBe(9);
  });
});
