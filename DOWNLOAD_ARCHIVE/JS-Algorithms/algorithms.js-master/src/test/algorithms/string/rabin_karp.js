const rabinKarp = require("../../..").String.rabinKarp;
import assert from "assert";

const rabinKarpEqualsToIndexOf = (a, b) => {
  assert.equal(rabinKarp(a, b), a.indexOf(b));
};

describe("Karp-Rabin", () => {
  it("verifies if a string is contained in another string", () => {
    rabinKarpEqualsToIndexOf("", "");
    rabinKarpEqualsToIndexOf("a", "b");
    rabinKarpEqualsToIndexOf("b", "a");

    rabinKarpEqualsToIndexOf("super test", "s");
    rabinKarpEqualsToIndexOf("super test", "super");
    rabinKarpEqualsToIndexOf("super test", "super test");
    rabinKarpEqualsToIndexOf("super test", "test");
    rabinKarpEqualsToIndexOf("super test", " tes");
    rabinKarpEqualsToIndexOf("super test x", "x");
  });
});
