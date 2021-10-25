"""
You are given a binary tree. You need to write a function that can determin if
it is a valid binary search tree.
The rules for a valid binary search tree are:
- The node's left subtree only contains nodes with values less than the node's
value.
- The node's right subtree only contains nodes with values greater than the
node's value.
- Both the left and right subtrees must also be valid binary search trees.
Example 1:
Input:
    5
   / \
  3   7
Output: True
Example 2:
Input:
    10
   / \
  2   8
     / \
    6  12
Output: False
Explanation: The root node's value is 10 but its right child's value is 8.
"""

import math # to get the lower and upper bounds math.inf
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

    # Alilison's recursive solution
    # def is_valid_BST(self):
    #         # Your code here
    #         valid = True
    #         if self.left:
    #             valid = valid and self.left.value < self.value
    #             if not valid:
    #                 return False
    #             valid = valid and self.left.is_valid_BST()
    #         if self.right:
    #             valid = valid and self.right.value > self.value
    #             if not valid:
    #                 return False
    #             valid = valid and self.right.is_valid_BST()
    #         return valid

    def is_valid_BST(self, root):
        # set up a tuple with a stack and the lowest bounds
        stack, inorder = [], float(-math.inf)

        # while either the stack or the root exists
        while stack or root:
            # while the root exists
            while root:
                # traverse the left of the tree
                # append the root to the stack
                stack.append(root)
                # increment the root to the left
                root = root.left
            
            # set the root to what is at the top of the stack
            root = stack.pop()

            # if next element in inorder traversal is smaller than the previous one it is not a bst
            if root.value <= inorder:
                # return false
                return False
            
            # set the inorder to the roots value
            inorder = root.value
            # set the root to the roots right node
            root = root.right
        
        # return true
        return True

b1 = TreeNode(5)
b1.left = TreeNode(3)
b1.right = TreeNode(7)

b2 = TreeNode(10)
b2.left = TreeNode(2)
b2.right = TreeNode(8)
b2.right.left = TreeNode(6)
b2.right.right = TreeNode(12)

print(b1.is_valid_BST(b1)) # True
print(b2.is_valid_BST(b2)) # False