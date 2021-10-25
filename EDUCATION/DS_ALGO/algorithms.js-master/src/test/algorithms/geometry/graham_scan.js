import grahamScan from "../../../algorithms/geometry/graham_scan";
import assert from "assert";

describe("Graham s Scan algorithm", () => {
  /* we have to ensure the order before using deepEqual. */
  let pointComparison;
  before(() => {
    pointComparison = ({ x, y }, { x, y }) => {
      return x != x ? x < x : y < y;
    };
  });

  it("ConvexHull of set 0", () => {
    const P = [
      { x: 3, y: 4 },
      { x: 5, y: 2 },
      { x: 7, y: 4 },
      { x: 3, y: 5 },
      { x: 4.7, y: 3.66 },
      { x: 5.4, y: 4.52 },
      { x: 5, y: 6 },
      { x: 6, y: 6 },
      { x: 5.62, y: 3.5 },
    ];
    const convexHullOfP = [
      { x: 3, y: 4 },
      { x: 5, y: 2 },
      { x: 7, y: 4 },
      { x: 3, y: 5 },
      { x: 5, y: 6 },
      { x: 6, y: 6 },
    ];
    convexHullOfP.sort(pointComparison);
    const computedConvexHull = grahamScan(P);
    computedConvexHull.sort(pointComparison);
    assert.deepEqual(computedConvexHull, convexHullOfP);
  });

  it("ConvexHull of set 1", () => {
    const P = [
      { x: 2.8, y: 3.6 },
      { x: 4.2, y: 3.7 },
      { x: 3.6, y: 4.3 },
      { x: 2.2, y: 5.2 },
      { x: 3.6, y: 5.8 },
      { x: 4.6, y: 5.2 },
      { x: 4.8, y: 4.5 },
      { x: 5.6, y: 3.4 },
      { x: 4, y: 3 },
      { x: 3, y: 3.1 },
      { x: 1.9, y: 2.7 },
      { x: 1.6, y: 3.7 },
      { x: 2.3, y: 4.2 },
      { x: 3, y: 2.4 },
    ];
    const convexHullOfP = [
      { x: 2.2, y: 5.2 },
      { x: 3.6, y: 5.8 },
      { x: 4.6, y: 5.2 },
      { x: 5.6, y: 3.4 },
      { x: 1.9, y: 2.7 },
      { x: 1.6, y: 3.7 },
      { x: 3, y: 2.4 },
    ];
    convexHullOfP.sort(pointComparison);
    const computedConvexHull = grahamScan(P);
    computedConvexHull.sort(pointComparison);
    assert.deepEqual(computedConvexHull, convexHullOfP);
  });

  it("ConvexHull of set 2", () => {
    const P = [
      { x: 1.7, y: 2.4 },
      { x: 2.8, y: 2 },
      { x: 1.3, y: 1.6 },
      { x: 2.4, y: 1.4 },
      { x: 2.4, y: 0.6 },
      { x: 1.6, y: 0.7 },
      { x: 4, y: 1 },
      { x: 4.9, y: 1.3 },
      { x: 3.5, y: 2.1 },
      { x: 3.7, y: 2.8 },
      { x: 2.6, y: 3.1 },
      { x: 0.7, y: 2.8 },
      { x: 0.9, y: 1.6 },
    ];
    const convexHullOfP = [
      { x: 2.4, y: 0.6 },
      { x: 1.6, y: 0.7 },
      { x: 4, y: 1 },
      { x: 4.9, y: 1.3 },
      { x: 3.7, y: 2.8 },
      { x: 2.6, y: 3.1 },
      { x: 0.7, y: 2.8 },
      { x: 0.9, y: 1.6 },
    ];
    convexHullOfP.sort(pointComparison);
    const computedConvexHull = grahamScan(P);
    computedConvexHull.sort(pointComparison);
    assert.deepEqual(computedConvexHull, convexHullOfP);
  });

  it("ConvexHull of set 3", () => {
    const P = [
      { x: 2, y: 1 },
      { x: 3, y: 2 },
      { x: 4, y: 3 },
      { x: 5, y: 4 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
      { x: 2.4, y: 3.5 },
      { x: 3.6, y: 3.5 },
      { x: 2, y: 4 },
      { x: 2, y: 3 },
      { x: 2, y: 2 },
    ];
    const convexHullOfP = [
      { x: 2, y: 1 },
      { x: 5, y: 4 },
      { x: 2, y: 4 },
    ];
    convexHullOfP.sort(pointComparison);
    const computedConvexHull = grahamScan(P);
    computedConvexHull.sort(pointComparison);
    assert.deepEqual(computedConvexHull, convexHullOfP);
  });

  it("ConvexHull of set 4", () => {
    const P = [
      { x: 2, y: 1 },
      { x: 3, y: 2 },
      { x: 4, y: 3 },
      { x: 4, y: 4 },
      { x: 2, y: 5 },
      { x: 2, y: 6 },
      { x: 2, y: 4 },
      { x: 5, y: 4 },
      { x: 3, y: 5 },
      { x: 2, y: 3 },
      { x: 2, y: 2 },
    ];
    const convexHullOfP = [
      { x: 2, y: 1 },
      { x: 5, y: 4 },
      { x: 2, y: 6 },
    ];
    convexHullOfP.sort(pointComparison);
    const computedConvexHull = grahamScan(P);
    computedConvexHull.sort(pointComparison);
    assert.deepEqual(computedConvexHull, convexHullOfP);
  });
});
