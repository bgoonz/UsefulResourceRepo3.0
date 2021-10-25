class Vertex:
  def __init__(self, value):
    self.__value__ = value
    self.__connections__ = {}

  def __str__(self):
    return f"{self.__value__} Connections: {[v.get_value(), for v in self.__connections__]}"

  def add_connection(self, vert, weight = 0):
    self.__connections__[vert] = weight
  
  def get_connections(self):
    return self.__connections__.keys()
  
  def get_value(self):
    return self.__value__
  
  def get_weight(self, vert):
    return self.__connections__[vert]

class Graph:
  def __init__(self):
    self.__vertices__ = {}
    self.__count__ = 0

  def contains(self, vert):
    return vert in self.__vertices__
  
  def __iter__(self):
    return iter(self.__vertices__.values())

  def add_vertex(self, value):
    self.__count__ += 1
    new_vert = Vertex(value)
    self.__vertices__[value] = new_vert
    return new_vert

  def add_edge(self, v1, v2, weight = 0):
    a = None
    b = None
    if v1 not in self.__vertices__:
      a = self.add_vertex(v1)
    if v2 not in self.__vertices__:
      b = self.add_vertex(v2)
    self.__vertices__[v1].add_connection(self.__vertices__[v2], weight)
    return (a, b)

  def get_vertices(self):
    return self.__vertices__.keys()

g = Graph()

# g.add_vertex("A")
# b = g.add_vertex("B")
# g.add_vertex("C")
# g.add_vertex("D")
# g.add_vertex("E")

a, b = g.add_edge("A", "B", 1)
g.add_edge("B", "C", 3)
g.add_edge("B", "D", 2)
g.add_edge("E", "D", 1)

print(b)
print(a)




