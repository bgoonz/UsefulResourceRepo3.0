import { topologicalSort as ts } from "../../../src/graphs/others/topological-sort";

describe("Topological sort", () => {
  "use strict";
  it("should be defined", () => {
    expect(typeof ts).toBe("function");
  });

  it("should work with empty graphs", () => {
    expect(ts({})).toEqual([]);
  });

  it("should give the proper topological order", () => {
    expect(ts({ v1: [] })).toEqual(["v1"]);
    let graph = {
      v1: ["v2"],
      v2: ["v3"],
      v3: [],
    };
    expect(ts(graph)).toEqual(["v1", "v2", "v3"]);
    graph = {
      v1: ["v2", "v5"],
      v2: [],
      v3: ["v1", "v2", "v4", "v5"],
      v4: [],
      v5: [],
    };
    expect(ts(graph)).toEqual(["v3", "v4", "v1", "v5", "v2"]);
  });

  it("should throw an error on cycle", () => {
    function runTs() {
      ts({
        v1: ["v2"],
        v2: ["v1"],
      });
    }
    expect(runTs).toThrow();
  });
});
