# You can find the Queue class in util.py in the module project repo
class Queue:
    def __init__(self):
        self.queue = []
    def enqueue(self, value):
        self.queue.append(value)
    def dequeue(self):
        if self.size() > 0:
            return self.queue.pop(0)
        else:
            return None
    def size(self):
        return len(self.queue)

class Graph:

	def __init__(self):
		self.vertices = {}

	def add_vertex(self, vertex_id):
		self.vertices[vertex_id] = set()  # set of edges

	def add_edge(self, v1, v2):
		"""Add edge from v1 to v2."""

		# If they're both in the graph
		if v1 in self.vertices and v2 in self.vertices:
			self.vertices[v1].add(v2)

		else:
			raise IndexError("Vertex does not exist in graph")

	def get_neighbors(self, vertex_id):
		return self.vertices[vertex_id]

	def bft(self, starting_vertex_id):
		"""Breadth-first Traversal."""

		q = Queue()
		q.enqueue(starting_vertex_id)

		# Keep track of visited nodes
		visited = set()

		# Repeat until queue is empty
		while q.size() > 0:
			
			# Dequeue first vert
			v = q.dequeue()

			# If it's not visited:
			if v not in visited:
				print(v)

				# Mark visited
				visited.add(v)

				for next_vert in self.get_neighbors(v):
					q.enqueue(next_vert)

g = Graph()
g.add_vertex(99)
g.add_vertex(3)
g.add_vertex(3490)
g.add_edge(99, 3490)   # Connect node 99 to node 3490
g.add_edge(99, 3)      # Connect node 99 to node 3
g.add_edge(3, 99)      # Connect node 3 to node 99

#print(g.get_neighbors(99))
#print(g.get_neighbors(3))

g.bft(99)
g.bft(3490)
