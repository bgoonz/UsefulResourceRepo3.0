"""
You are given a binary tree.

Write a function that can find the **maximum depth** of the binary tree. The
maximum depth can be defined as the number of nodes found along the longest
path from the root down to the furthest leaf node. Remember, a leaf node is a
node that has no children.

Example:

Given the following binary tree

    5
   / \
  12  32
     /  \
    8    4

your function should return the depth = 3.
"""
from binary_trees import BSTNode

def maxDepth(root_node):
    if not root_node:
        return 0

    # Its a leaf!
    if not root_node.left and not root_node.right:
        return 1
    
    left_depth = maxDepth(root_node.left)
    right_depth = maxDepth(root_node.right)

    # Lets compare left and right
    if left_depth >= right_depth:
        return left_depth + 1
    else:
        return right_depth + 1


root = BSTNode(5)
root.insert(4)
root.insert(32)
root.insert(27)
root.insert(50)
root.insert(3)
root.insert(1)


print(maxDepth(root))