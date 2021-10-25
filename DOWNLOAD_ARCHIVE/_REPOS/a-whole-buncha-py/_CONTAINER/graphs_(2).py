# class Graph:
#     def __init__(self)

graph_map = {'a': 0}

graph = [
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0],
]

# get the second vertex and its edges
second_vertex = graph[1]

# Find out if, third and last vertex are connected
print(graph[2][4] == 1)


# Make a new connection from B to E
graph[1][4] = 1

graph = {
    'a': set('b', 'c', 'd'),
    'b': set(),
    'c': set('e'),
    'd': set('e'),
    'e': set(),
}

# Find out if, C connects to E
print('e' in graph['c'])

# Find out if A and E are connected?
print('e' in graph['a'])

