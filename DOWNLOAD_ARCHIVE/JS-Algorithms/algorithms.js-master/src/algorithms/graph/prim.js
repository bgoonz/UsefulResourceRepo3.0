import PriorityQueue from "../../data_structures/priority_queue";
import Graph from "../../data_structures/graph";

/**
 * Prim's minimum spanning tree (forest) algorithm.
 * Complexity: O(E * log(V)).
 *
 * @param {Graph} graph - Undirected graph.
 * @return {Graph} Minimum spanning tree or forest
 *   (depending on whether input graph is connected itself).
 */
const prim = (graph) => {
  if (graph.directed) {
    throw new Error("Can't build MST of a directed graph.");
  }

  const mst = new Graph(false);
  const parent = Object.create(null);

  const q = new PriorityQueue();
  graph.vertices.forEach((vertex) => {
    q.insert(vertex, Infinity);
  });

  const relax = (vertex, neighbor) => {
    const weight = graph.edge(vertex, neighbor);
    if (weight < q.priority(neighbor)) {
      q.changePriority(neighbor, weight);
      parent[neighbor] = vertex;
    }
  };

  while (!q.isEmpty()) {
    const top = q.extract(true);
    const vertex = top.item;
    const weight = top.priority;

    if (parent[vertex]) {
      mst.addEdge(parent[vertex], vertex, weight);
    } else {
      mst.addVertex(vertex);
    }

    graph.neighbors(vertex).forEach(relax.bind(null, vertex));
  }

  return mst;
};

export default prim;
