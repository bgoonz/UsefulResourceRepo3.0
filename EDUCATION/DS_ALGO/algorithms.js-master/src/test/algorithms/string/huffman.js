const huffman = require("../../..").String.huffman;
import assert from "assert";

describe("Huffman", () => {
  const messages = [
    "",
    "a",
    "b",
    "hello",
    "test",
    "aaaabbbccddef",
    "The seething sea ceaseth and thus" + " the seething sea sufficeth us.",
    "Shep Schwab shopped at Scott's Schnapps shop;" +
      "\nOne shot of Scott's Schnapps stopped Schwab's watch.",
  ];
  for (let randomTestIndex = 0; randomTestIndex < 15; ++randomTestIndex) {
    const length = Math.floor(Math.random() * 100 + 1);
    const characters = [];
    for (let charIndex = 0; charIndex < length; ++charIndex) {
      const charCode = Math.floor(Math.random() * 10 + "a".charCodeAt());
      characters.push(String.fromCharCode(charCode));
    }
    messages.push(characters.join(""));
  }

  it("decodes previously encoded messages correctly", () => {
    messages.forEach((message) => {
      const encoded = huffman.encode(message);
      const decoded = huffman.decode(encoded.encoding, encoded.value);
      assert.equal(message, decoded);
      const encodedCompressed = huffman.encode(message, true);
      const decodedCompressed = huffman.decode(
        encodedCompressed.encoding,
        encodedCompressed.value
      );
      assert.equal(message, decodedCompressed);
    });
  });

  it("raises an error if it fails to decode", () => {
    const badArgs = [
      [{}, "0"],
      [{}, [0]],
      [{ a: "0", b: "10", c: "11" }, "001"],
    ];
    badArgs.forEach((args) => {
      assert.throws(() => {
        huffman.decode.apply(null, args);
      });
    });
  });

  it("encodes sample strings in the expected manner", () => {
    assert.deepEqual(huffman.encode(""), { encoding: {}, value: "" });
    assert.deepEqual(huffman.encode("a"), { encoding: { a: "0" }, value: "0" });
    assert.deepEqual(huffman.encode("aaaaa"), {
      encoding: { a: "0" },
      value: "00000",
    });
    let result = huffman.encode("aabc");
    assert.equal(result.encoding.a.length, 1);
    assert.equal(result.encoding.b.length, 2);
    assert.equal(result.encoding.c.length, 2);
    result = huffman.encode("abcdabcdabcdabcd");
    Object.keys(result.encoding).forEach((char) => {
      assert.equal(result.encoding[char].length, 2);
    });
    assert.equal(result.value.length, 32);
  });

  it("satisfies the entropy condition (H <= cost <= H+1)", () => {
    messages.forEach((message) => {
      const frequencies = message.split("").reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {});
      Object.keys(frequencies).forEach((char) => {
        frequencies[char] /= message.length;
      });
      const entropy =
        Object.keys(frequencies).reduce((partial, char) => {
          const freq = frequencies[char];
          return partial - freq * Math.log(freq);
        }, 0) / Math.log(2);
      const encoding = huffman.encode(message).encoding;
      const cost = Object.keys(encoding).reduce(
        (partial, char) => partial + frequencies[char] * encoding[char].length,
        0
      );
      assert(entropy <= cost);
      assert(cost <= entropy + 1);
    });
  });
});
