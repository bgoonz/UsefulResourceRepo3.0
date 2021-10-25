import Stack from "../../data_structures/stack";
import depthFirstSearch from "../../algorithms/graph/depth_first_search";

/**
 * Kosaraju's Strongly Connected Component algorithm, https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm
 * Complexity: O(V + E).
 *
 * @param {Graph} graph
 * @return {{count: number, id: Object.<string, number>}}
 *           count is the number of strongly connected components in the graph
 *           id is a Object, receives a vertex and returns id of the strongly
 *           connected component vertex belongs to, ranges from 0 to count - 1.
 *           note: 1.if v and w are in same scc, then id[v] == id[w]
 *                 2.if v and w are in different scc and there is a path from
 *                   v to w, then id[v] > id[w].
 *
 * Usage:
 *  var scc = stronglyConnectedComponent(g);
 *  scc.count; // count of strongly connected components
 *  scc.id[v]; // id of the strongly connected component which v belongs to
 */
const stronglyConnectedComponent = (graph) => {
  const reverse = graph.reverse();
  const stack = new Stack();
  let visited = {};
  let count = 0;
  const id = Object.create(null);

  reverse.vertices.forEach((node) => {
    if (!visited[node]) {
      depthFirstSearch(reverse, node, {
        allowTraversal(node, neighbor) {
          return !visited[neighbor];
        },
        enterVertex(node) {
          visited[node] = true;
        },
        leaveVertex(node) {
          stack.push(node);
        },
      });
    }
  });

  visited = {};
  const allowTraversal = (node, neighbor) => !visited[neighbor];
  const enterVertex = (node) => {
    visited[node] = true;
    id[node] = count;
  };

  while (!stack.isEmpty()) {
    const node = stack.pop();
    if (!visited[node]) {
      depthFirstSearch(graph, node, {
        allowTraversal,
        enterVertex,
      });
      ++count;
    }
  }

  return {
    count,
    id,
  };
};

export default stronglyConnectedComponent;
