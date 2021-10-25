def dft(self, starting_vertex_id):
    # Create an empty stack and push the starting vertex ID
    s = Stack()
    s.push(starting_vertex_id)
    # Create a Set to store visited vertices
    visited = set()
    # While the stack is not empty...
    while s.size() > 0:
        # Pop the first vertex
        v = s.pop()
        # If that vertex has not been visited...
        if v not in visited:
            # Mark it as visited...
            print(v)
            visited.add(v)
            # Then add all of its neighbors to the top of the stack
            for next_vert in self.vertices[v]:
                s.push(next_vert)