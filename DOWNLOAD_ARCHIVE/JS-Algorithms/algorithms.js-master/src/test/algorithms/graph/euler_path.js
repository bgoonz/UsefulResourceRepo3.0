import root from "../../../";
const eulerPath = root.Graph.eulerPath;
const Graph = root.DataStructures.Graph;
import assert from "assert";

describe("Euler Path", () => {
  const verifyEulerPath = (graph, trail) => {
    const visited = new Graph(graph.directed);
    graph.vertices.forEach(visited.addVertex.bind(visited));

    trail.slice(1).reduce((previous, current) => {
      assert(graph.edge(previous, current));
      assert(!visited.edge(previous, current));
      visited.addEdge(previous, current);
      return current;
    }, trail[0]);

    graph.vertices.forEach((vertex) => {
      assert.equal(
        graph.neighbors(vertex).length,
        visited.neighbors(vertex).length
      );
    });
  };

  const graphFromEdges = (directed, edges) => {
    const graph = new Graph(directed);
    edges.forEach((edge) => {
      graph.addEdge(edge[0], edge[1]);
    });
    return graph;
  };

  it("computes Euler tour over the undirected graph", () => {
    const graph = graphFromEdges(false, [
      [1, 2],
      [1, 5],
      [1, 7],
      [1, 8],
      [2, 3],
      [2, 4],
      [2, 5],
      [3, 5],
      [4, 6],
      [4, 9],
      [4, 10],
      [5, 6],
      [6, 9],
      [6, 10],
      [7, 8],
    ]);
    const trail = eulerPath(graph);
    verifyEulerPath(graph, trail);
    assert.equal(trail[0], trail.slice(-1)[0]);
  });

  it("computes Euler walk over the undirected graph", () => {
    const graph = graphFromEdges(false, [
      [1, 2],
      [1, 5],
      [1, 7],
      [2, 3],
      [2, 4],
      [2, 5],
      [3, 5],
      [4, 6],
      [4, 9],
      [4, 10],
      [5, 6],
      [6, 9],
      [6, 10],
      [7, 8],
    ]);
    const trail = eulerPath(graph);
    verifyEulerPath(graph, trail);
    const endpoints = [trail[0], trail.slice(-1)[0]];
    endpoints.sort();
    assert.equal(endpoints[0], 1);
    assert.equal(endpoints[1], 8);
  });

  it("computes Euler tour over the directed graph", () => {
    const graph = graphFromEdges(true, [
      [0, 1],
      [1, 2],
      [2, 0],
      [0, 3],
      [3, 4],
      [4, 0],
      [4, 1],
      [1, 5],
      [5, 6],
      [6, 4],
    ]);
    const trail = eulerPath(graph);
    verifyEulerPath(graph, trail);
    assert.equal(trail[0], trail.slice(-1)[0]);
  });

  it("computes Euler walk over the directed graph", () => {
    const graph = graphFromEdges(true, [
      [5, 0],
      [0, 2],
      [2, 4],
      [4, 0],
      [1, 5],
      [3, 1],
      [5, 3],
    ]);
    const trail = eulerPath(graph);
    assert.deepEqual(trail, [5, 3, 1, 5, 0, 2, 4, 0]);
  });

  it("returns single-vertex-trail for an isolated vertex", () => {
    const graph = new Graph();
    graph.addVertex("loner");
    const trail = eulerPath(graph);
    assert.deepEqual(trail, ["loner"]);
  });

  it("returns empty trail for an empty graph", () => {
    const graph = new Graph();
    const trail = eulerPath(graph);
    assert.deepEqual(trail, []);
  });

  it("raises an error if there is no Euler path", () => {
    let graph = graphFromEdges(false, [
      [0, 1],
      [2, 3],
    ]);
    assert.throws(eulerPath.bind(null, graph));

    graph = graphFromEdges(false, [
      [0, 1],
      [0, 2],
      [0, 3],
    ]);
    assert.throws(eulerPath.bind(null, graph));

    graph = graphFromEdges(true, [
      [0, 1],
      [0, 2],
    ]);
    assert.throws(eulerPath.bind(null, graph));

    graph = graphFromEdges(true, [
      [1, 0],
      [2, 0],
    ]);
    assert.throws(eulerPath.bind(null, graph));

    graph = graphFromEdges(true, [
      [0, 1],
      [2, 3],
      [3, 2],
    ]);
    assert.throws(eulerPath.bind(null, graph));

    graph = graphFromEdges(true, [
      [0, 1],
      [2, 3],
    ]);
    assert.throws(eulerPath.bind(null, graph));
  });
});
