import root from "../../../";
const topologicalSort = root.Graph.topologicalSort;
const Graph = root.DataStructures.Graph;
import assert from "assert";

describe("Topological Sort", () => {
  it("returns a stack with the vertices ordered based on dependencies", () => {
    const graph = new Graph();
    graph.addVertex("shoes");
    graph.addVertex("watch");
    graph.addVertex("underwear");
    graph.addVertex("socks");
    graph.addVertex("shirt");
    graph.addVertex("pants");
    graph.addVertex("belt");
    graph.addVertex("tie");
    graph.addVertex("jacket");

    graph.addEdge("shirt", "belt");
    graph.addEdge("shirt", "tie");
    graph.addEdge("shirt", "jacket");

    graph.addEdge("socks", "shoes");

    graph.addEdge("underwear", "pants");
    graph.addEdge("underwear", "shoes");

    graph.addEdge("pants", "shoes");
    graph.addEdge("pants", "belt");

    graph.addEdge("belt", "jacket");

    graph.addEdge("tie", "jacket");

    const stack = topologicalSort(graph);
    const a = [];
    while (!stack.isEmpty()) {
      a.push(stack.pop());
    }
    assert.deepEqual(a, [
      "shirt",
      "socks",
      "underwear",
      "pants",
      "shoes",
      "tie",
      "watch",
      "belt",
      "jacket",
    ]);
  });
});
