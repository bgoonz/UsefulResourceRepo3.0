graph = {
    'a': set(['b', 'c', 'd']),
    'b': set(),
    'c': set(['e']),
    'd': set(['e']),
    'e': set([]),
}

paths = []
def pre_order_traversal(start_vertex, graph, current_path):
    current_path.append(start_vertex)
    print(current_path)
    # Check for neighbors
    neighbors = graph[start_vertex]
    if len(neighbors) == 0:
        paths.append(current_path)
    for neighbor in neighbors:
        pre_order_traversal(neighbor, graph, current_path.copy())




pre_order_traversal('a', graph, [])
print(paths)

