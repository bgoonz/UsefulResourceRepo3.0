#
# Binary trees are already defined with this interface:
class Tree(object):
  def __init__(self, x):
    self.value = x
    self.left = None
    self.right = None

tr = Tree(1)
tr.left = Tree(2)
tr.left.right = Tree(3)
tr.right = Tree(4)
tr.right.left = Tree(5)

def traverseTree(t):
    if t is None:
        return []
    ret_list = []
    q = []
    q.append(t)
    while len(q) > 0:
        node = q.pop(0)
        if node == None:
            continue
        ret_list.append(node.value)
        q.append(node.left)
        q.append(node.right)
    
    return ret_list

print(traverseTree(tr))