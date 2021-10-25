"""
You are given a binary tree.
Write a function that can return the inorder traversal of node values.
Example:
Input:
   3
    \
     1
    /
   5
Output: [3,5,1]

DFT.
Resulting Path [] to return
we could approach this recursively, or itteratively.

"""
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

n1 = TreeNode(3)
n1.right = TreeNode(1)
n1.right.left = TreeNode(5)

def inorder_traversal(root):
    # Your code here
    def helper(root, result):
      if root:
        helper(root.left, result)
        result.append(root.val)
        helper(root.right, result)
    
    result = []
    helper(root, result)
    return result

def inorder_traversal_i(root):
  result = []
  stack = []
  while True:
    while root:
      stack.append(root)
      root = root.left
    if not stack:
      return result
    current = stack.pop(0)
    result.append(current.val)
    root = current.right


r = inorder_traversal(n1)
print(r)
x = inorder_traversal_i(n1)
print(x)