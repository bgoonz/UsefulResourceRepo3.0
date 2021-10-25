/**
 * Sample random elements from the array using reservoir algorithm.
 *
 * @param {Array} array
 * @param {number} sampleSize
 * @return {Array}
 */
const reservoirSampling = (array, sampleSize) => {
  if (sampleSize > array.length) {
    throw new Error("Sample size exceeds the total number of elements.");
  }
  const reservoir = array.slice(0, sampleSize);
  for (let i = sampleSize; i < array.length; ++i) {
    const j = Math.floor(Math.random() * (i + 1));
    if (j < sampleSize) {
      reservoir[j] = array[i];
    }
  }
  return reservoir;
};

export default reservoirSampling;
