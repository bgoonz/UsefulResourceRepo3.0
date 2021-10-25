const huffman = {};

/**
 * Maximum block size used by functions "compress", "decompress".
 *
 * @const
 */
const MAX_BLOCK_SIZE = (-1 >>> 0).toString(2).length;

/**
 * Compress 0-1 string to int32 array.
 *
 * @param {string} string
 * @return {number[]}
 */
const compress = (string) => {
  const blocks = [];
  let currentBlock = 0;
  let currentBlockSize = 0;

  string.split("").forEach((char) => {
    currentBlock = (currentBlock << 1) | char;
    currentBlockSize += 1;

    if (currentBlockSize === MAX_BLOCK_SIZE) {
      blocks.push(currentBlock);
      currentBlock = currentBlockSize = 0;
    }
  });

  // Append last block size to the end.
  if (currentBlockSize) {
    blocks.push(currentBlock, currentBlockSize);
  } else {
    blocks.push(MAX_BLOCK_SIZE);
  }

  return blocks;
};

/**
 * Decompress int32 array back to 0-1 string.
 *
 * @param {number[]} array
 * @return {string}
 */
const decompress = (array) => {
  if (!array.length) {
    return "";
  } else if (array.length === 1) {
    throw new Error(
      "Compressed array must be either empty " + "or at least 2 blocks big."
    );
  }

  const padding = new Array(MAX_BLOCK_SIZE + 1).join(0);

  let string = array
    .slice(0, -2)
    .map((block) =>
      (padding + (block >>> 0).toString(2)).slice(-padding.length)
    )
    .join("");

  // Append the last block.
  const lastBlockSize = array.slice(-1)[0];
  const lastBlock = array.slice(-2)[0];
  string += (padding + (lastBlock >>> 0).toString(2)).slice(-lastBlockSize);

  return string;
};

/**
 * Apply Huffman encoding to a string.
 *
 * @param {string} string
 * @param {boolean} [compressed=false] - Whether compress the string to bits.
 * @return {{encoding: Object.<string, string>, value: string|number[]}}
 */
huffman.encode = (string, compressed) => {
  if (!string.length) {
    return {
      encoding: {},
      value: compressed ? [] : "",
    };
  }

  const counter = {};
  string.split("").forEach((char) => {
    counter[char] = (counter[char] || 0) + 1;
  });

  const letters = Object.keys(counter).map((char) => ({
    char,
    count: counter[char],
  }));

  const compare = ({ count }, { count }) => count - count;
  const less = (a, b) => a && ((b && a.count < b.count) || !b);

  letters.sort(compare);

  // Each time two least letters are merged into one, the result is pushing into
  // this buffer. Since the letters are pushing in ascending order of frequency,
  // no more sorting is ever required.
  const buffer = [];
  let lettersIndex = 0;
  let bufferIndex = 0;

  const extractMinimum = () =>
    less(letters[lettersIndex], buffer[bufferIndex])
      ? letters[lettersIndex++]
      : buffer[bufferIndex++];

  for (let numLetters = letters.length; numLetters > 1; --numLetters) {
    const a = extractMinimum();
    const b = extractMinimum();
    a.code = "0";
    b.code = "1";
    const union = {
      count: a.count + b.count,
      parts: [a, b],
    };
    buffer.push(union);
  }

  // At this point there is a single letter left.
  const root = extractMinimum();
  root.code = letters.length > 1 ? "" : "0";

  // Unroll the code recursively in reverse.
  (function unroll(parent) {
    if (parent.parts) {
      const a = parent.parts[0];
      const b = parent.parts[1];
      a.code += parent.code;
      b.code += parent.code;
      unroll(a);
      unroll(b);
    }
  })(root);

  const encoding = letters.reduce((acc, { char, code }) => {
    acc[char] = code.split("").reverse().join("");
    return acc;
  }, {});

  // Finally, apply the encoding to the given string.
  const result = string
    .split("")
    .map((char) => encoding[char])
    .join("");

  return {
    encoding,
    value: compressed ? compress(result) : result,
  };
};

/**
 * Decode a Huffman-encoded string or compressed number sequence.
 *
 * @param {Object.<string, string>} encoding - Maps characters to 0-1 sequences.
 * @param {string|number[]} encodedString
 * @return {string} Decoded string.
 */
huffman.decode = (encoding, encodedString) => {
  if (Array.isArray(encodedString)) {
    encodedString = decompress(encodedString);
  }

  // We can make use of the fact that encoding mapping is always one-to-one
  // and rely on the power of JS hashes instead of building hand-made FSMs.
  const letterByCode = Object.keys(encoding).reduce((acc, letter) => {
    acc[encoding[letter]] = letter;
    return acc;
  }, {});

  const decodedLetters = [];

  const unresolved = encodedString.split("").reduce((code, char) => {
    code += char;
    const letter = letterByCode[code];
    if (letter) {
      decodedLetters.push(letter);
      code = "";
    }
    return code;
  }, "");

  if (unresolved) {
    throw new Error("Invalid string to decode.");
  }

  return decodedLetters.join("");
};

export default huffman;
