const Stack = require("../..").DataStructures.Stack;
import assert from "assert";

describe("Stack", () => {
  it("starts empty", () => {
    const s = new Stack();
    assert(s.isEmpty());
    assert.equal(s.length, 0);
  });

  it("implements a LIFO logic", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    assert.equal(s.length, 3);
    assert.equal(s.pop(), 3);
    assert.equal(s.pop(), 2);
    assert.equal(s.pop(), 1);
    assert(s.isEmpty());
    assert.throws(() => s.pop(), Error);
  });

  it(
    "allows me to peek at the top element in" + " the stack without popping it",
    () => {
      const s = new Stack();
      s.push(1);
      s.push(2);
      s.push(3);
      assert.equal(s.peek(), 3);
      assert.equal(s.peek(), 3);
      s.pop();
      assert.equal(s.peek(), 2);
    }
  );
});
