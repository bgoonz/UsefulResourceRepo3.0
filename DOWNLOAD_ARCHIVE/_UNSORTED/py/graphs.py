graph = {
    'a': set(['b', 'c', 'd']),
    'b': set(),
    'c': set('e'),
    'd': set(['e', 'f']),
    'e': set(['a','f']),
    'f': set(),
}


def print_graph_with_helper(current_vertex):
    visited = set()
    def recursive_helper(current_vertex):
        print(current_vertex)

        # add current vertex to visited set
        visited.add(current_vertex)
        # Recurse on the children
        for neighbor in graph[current_vertex]:
            if neighbor not in visited:
                recursive_helper(neighbor)
    
    recursive_helper(current_vertex)

def print_graph(current_vertex, visited):
    print(current_vertex)

    # add current vertex to visited set
    visited.add(current_vertex)
    # Recurse on the children
    for neighbor in graph[current_vertex]:
        if neighbor not in visited:
            print_graph(neighbor, visited)
    

# print_graph('a', set())
# print_graph('a', set())
# print_graph('a', set())
# print_graph('a', set())


def print_paths(current_vertex, visited, current_path):
    current_path.append(current_vertex)

    # add current vertex to visited set
    visited.add(current_vertex)
    # Recurse on the children
    for neighbor in graph[current_vertex]:
        if neighbor not in visited:
            print_paths(neighbor, visited, current_path.copy())
    
    print(current_path)
        

# print_paths('a', set(), [])

def iterative_dft(start_vertex):
    stack = []
    visited = set()
    stack.append((start_vertex, []))

    while len(stack) > 0:
        # get a current vertex
        current_vertex, path = stack.pop()

        if current_vertex in visited:
            continue

        print(current_vertex)
        path.append(current_vertex)

        visited.add(current_vertex)

        for neighbor in graph[current_vertex]:      
            if neighbor not in visited:
                stack.append((neighbor, path.copy()))        
        
        print(path)

# iterative_dft('a')


def iterative_bft(start_vertex):
    queue = []
    visited = set()
    queue.append((start_vertex, []))

    while len(queue) > 0:
        # get a current vertex
        current_vertex, path = queue.pop(0)

        if current_vertex in visited:
            continue

        print(current_vertex)
        path.append(current_vertex)

        visited.add(current_vertex)

        for neighbor in graph[current_vertex]:      
            if neighbor not in visited:
                queue.append((neighbor, path.copy()))        
        
        print(path)

# iterative_bft('a')

# BFS (search)
def iterative_bf_search(start_vertex, target_vertex):
    queue = []
    visited = set()
    queue.append((start_vertex, []))

    while len(queue) > 0:
        # get a current vertex
        current_vertex, path = queue.pop(0)

        if current_vertex in visited:
            continue

        path.append(current_vertex)
        # Check if this is the target vertex
        if current_vertex == target_vertex:
            return path


        visited.add(current_vertex)

        for neighbor in graph[current_vertex]:      
            if neighbor not in visited:
                queue.append((neighbor, path.copy()))        
        
    return None

print(iterative_bf_search('c', 'b'))