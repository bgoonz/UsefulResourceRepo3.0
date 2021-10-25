import DisjointSetForest from "../../data_structures/disjoint_set_forest";
import Graph from "../../data_structures/graph";

/**
 * Kruskal's minimum spanning tree (forest) algorithm.
 * Complexity: O(E * log(V)).
 *
 * @param {Graph} graph - Undirected graph.
 * @return {Graph} Minimum spanning tree or forest
 *   (depending on whether input graph is connected itself).
 */
const kruskal = (graph) => {
  if (graph.directed) {
    throw new Error("Can't build MST of a directed graph.");
  }

  const connectedComponents = new DisjointSetForest();
  const mst = new Graph(false);
  graph.vertices.forEach(mst.addVertex.bind(mst));

  const edges = [];
  graph.vertices.forEach((vertex) => {
    graph.neighbors(vertex).forEach((neighbor) => {
      // Compared as strings, loops intentionally omitted.
      if (vertex < neighbor) {
        edges.push({
          ends: [vertex, neighbor],
          weight: graph.edge(vertex, neighbor),
        });
      }
    });
  });

  edges
    .sort(({ weight }, { weight }) => weight - weight)
    .forEach(({ ends, weight }) => {
      if (!connectedComponents.sameSubset(ends[0], ends[1])) {
        mst.addEdge(ends[0], ends[1], weight);
        connectedComponents.merge(ends[0], ends[1]);
      }
    });

  return mst;
};

export default kruskal;
