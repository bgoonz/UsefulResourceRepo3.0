#
# Binary trees are already defined with this interface:
class Tree(object):
  def __init__(self, x):
    self.value = x
    self.left = None
    self.right = None

def treePaths(t):
    if t is None:
        return []
    
    output = []
    dft(t, output, [])
    return output



     # ??? "->".join(path[:])
    #  ["5", "2", "10"]
    #  ["5>2->10","s->2->4", "5->-3"]
     
def is_leaf(node):
    return node.left is None and node.right is None
    
def dft(root, output, path):
    if root is None:
        return None
    
    path.append(str(root.value))
    
    if is_leaf(root):
        output.append("->".join(path[:]))
        
    dft(root.left, output, path)
    dft(root.right, output, path)
    
    path.pop()

tr = Tree(5)
tr.left = Tree(2)
tr.left.left = Tree(10)
tr.left.right = Tree(4)
tr.right = Tree(-3)

print(treePaths(tr))