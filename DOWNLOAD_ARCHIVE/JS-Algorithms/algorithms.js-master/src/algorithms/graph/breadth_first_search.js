import Queue from "../../data_structures/queue";

/**
 * @typedef {Object} Callbacks
 * @param {function(vertex: *, neighbor: *): boolean} allowTraversal -
 *   Determines whether BFS should traverse from the vertex to its neighbor
 *   (along the edge). By default prohibits visiting the same vertex again.
 * @param {function(vertex: *, neighbor: *)} onTraversal - Called when BFS
 *   follows the edge (and puts its head into the queue).
 * @param {function(vertex: *)} enterVertex - Called when BFS enters the vertex.
 * @param {function(vertex: *)} leaveVertex - Called when BFS leaves the vertex.
 */

/**
 * Fill in missing callbacks.
 *
 * @param {Callbacks} callbacks
 * @param {Array} seenVertices - Vertices already discovered,
 *   used by default allowTraversal implementation.
 * @return {Callbacks} The same object or new one (if null passed).
 */
const normalizeCallbacks = (callbacks = {}, seenVertices) => {
  callbacks.allowTraversal =
    callbacks.allowTraversal ||
    (() => {
      const seen = seenVertices.reduce((seen, vertex) => {
        seen[vertex] = true;
        return seen;
      }, {});

      return (vertex, neighbor) => {
        if (!seen[neighbor]) {
          seen[neighbor] = true;
          return true;
        }
        return false;
      };
    })();

  const noop = () => {};
  callbacks.onTraversal = callbacks.onTraversal || noop;
  callbacks.enterVertex = callbacks.enterVertex || noop;
  callbacks.leaveVertex = callbacks.leaveVertex || noop;

  return callbacks;
};

/**
 * Run Breadth-First Search from a start vertex.
 * Complexity (default implementation): O(V + E).
 *
 * @param {Graph} graph
 * @param {*} startVertex
 * @param {Callbacks} [callbacks]
 */
const breadthFirstSearch = (graph, startVertex, callbacks) => {
  const vertexQueue = new Queue();
  vertexQueue.push(startVertex);
  callbacks = normalizeCallbacks(callbacks, [startVertex]);

  let vertex;
  const enqueue = (neighbor) => {
    if (callbacks.allowTraversal(vertex, neighbor)) {
      callbacks.onTraversal(vertex, neighbor);
      vertexQueue.push(neighbor);
    }
  };

  while (!vertexQueue.isEmpty()) {
    vertex = vertexQueue.pop();
    callbacks.enterVertex(vertex);
    graph.neighbors(vertex).forEach(enqueue);
    callbacks.leaveVertex(vertex);
  }
};

export default breadthFirstSearch;
