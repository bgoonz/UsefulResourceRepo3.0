import { Math as math } from "../../..";
const reservoirSampling = math.reservoirSampling;
import assert from "assert";

describe("Reservoir Sampling", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it("samples K distinct values from the array", () => {
    const sample = reservoirSampling(array, 5);
    assert.equal(sample.length, 5);
    const seen = {};
    array.forEach((value) => {
      assert(!seen[value]);
      assert(array.indexOf(value) >= 0);
      seen[value] = true;
    });
  });

  it("works in corner cases", () => {
    assert.deepEqual(reservoirSampling(array, 0), []);
    assert.deepEqual(reservoirSampling([], 0), []);
    const fullSample = reservoirSampling(array, array.length);
    assert.deepEqual(fullSample.sort(), array);
  });

  it("raises an error if asked for too many elements", () => {
    assert.throws(() => {
      reservoirSampling(array, array.length + 1);
    });
  });
});
