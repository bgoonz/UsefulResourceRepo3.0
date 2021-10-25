import { Math as math } from "../../..";
const fib = math.fibonacci;
import assert from "assert";

const testFibonacciSequence = (fib) => {
  assert.equal(0, fib(0));
  assert.equal(1, fib(1));
  assert.equal(1, fib(2));
  assert.equal(2, fib(3));
  assert.equal(3, fib(4));
  assert.equal(5, fib(5));
  assert.equal(8, fib(6));
  assert.equal(13, fib(7));
  assert.equal(21, fib(8));
  assert.equal(34, fib(9));
  assert.equal(55, fib(10));
  assert.equal(89, fib(11));
  assert.equal(144, fib(12));
};

describe("Fibonacci", () => {
  describe("#exponential()", () => {
    it("returns the right value for fibonacci sequence", () => {
      testFibonacciSequence(fib.exponential);
    });
  });

  describe("#linear()", () => {
    it("returns the right value for fibonacci sequence", () => {
      testFibonacciSequence(fib);
    });
  });

  describe("#withMemoization()", () => {
    it("returns the right value for fibonacci sequence", () => {
      testFibonacciSequence(fib.withMemoization);
    });
  });

  describe("#direct()", () => {
    it("returns the right value for fibonacci sequence", () => {
      testFibonacciSequence(fib.direct);
    });
  });

  describe("#logarithmic()", () => {
    it("returns the right value for fibonacci sequence", () => {
      testFibonacciSequence(fib.logarithmic);
    });
  });
});
