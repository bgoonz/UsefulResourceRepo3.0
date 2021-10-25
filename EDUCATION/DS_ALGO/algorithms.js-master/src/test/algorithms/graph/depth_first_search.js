import root from "../../../";
const depthFirstSearch = root.Graph.depthFirstSearch;
const Graph = root.DataStructures.Graph;
import assert from "assert";

describe("Depth First Search Algorithm", () => {
  let graph;
  before(() => {
    graph = new Graph(true);
    graph.addEdge("one", "three");
    graph.addEdge("one", "four");
    graph.addEdge("four", "two");
    graph.addEdge("two", "one");
    graph.addEdge("three", "one");
    graph.addEdge("five", "six");
  });

  it("visits only the nodes reachable from the start node (inclusive)", () => {
    const enter = [];
    const leave = [];
    let numEdgeTails = 0;
    let numEdgeHeads = 0;

    depthFirstSearch(graph, "one");

    const dfsCallbacks = {
      enterVertex: [].push.bind(enter),
      leaveVertex: [].push.bind(leave),
      beforeTraversal() {
        numEdgeHeads += 1;
      },
      afterTraversal() {
        numEdgeTails += 1;
      },
    };

    depthFirstSearch(graph, "one", dfsCallbacks);
    assert.deepEqual(enter, ["one", "three", "four", "two"]);
    assert.deepEqual(leave, ["three", "two", "four", "one"]);
    assert.equal(numEdgeTails, numEdgeHeads);
    assert.equal(numEdgeHeads, 3);

    enter.splice(0, 4);
    leave.splice(0, 4);
    depthFirstSearch(graph, "five", dfsCallbacks);
    assert.deepEqual(enter, ["five", "six"]);
    assert.deepEqual(leave, ["six", "five"]);
    assert.equal(numEdgeTails, numEdgeHeads);
    assert.equal(numEdgeHeads, 4);
  });

  it("allows user-defined allowTraversal rules", () => {
    const seen = new Graph(graph.directed);
    graph.vertices.forEach(seen.addVertex.bind(seen));
    const path = ["one"];

    // Edge-centric DFS.
    depthFirstSearch(graph, path[0], {
      allowTraversal(vertex, neighbor) {
        return !seen.edge(vertex, neighbor);
      },
      beforeTraversal(vertex, neighbor) {
        seen.addEdge(vertex, neighbor);
        path.push(neighbor);
      },
    });

    assert.deepEqual(path, ["one", "three", "one", "four", "two", "one"]);
  });
});
