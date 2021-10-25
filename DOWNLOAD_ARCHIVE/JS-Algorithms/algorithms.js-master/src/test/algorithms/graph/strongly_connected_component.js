import root from "../../../";
const Graph = root.DataStructures.Graph;
const stronglyConnectedComponent = root.Graph.strongConnectedComponent;
import assert from "assert";

describe("Strongly Connected Component", () => {
  it("computes strongly connected components", () => {
    // graph: 0 -> 1 -> 2
    let graph = new Graph();
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);

    let scc = stronglyConnectedComponent(graph);
    assert.equal(scc.count, 3);
    assert(scc.id[0] > scc.id[1]);
    assert(scc.id[1] > scc.id[2]);

    // graph: 0 <-> 1 -> 2
    graph = new Graph();
    graph.addEdge(0, 1);
    graph.addEdge(1, 0);
    graph.addEdge(1, 2);

    scc = stronglyConnectedComponent(graph);
    assert.equal(scc.count, 2);
    assert.equal(scc.id[0], scc.id[1]);
    assert(scc.id[1] > scc.id[2]);

    // graph: http://algs4.cs.princeton.edu/42digraph/images/transitive-closure.png
    graph = new Graph();
    graph.addEdge(0, 1);
    graph.addEdge(0, 5);
    graph.addEdge(2, 0);
    graph.addEdge(2, 3);
    graph.addEdge(3, 2);
    graph.addEdge(3, 5);
    graph.addEdge(4, 2);
    graph.addEdge(4, 3);
    graph.addEdge(5, 4);
    graph.addEdge(6, 0);
    graph.addEdge(6, 4);
    graph.addEdge(6, 9);
    graph.addEdge(7, 6);
    graph.addEdge(7, 8);
    graph.addEdge(8, 7);
    graph.addEdge(8, 9);
    graph.addEdge(9, 10);
    graph.addEdge(9, 11);
    graph.addEdge(10, 12);
    graph.addEdge(11, 4);
    graph.addEdge(11, 12);
    graph.addEdge(12, 9);

    scc = stronglyConnectedComponent(graph);
    assert.equal(scc.count, 5);

    // scc no.0
    assert(scc.id[0] > scc.id[1]);

    // scc no.1
    assert.equal(scc.id[0], scc.id[2]);
    assert.equal(scc.id[0], scc.id[3]);
    assert.equal(scc.id[0], scc.id[4]);
    assert.equal(scc.id[0], scc.id[5]);

    // scc no.2
    assert(scc.id[9] > scc.id[0]);
    assert.equal(scc.id[9], scc.id[10]);
    assert.equal(scc.id[9], scc.id[11]);
    assert.equal(scc.id[9], scc.id[12]);

    // scc no.3
    assert(scc.id[6] > scc.id[9]);

    // scc no.4
    assert(scc.id[7] > scc.id[6]);
    assert.equal(scc.id[7], scc.id[8]);
  });
});
