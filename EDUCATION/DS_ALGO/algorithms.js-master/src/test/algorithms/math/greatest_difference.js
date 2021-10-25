import assert from "assert";
import { Math as math } from "../../..";
const greatestDifference = math.greatestDifference;

describe("Greatest Difference", () => {
  it("returns 7 for [5, 8, 6, 1]", () => {
    assert.equal(greatestDifference([5, 8, 6, 1]), 7);
  });

  it("returns 4 for [7, 8, 4]", () => {
    assert.equal(greatestDifference([7, 8, 4]), 4);
  });

  it("returns 38 for the Lost numbers", () => {
    assert.equal(greatestDifference([4, 8, 15, 16, 23, 42]), 38);
  });
});
