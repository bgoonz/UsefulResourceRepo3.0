/**
 * Builds the dinamic table of the given pattern
 * to record how the pattern can match it self
 *
 * Asymptotic Complexity: O(pattern.length)
 *
 * @param {Array} pattern of Numbers, Strings or Characters
 *     or {String}
 * @return {Array} of Integers
 */
const buildTable = (pattern) => {
  const length = pattern.length;
  const table = [];
  let position = 2;
  let cnd = 0;

  table[0] = -1;
  table[1] = 0;

  while (position < length) {
    if (pattern[position - 1] === pattern[cnd]) {
      table[position++] = ++cnd;
    } else if (cnd > 0) {
      cnd = table[cnd];
    } else {
      table[position++] = 0;
    }
  }

  return table;
};

/**
 * String Matching algorithm
 * Tries to match the given pattern inside the given text
 * If the pattern exists inside the text, it will be returned
 * the index of the begining of the pattern in the text,
 * otherwise it will be returned the length of the text
 *
 * Asymptotic Complexity: O(text.length)
 *
 * @param {Array} text of Numbers, Strings or Characters
 *     or {String}
 * @param {Array} pattern of Numbers, Strings or Characters
 *     or {String}
 * @return {Number}
 */
const knuthMorrisPratt = (text, pattern) => {
  const textLength = text.length;
  const patternLength = pattern.length;
  let m = 0;
  let i = 0;
  const table = buildTable(pattern);

  while (m + i < textLength) {
    if (pattern[i] === text[m + i]) {
      if (i === patternLength - 1) {
        return m;
      }
      i++;
    } else if (table[i] >= 0) {
      i = table[i];
      m = m + i - table[i];
    } else {
      i = 0;
      m++;
    }
  }

  return textLength;
};

export default knuthMorrisPratt;
