import { dijkstra } from "../../../src/graphs/shortest-path/dijkstra";

describe("dijkstra", () => {
  "use strict";
  it("should define a function", () => {
    expect(dijkstra).toBeDefined();
    expect(typeof dijkstra).toBe("function");
  });

  it("should work with empty graph", () => {
    expect(dijkstra(0, 0, [])).toBe(Infinity);
  });

  it("should work when the src and dest are the same", () => {
    expect(dijkstra(0, 0, [[0]])).toBe(0);
  });

  it("should work when there's no path", () => {
    expect(
      dijkstra(0, 1, [
        [0, Infinity],
        [Infinity, 0],
      ])
    ).toBe(Infinity);
  });

  it("should find the shortest path", () => {
    expect(
      dijkstra(0, 2, [
        [0, 1, 4],
        [1, 0, 1],
        [4, 1, 0],
      ])
    ).toBe(2);
  });
});
