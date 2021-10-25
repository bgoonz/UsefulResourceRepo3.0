import { Math as math } from "../../..";
const extEuclid = math.extendedEuclidean;
import assert from "assert";

describe("extEuclid", () => {
  it("calculates the solve to Bézout's identity", () => {
    let solve = extEuclid(1, 0);
    assert.equal(solve.x, 1);
    assert.equal(solve.y, 0);

    solve = extEuclid(25, 35);
    assert.equal(solve.x, 3);
    assert.equal(solve.y, -2);

    solve = extEuclid(-55, 22);
    assert.equal(solve.x, 1);
    assert.equal(solve.y, 3);
  });
});
