/**
 * A prime number used to create
 * the hash representation of a word
 *
 * Bigger the prime number,
 * bigger the hash value
 */
const base = 997;

/**
 * Creates the hash representation of 'word'
 *
 * @param String
 * @return Number
 */
const hash = (word) => {
  let h = 0;

  for (let i = 0; i < word.length; i++) {
    h += word.charCodeAt(i) * base ** (word.length - i - 1);
  }

  return h;
};

/**
 * Calculates String Matching between two Strings
 * Returns true if String 'b' is contained in String 'a'
 *
 * Average and Best Case Complexity: O(a.length + b.length)
 * Worst Case Complexity: O(a.length * b.length)
 *
 * @param String
 * @param String
 * @return Integer
 */
const rabinKarp = (s, pattern) => {
  if (pattern.length === 0) return 0;

  const hashPattern = hash(pattern);
  let currentSubstring = s.substring(0, pattern.length);
  let hashCurrentSubstring;

  for (let i = pattern.length; i <= s.length; i++) {
    if (hashCurrentSubstring === undefined) {
      hashCurrentSubstring = hash(currentSubstring);
    } else {
      /*
       * Re-hash
       * Recalculates the hash representation of a word so that it isn't
       * necessary to traverse the whole word again
       */
      hashCurrentSubstring -=
        currentSubstring.charCodeAt(0) * base ** (pattern.length - 1);
      hashCurrentSubstring *= base;
      hashCurrentSubstring += s.charCodeAt(i);

      currentSubstring = currentSubstring.substring(1) + s[i];
    }

    if (hashPattern === hashCurrentSubstring && pattern === currentSubstring) {
      // Hack for the off-by-one when matching in the beginning of the string
      return i === pattern.length ? 0 : i - pattern.length + 1;
    }
  }

  return -1;
};

export default rabinKarp;
