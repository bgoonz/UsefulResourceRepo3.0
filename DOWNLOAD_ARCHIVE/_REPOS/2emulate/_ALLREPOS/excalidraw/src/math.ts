import { Point } from "./types";
import { LINE_CONFIRM_THRESHOLD } from "./constants";
import { ExcalidrawLinearElement } from "./element/types";

// https://stackoverflow.com/a/6853926/232122
export const distanceBetweenPointAndSegment = (
  x: number,
  y: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
) => {
  const A = x - x1;
  const B = y - y1;
  const C = x2 - x1;
  const D = y2 - y1;

  const dot = A * C + B * D;
  const lenSquare = C * C + D * D;
  let param = -1;
  if (lenSquare !== 0) {
    // in case of 0 length line
    param = dot / lenSquare;
  }

  let xx, yy;
  if (param < 0) {
    xx = x1;
    yy = y1;
  } else if (param > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + param * C;
    yy = y1 + param * D;
  }

  const dx = x - xx;
  const dy = y - yy;
  return Math.hypot(dx, dy);
};

export const rotate = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  angle: number,
): [number, number] =>
  // πβ²π₯=(ππ₯βππ₯)cosπβ(ππ¦βππ¦)sinπ+ππ₯
  // πβ²π¦=(ππ₯βππ₯)sinπ+(ππ¦βππ¦)cosπ+ππ¦.
  // https://math.stackexchange.com/questions/2204520/how-do-i-rotate-a-line-segment-in-a-specific-point-on-the-line
  [
    (x1 - x2) * Math.cos(angle) - (y1 - y2) * Math.sin(angle) + x2,
    (x1 - x2) * Math.sin(angle) + (y1 - y2) * Math.cos(angle) + y2,
  ];

export const adjustXYWithRotation = (
  side: "n" | "s" | "w" | "e" | "nw" | "ne" | "sw" | "se",
  x: number,
  y: number,
  angle: number,
  deltaX1: number,
  deltaY1: number,
  deltaX2: number,
  deltaY2: number,
  isResizeFromCenter: boolean,
): [number, number] => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  if (side === "e" || side === "ne" || side === "se") {
    if (isResizeFromCenter) {
      x += deltaX1 + deltaX2;
    } else {
      x += deltaX1 * (1 + cos);
      y += deltaX1 * sin;
      x += deltaX2 * (1 - cos);
      y += deltaX2 * -sin;
    }
  }
  if (side === "s" || side === "sw" || side === "se") {
    if (isResizeFromCenter) {
      y += deltaY1 + deltaY2;
    } else {
      x += deltaY1 * -sin;
      y += deltaY1 * (1 + cos);
      x += deltaY2 * sin;
      y += deltaY2 * (1 - cos);
    }
  }
  if (side === "w" || side === "nw" || side === "sw") {
    if (isResizeFromCenter) {
      x += deltaX1 + deltaX2;
    } else {
      x += deltaX1 * (1 - cos);
      y += deltaX1 * -sin;
      x += deltaX2 * (1 + cos);
      y += deltaX2 * sin;
    }
  }
  if (side === "n" || side === "nw" || side === "ne") {
    if (isResizeFromCenter) {
      y += deltaY1 + deltaY2;
    } else {
      x += deltaY1 * sin;
      y += deltaY1 * (1 - cos);
      x += deltaY2 * -sin;
      y += deltaY2 * (1 + cos);
    }
  }
  return [x, y];
};

export const getFlipAdjustment = (
  side: "n" | "s" | "w" | "e" | "nw" | "ne" | "sw" | "se",
  nextWidth: number,
  nextHeight: number,
  nextX1: number,
  nextY1: number,
  nextX2: number,
  nextY2: number,
  finalX1: number,
  finalY1: number,
  finalX2: number,
  finalY2: number,
  needsRotation: boolean,
  angle: number,
): [number, number] => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  let flipDiffX = 0;
  let flipDiffY = 0;
  if (nextWidth < 0) {
    if (side === "e" || side === "ne" || side === "se") {
      if (needsRotation) {
        flipDiffX += (finalX2 - nextX1) * cos;
        flipDiffY += (finalX2 - nextX1) * sin;
      } else {
        flipDiffX += finalX2 - nextX1;
      }
    }
    if (side === "w" || side === "nw" || side === "sw") {
      if (needsRotation) {
        flipDiffX += (finalX1 - nextX2) * cos;
        flipDiffY += (finalX1 - nextX2) * sin;
      } else {
        flipDiffX += finalX1 - nextX2;
      }
    }
  }
  if (nextHeight < 0) {
    if (side === "s" || side === "se" || side === "sw") {
      if (needsRotation) {
        flipDiffY += (finalY2 - nextY1) * cos;
        flipDiffX += (finalY2 - nextY1) * -sin;
      } else {
        flipDiffY += finalY2 - nextY1;
      }
    }
    if (side === "n" || side === "ne" || side === "nw") {
      if (needsRotation) {
        flipDiffY += (finalY1 - nextY2) * cos;
        flipDiffX += (finalY1 - nextY2) * -sin;
      } else {
        flipDiffY += finalY1 - nextY2;
      }
    }
  }
  return [flipDiffX, flipDiffY];
};

export const getPointOnAPath = (point: Point, path: Point[]) => {
  const [px, py] = point;
  const [start, ...other] = path;
  let [lastX, lastY] = start;
  let kLine: number = 0;
  let idx: number = 0;

  // if any item in the array is true, it means that a point is
  // on some segment of a line based path
  const retVal = other.some(([x2, y2], i) => {
    // we always take a line when dealing with line segments
    const x1 = lastX;
    const y1 = lastY;

    lastX = x2;
    lastY = y2;

    // if a point is not within the domain of the line segment
    // it is not on the line segment
    if (px < x1 || px > x2) {
      return false;
    }

    // check if all points lie on the same line
    // y1 = kx1 + b, y2 = kx2 + b
    // y2 - y1 = k(x2 - x2) -> k = (y2 - y1) / (x2 - x1)

    // coefficient for the line (p0, p1)
    const kL = (y2 - y1) / (x2 - x1);

    // coefficient for the line segment (p0, point)
    const kP1 = (py - y1) / (px - x1);

    // coefficient for the line segment (point, p1)
    const kP2 = (py - y2) / (px - x2);

    // because we are basing both lines from the same starting point
    // the only option for collinearity is having same coefficients

    // using it for floating point comparisons
    const epsilon = 0.3;

    // if coefficient is more than an arbitrary epsilon,
    // these lines are nor collinear
    if (Math.abs(kP1 - kL) > epsilon && Math.abs(kP2 - kL) > epsilon) {
      return false;
    }

    // store the coefficient because we are goint to need it
    kLine = kL;
    idx = i;

    return true;
  });

  // Return a coordinate that is always on the line segment
  if (retVal === true) {
    return { x: point[0], y: kLine * point[0], segment: idx };
  }

  return null;
};

export const distance2d = (x1: number, y1: number, x2: number, y2: number) => {
  const xd = x2 - x1;
  const yd = y2 - y1;
  return Math.hypot(xd, yd);
};

// Checks if the first and last point are close enough
// to be considered a loop
export const isPathALoop = (
  points: ExcalidrawLinearElement["points"],
): boolean => {
  if (points.length >= 3) {
    const [firstPoint, lastPoint] = [points[0], points[points.length - 1]];
    return (
      distance2d(firstPoint[0], firstPoint[1], lastPoint[0], lastPoint[1]) <=
      LINE_CONFIRM_THRESHOLD
    );
  }
  return false;
};

// Draw a line from the point to the right till infiinty
// Check how many lines of the polygon does this infinite line intersects with
// If the number of intersections is odd, point is in the polygon
export const isPointInPolygon = (
  points: Point[],
  x: number,
  y: number,
): boolean => {
  const vertices = points.length;

  // There must be at least 3 vertices in polygon
  if (vertices < 3) {
    return false;
  }
  const extreme: Point = [Number.MAX_SAFE_INTEGER, y];
  const p: Point = [x, y];
  let count = 0;
  for (let i = 0; i < vertices; i++) {
    const current = points[i];
    const next = points[(i + 1) % vertices];
    if (doIntersect(current, next, p, extreme)) {
      if (orientation(current, p, next) === 0) {
        return onSegment(current, p, next);
      }
      count++;
    }
  }
  // true if count is off
  return count % 2 === 1;
};

// Check if q lies on the line segment pr
const onSegment = (p: Point, q: Point, r: Point) => {
  return (
    q[0] <= Math.max(p[0], r[0]) &&
    q[0] >= Math.min(p[0], r[0]) &&
    q[1] <= Math.max(p[1], r[1]) &&
    q[1] >= Math.min(p[1], r[1])
  );
};

// For the ordered points p, q, r, return
// 0 if p, q, r are collinear
// 1 if Clockwise
// 2 if counterclickwise
const orientation = (p: Point, q: Point, r: Point) => {
  const val = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
  if (val === 0) {
    return 0;
  }
  return val > 0 ? 1 : 2;
};

// Check is p1q1 intersects with p2q2
const doIntersect = (p1: Point, q1: Point, p2: Point, q2: Point) => {
  const o1 = orientation(p1, q1, p2);
  const o2 = orientation(p1, q1, q2);
  const o3 = orientation(p2, q2, p1);
  const o4 = orientation(p2, q2, q1);

  if (o1 !== o2 && o3 !== o4) {
    return true;
  }

  // p1, q1 and p2 are colinear and p2 lies on segment p1q1
  if (o1 === 0 && onSegment(p1, p2, q1)) {
    return true;
  }

  // p1, q1 and p2 are colinear and q2 lies on segment p1q1
  if (o2 === 0 && onSegment(p1, q2, q1)) {
    return true;
  }

  // p2, q2 and p1 are colinear and p1 lies on segment p2q2
  if (o3 === 0 && onSegment(p2, p1, q2)) {
    return true;
  }

  // p2, q2 and q1 are colinear and q1 lies on segment p2q2
  if (o4 === 0 && onSegment(p2, q1, q2)) {
    return true;
  }

  return false;
};
