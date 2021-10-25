# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        
        cache={}
        
        def getHeight(n):
            if n == None:
                return 0
            
            if n not in cache:
                cache[n] = 1 + max(getHeight(n.left), getHeight(n.right))
                        
            return cache[n]
        
        if root is None:
            return True

        l_height = getHeight(root.left)
        r_height = getHeight(root.right)
        return abs(l_height - r_height) <= 1 and self.isBalanced(root.left) and self.isBalanced(root.right)