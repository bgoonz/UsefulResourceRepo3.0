# value
# left
# right

class BSTNode:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None
  
  def insert(self, value):
    if value <= self.value:
      if self.left == None:
        self.left = BSTNode(value)
      else:
        self.left.insert(value)
    else:
      if self.right == None:
        self.right = BSTNode(value)
      else:
        self.right.insert(value)

  def search(self, target):
    if self.value == target:
      return self
    elif target < self.value:
      if self.left == None:
        return False
      else:
        return self.left.search(target)
    else:
      if self.right == None:
        return False
      else:
        return self.right.search(target)

  def inorder_print(self):
    if self is not None:
        if self.left is not None:
          self.left.inorder_print()
        print(self.value)
        if self.right is not None:
          self.right.inorder_print()


  def min(self):
    # go left until left is None
    current = self
    while current.left:
      current = current.left
    
    return current.value

  def max(self):
    # go right until right is None
    current = self
    while current.right:
      current = current.right
    
    return current.value

root = BSTNode(20)

# add a node with a value of 10
n1 = BSTNode(10)
# check if the value of n1 is less than or equal to the value of root
  # go left
  # check is this node None
    # insert the n1 to the left

# add a node with a value of 30
n2 = BSTNode(30)
# check if the value of n2 is less than or equal to the value of root
  # go left
  # check is this node None
    # insert the n1 to the left
# otherwise
  # go right
  # check is this node None
    # insert n2 to the right

# add a node with the value of 15
n3 = BSTNode(15)
# check if the value of n3 is less than or equal to the value of root
  # go left
  # check is this node None
    # insert the n1 to the left
  # otherwise
    # run the initial check on root.left
# otherwise
  # go right
  # check is this node None
    # insert n3 to the right



# add a node with a value of 16
n4 = BSTNode(16)
# check if the value of n4 is less than or equal to the value of root.left.right
  # go left
  # check is this node None
    # insert the n3 to the left
  # otherwise
    # run the initial check on root.left
# otherwise
  # go right
  # check is this node None
    # insert n4 to the right
  # otherwise
    # run the initial check of root.left.right



# print(root)

# print(root.left)
root.left = n1
# print(root.left)


# print(root.right)
root.right = n2
# print(root.right)


# print(root.left)

# print(root.left.right)
root.left.right = n3
# print(root.left.right)

# print(root.left)
# print(root.left.right)
# print(root.left.right.right)
root.left.right.right = n4



root.inorder_print()