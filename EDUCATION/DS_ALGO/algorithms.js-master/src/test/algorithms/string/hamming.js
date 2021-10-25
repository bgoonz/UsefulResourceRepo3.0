const hamming = require("../../..").String.hamming;
import assert from "assert";

describe("Hamming distance", () => {
  it("raises an error if the inputs are not equal lengths", () => {
    assert.throws(() => {
      hamming("abcde", "1234");
    });
  });

  it("returns the correct the correct distances", () => {
    const inputs = [
      { a: "karolin", b: "kathrin", expected: 3 },
      { a: "karolin", b: "kerstin", expected: 3 },
      { a: "1011101", b: "1001001", expected: 2 },
      { a: "2173896", b: "2233796", expected: 3 },
      { a: "1111111111", b: "0000000000", expected: 10 },
      { a: "", b: "", expected: 0 },
    ];

    inputs.forEach(({ a, b, expected }) => {
      assert.equal(hamming(a, b), expected);
    });
  });
});
