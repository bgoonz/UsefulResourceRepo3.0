/**
 * Implementation of longest common substring
 */

/**
 * Implementation via dynamic programming
 */
const longestCommonSubstring = (s1, s2) => {
  // Multidimensional array for dynamic programming algorithm
  const cache = new Array(s1.length + 1);

  let i;
  let j;

  for (i = 0; i <= s1.length + 1; i++) {
    cache[i] = new Int32Array(s2.length + 1);
  }

  const lcsPosition = {};
  let lcsLength = 0;

  // Fill in the cache
  for (i = 1; i <= s1.length; i++) {
    for (j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        cache[i][j] = cache[i - 1][j - 1] + 1;
        if (cache[i][j] > lcsLength) {
          lcsPosition.i = i;
          lcsLength = cache[i][j];
        }
      } else {
        cache[i][j] = 0;
      }
    }
  }

  let lcs = "";
  if (lcsLength) {
    lcs = s1.substring(lcsPosition.i - lcsLength, lcsPosition.i);
  }

  return lcs;
};

export default longestCommonSubstring;
