import vectorOp from "../../../algorithms/geometry/vector_operations2d";
import assert from "assert";

describe("VectorOperations", () => {
  it("newVector: {0,4}->{1,2}", () => {
    assert.deepEqual(vectorOp.newVector({ x: 0, y: 4 }, { x: 1, y: 2 }), {
      x: 1,
      y: -2,
    });
  });

  it("crossProduct: {-1,7}x{-5,8}", () => {
    assert.equal(vectorOp.crossProduct({ x: -1, y: 7 }, { x: -5, y: 8 }), 27);
  });

  it("crossProduct: {45,45}x{-45,-45}", () => {
    assert.equal(
      vectorOp.crossProduct({ x: 45, y: 45 }, { x: -45, y: -45 }),
      0
    );
  });

  it("crossProduct: {1,1}x{1,0}", () => {
    assert.equal(vectorOp.crossProduct({ x: 1, y: 1 }, { x: 1, y: 0 }), -1);
  });

  it("isClockwise: {0,0},{2,2},{0,2}", () => {
    assert.equal(
      vectorOp.isClockwise({ x: 0, y: 0 }, { x: 2, y: 2 }, { x: 0, y: 2 }),
      false
    );
  });

  it("isClockwise: {0,0},{2,2},{0,-2}", () => {
    assert.equal(
      vectorOp.isClockwise({ x: 0, y: 0 }, { x: 2, y: 2 }, { x: 0, y: -2 }),
      true
    );
  });

  it("isClockwise: {0,0},{2,2},{1,1}", () => {
    assert.equal(
      vectorOp.isClockwise({ x: 0, y: 0 }, { x: 2, y: 2 }, { x: 1, y: 1 }),
      false
    );
  });
});
