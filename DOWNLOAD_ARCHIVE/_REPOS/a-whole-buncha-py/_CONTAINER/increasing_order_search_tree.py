# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dft(self, root):
        # we can either implement this recursively 
        # or iteratively 
        output = []
        # DFT is facilitated via LIFO ordering 
        # so we'll use a stack 
        stack = []
        # add the root to our stack 
        stack.append(root)
        # iterate so long as the stack is not empty
        while len(stack) > 0:
            current = stack.pop()
            # add the children of current to our stack 
            if current.left:
                stack.append(current.left)
            if current.right:
                stack.append(current.right)
            # add the current node's value to output 
            output.append(current.val)
        return output
    
    def increasingBST(self, root: TreeNode) -> TreeNode:
        # how do we take the input tree and turn it 
        # into this array? 
        # We can perform a DFT (traverses the entire tree
        # in depth-first fashion)
        # We can perform a BFT (traverses the entire tree
        # in breadth-first fashion)
        
        # Performing a "typical" DFT won't get us the 
        # tree values in sorted order 
        # [5, 3, 2, 1, 4, 6, 8, 6, 7, 9]
        
        tree_values = self.dft(root)
        
        # sort the array 
        tree_values.sort()
        
        # [1,2,3,4,5,6,7,8,9]
        
        # take the first value in the array and initialize
        # our Tree with it 
        new_root = TreeNode(tree_values[0])
        current = new_root
        
        # iterate through this array
        # for the current value, wrap it in a TreeNode
        for v in tree_values[1:]:
            # set the next value in the array as the
            # right child 
            current.right = TreeNode(v)
            # update our current variable to the node
            # we just added 
            current = current.right
            
        # at this point, all of the values in `tree_values`
        # should have been added to our new tree 
        # return the root of the new tree
		return new_root
		