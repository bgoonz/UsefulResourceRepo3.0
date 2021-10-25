import root from "../../../";
const spfa = root.Graph.SPFA;
const Graph = root.DataStructures.Graph;
import assert from "assert";

describe("SPFA Algorithm", () => {
  it("returns the shortest paths to all nodes from a given origin", () => {
    const graph = new Graph(true);

    graph.addEdge("a", "b", -1);
    graph.addEdge("a", "c", 4);
    graph.addEdge("b", "c", 3);
    graph.addEdge("b", "d", 2);
    graph.addEdge("b", "e", 2);
    graph.addEdge("d", "b", 1);
    graph.addEdge("e", "d", -3);
    graph.addEdge("d", "c", 5);

    let shortestPaths = spfa(graph, "a");

    assert.equal(shortestPaths.distance.a, 0);
    assert.equal(shortestPaths.distance.d, -2);
    assert.equal(shortestPaths.distance.e, 1);
    assert.equal(shortestPaths.previous.d, "e");
    assert.equal(shortestPaths.previous.e, "b");

    // It'll cause a Negative-Weighted Cycle.
    graph.addEdge("c", "a", -9);

    shortestPaths = spfa(graph, "a");

    // The 'distance' object is empty
    assert.equal(shortestPaths.distance.a, undefined);
  });
});
