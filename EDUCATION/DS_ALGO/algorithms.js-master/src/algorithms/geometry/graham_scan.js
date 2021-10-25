import vectorOp from "./vector_operations2d.js";

/**
 * Given an array p with N points on a two dimensional space,
 * the function grahamScan calculates the convex hull of p
 * in O(N * log(N)) time and using O(N) space.
 * Implemented algorithm: Graham's Scan.
 *
 * @param An array p with N points, each point should be a literal,
 * example: {x:0,y:0}.
 * @return An array p' with N' points which belongs to the convex hull of p.
 *
 * Note: If exists a subset S of p that contains only collinear points
 * which are present on the convex hull of p, then only the pair with
 * the largest distance will be present on p'.
 */
const grahamScan = (p) => {
  if (p.length <= 3) {
    return p;
  }
  preprocessing(p);
  const convexHull = [p[0], p[1]];
  for (let i = 2; i < p.length; i++) {
    let j = convexHull.length;
    while (
      j >= 2 &&
      !vectorOp.isCounterClockwise(convexHull[j - 2], convexHull[j - 1], p[i])
    ) {
      convexHull.pop();
      j--;
    }
    convexHull.push(p[i]);
  }
  return convexHull;
};

/**
 * @param An array p with N points, each point should be a literal,
 * example: {x:0,y:0}.
 *
 * Note: After the preprocessing the points will be ordered by the angle
 * between the vectors pivot -> pi and (0,1). Where pi is a point on p.
 * On the counter-clockwise direction.
 */
const preprocessing = (p) => {
  let pivot = p[0];
  for (let i = 1; i < p.length; i++) {
    if (pivot.y > p[i].y || (pivot.y === p[i].y && pivot.x > p[i].x)) {
      pivot = p[i];
    }
  }

  p.sort((a, b) => {
    const area = vectorOp.parallelogramArea(pivot, a, b);
    if (Math.abs(area) < 1e-6) {
      return (
        vectorOp.length(vectorOp.newVector(pivot, a)) -
        vectorOp.length(vectorOp.newVector(pivot, b))
      );
    }
    return -area;
  });
};

export default grahamScan;
