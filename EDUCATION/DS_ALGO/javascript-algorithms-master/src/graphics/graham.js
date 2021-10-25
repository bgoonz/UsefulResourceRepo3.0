((exports) => {
  "use strict";

  const slope = ({ y, x }, { y, x }) => (y - y) / (x - x);

  const dist = ({ y, x }, { y, x }) =>
    Math.sqrt((y - y) * (y - y) + (x - x) * (x - x));

  const sort = (p, memo, a, b) => {
    const sa = slope(p, a);
    const sb = slope(p, b);
    [
      [sa, a],
      [sb, b],
    ].forEach((e) => {
      const el = memo.get(e[0]);
      if (!el || dist(p, el) < dist(p, e[1])) {
        memo.set(e[0], e[1]);
      }
    });
    return sa - sb;
  };

  const ccw = ({ x, y }, { x, y }, { y, x }) =>
    (x - x) * (y - y) - (y - y) * (x - x);

  /**
   * Graham's algorithm for calculating the convex hull.
   *
   * @public
   * @module graphics/graham
   * @param {Array} all
   * @returns {Array}
   *
   * @example
   * const points = [
   *   { x: 0, y: 0 },
   *   { x: 1, y: 0 },
   *   { x: 0, y: 1 },
   *   { x: 0.15, y: 0.15 },
   *   { x: 0.5, y: 0.5 }
   * ];
   * const list = convexHull(points);
   * // [{ x: 0, y: 0 },
   * //  { x: 1, y: 0 },
   * //  { x: 0.5, y: 0.5 },
   * //  { x: 0, y: 1 }]
   */
  const convexHull = (all) => {
    if (!all.length) {
      return [];
    }

    const p = all.reduce((a, c) => {
      if (a.y < c.y) {
        return a;
      }
      if (a.y > c.y) {
        return c;
      }
      if (a.x < c.x) {
        return a;
      }
      return c;
    });

    const memo = new Map();
    const stack = [];

    all
      .sort(sort.bind(null, p, memo))
      .filter((c) => memo.get(slope(p, c)) === c)
      .forEach((p) => {
        while (
          stack.length > 1 &&
          ccw(stack[stack.length - 2], stack[stack.length - 1], p) < 0
        ) {
          stack.pop();
        }
        stack.push(p);
      });

    return stack;
  };

  exports.convexHull = convexHull;
})(typeof exports === "undefined" ? window : exports);
