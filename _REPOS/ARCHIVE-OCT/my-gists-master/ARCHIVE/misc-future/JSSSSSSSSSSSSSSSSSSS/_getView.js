/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeMax = Math.max;

const nativeMin = Math.min;

/**
 * Gets the view, applying any `transforms` to the `start` and `end` positions.
 *
 * @private
 * @param {number} start The start of the view.
 * @param {number} end The end of the view.
 * @param {Array} transforms The transformations to apply to the view.
 * @returns {Object} Returns an object containing the `start` and `end`
 *  positions of the view.
 */
function getView(start, end, transforms) {
  let index = -1;
  const length = transforms.length;

  while (++index < length) {
    const data = transforms[index];
    const size = data.size;

    switch (data.type) {
      case "drop":
        start += size;
        break;
      case "dropRight":
        end -= size;
        break;
      case "take":
        end = nativeMin(end, start + size);
        break;
      case "takeRight":
        start = nativeMax(start, end - size);
        break;
    }
  }
  return { start: start, end: end };
}

export default getView;
