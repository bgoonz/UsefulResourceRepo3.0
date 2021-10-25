/**
 * Calculate Shannon Entropy of an array
 *
 * @param {Array} arr - An array of values.
 * @return Number
 */
const shannonEntropy = (arr) => {
  // find the frequency of each value
  const freqs = arr.reduce((acc, item) => {
    acc[item] = acc[item] + 1 || 1;
    return acc;
  }, {});

  // find the probability of each value
  const probs = Object.keys(freqs).map((key) => freqs[key] / arr.length);

  // calulate the shannon entropy of the array
  return probs.reduce((e, p) => e - p * Math.log(p), 0) * Math.LOG2E;
};

export default shannonEntropy;
