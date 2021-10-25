class TreeNode:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None


t = TreeNode(20)
t.left = TreeNode(10)
t.right = TreeNode(30)
t.left.left = TreeNode(5)
t.left.right = TreeNode(15)
t.right.left = TreeNode(25)
t.right.right = TreeNode(40)

  #        (20)
  #   (10)      (30)
  # (5)  (15) (25) (40)

  q [ ]
  ret [20, 10, 30, 5, 15, 25, 40]
  node = None

  # queue
  # add the the node to the queue
  # while the queue is not empty
    # dequeue the current node
    # if the node is none then continue to the next iteration.
    # visit the node

    # visit the left
    # enqueue the node to the lett

    # visit the right
    # enqueue the node to the right

  # return the ret list

[20, 10, 30, 5, 15, 25, 40]