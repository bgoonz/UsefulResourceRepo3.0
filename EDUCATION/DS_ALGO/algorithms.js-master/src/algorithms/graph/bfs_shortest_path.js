import breadthFirstSearch from "./breadth_first_search";

/**
 * Shortest-path algorithm based on Breadth-First Search.
 * Works solely on graphs with equal edge weights (but works fast).
 * Complexity: O(V + E).
 *
 * @param {Graph} graph
 * @param {string} source
 * @return {{distance: Object.<string, number>,
 *           previous: Object.<string, string>}}
 */
const bfsShortestPath = (graph, source) => {
  const distance = {};
  const previous = {};
  distance[source] = 0;

  breadthFirstSearch(graph, source, {
    onTraversal(vertex, neighbor) {
      distance[neighbor] = distance[vertex] + 1;
      previous[neighbor] = vertex;
    },
  });

  return {
    distance,
    previous,
  };
};

export default bfsShortestPath;
