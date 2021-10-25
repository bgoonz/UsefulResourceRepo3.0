import exported from "../../../src/graphs/shortest-path/bellman-ford";
const bellmanFord = exported.bellmanFord;
const Vertex = exported.Vertex;
const Edge = exported.Edge;

describe("Bellman-Ford", () => {
  "use strict";
  it("should exports a method called bellmanFord", () => {
    expect(typeof bellmanFord).toBe("function");
  });

  it("should work for an empty graph", () => {
    const vs = [];
    const e = [];
    expect(bellmanFord(vs, e, undefined)).toEqual({
      parents: {},
      distances: {},
    });
  });

  it("should work for a graph with a single vertex", () => {
    const vs = [new Vertex(1)];
    const e = [];
    expect(bellmanFord(vs, e, vs[0])).toEqual({
      parents: { 1: null },
      distances: { 1: 0 },
    });
  });

  it("should work in the general case", () => {
    const vs = [new Vertex(1), new Vertex(2), new Vertex(3)];
    const e = [
      new Edge(vs[0], vs[1], 2),
      new Edge(vs[0], vs[2], 10),
      new Edge(vs[1], vs[2], 1),
    ];
    const output = bellmanFord(vs, e, vs[0]);
    expect(output.distances["3"]).toBe(3);
  });
});
