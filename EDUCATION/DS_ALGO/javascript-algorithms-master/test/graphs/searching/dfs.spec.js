import { dfs } from "../../../src/graphs/searching/dfs";

describe("dfs", () => {
  "use strict";

  it("should work with empty graph", () => {
    expect(dfs([[]])).toBeTruthy();
  });

  it("should always find a path between node and itself", () => {
    expect(dfs([[0]]), 0, 0).toBeTruthy();
  });

  it("should always find a path between two directly connected nodes", () => {
    expect(
      dfs(
        [
          [0, 1],
          [1, 0],
        ],
        0,
        1
      )
    ).toBeTruthy();
    expect(
      dfs(
        [
          [0, 1],
          [1, 0],
        ],
        1,
        0
      )
    ).toBeTruthy();
  });

  it(
    "should always find a path between two directly connected" +
      "connected nodes in a directed graph",
    () => {
      expect(
        dfs(
          [
            [0, 0],
            [1, 0],
          ],
          1,
          0
        )
      ).toBeTruthy();
    }
  );

  it("should always find a path between two indirectly connected nodes", () => {
    expect(
      dfs(
        [
          [0, 1, 0],
          [0, 0, 1],
          [0, 0, 0],
        ],
        0,
        2
      )
    ).toBeTruthy();
  });

  it("should not find a path between two nodes, which are not connected", () => {
    expect(
      dfs(
        [
          [0, 0],
          [1, 0],
        ],
        0,
        1
      )
    ).toBeFalsy();
    expect(
      dfs(
        [
          [0, 0, 0],
          [0, 0, 1],
          [0, 0, 0],
        ],
        0,
        2
      )
    ).toBeFalsy();
  });
});
