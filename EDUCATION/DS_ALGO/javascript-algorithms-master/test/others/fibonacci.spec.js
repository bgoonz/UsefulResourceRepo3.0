import mod from "../../src/others/fibonacci.js";
const fibonacci = mod.fibonacci;

describe("fibonacci algorithm", () => {
  "use strict";

  it("should return value 1 with input 1.", () => {
    expect(fibonacci(1)).toBe(1);
  });
  it("should return value 1 with input 2.", () => {
    expect(fibonacci(2)).toBe(1);
  });
  it("should return value 2 with input 3.", () => {
    expect(fibonacci(3)).toBe(2);
  });
  it("should return value 3 with input 4.", () => {
    expect(fibonacci(4)).toBe(3);
  });
  it("should return value 5 with input 5.", () => {
    expect(fibonacci(5)).toBe(5);
  });
  it("should be 83621143489848422977 with input 97.", () => {
    expect(fibonacci(97)).toBe(83621143489848422977);
  });
  it("should throw when input is too large.", () => {
    expect(() => {
      fibonacci(98);
    }).toThrow("Input too large, results in inaccurate fibonacci value.");
  });
});
