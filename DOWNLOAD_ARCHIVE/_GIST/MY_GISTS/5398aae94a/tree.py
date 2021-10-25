class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

# initialization of a tree
rootNode = TreeNode(1)
leftNode = TreeNode(2)
rightNode = TreeNode(3)

rootNode.left = leftNode
rootNode.right = rightNode

# inorderTraversal of the tree (Left, Root, Right)
def inorderTraversal(root):
  result = []
  
  if not root:
      return self.result
  
  def df(node: TreeNode):
      if not node:
          return
      df(node.left)
      result.append(node.val)
      df(node.right)
  
  df(root)
  return result

# preorderTraversal of the tree (Root, Left, Right)
def preorderTraversal(root):
  result = []
  
  if not root:
      return result
  
  def df(node: TreeNode):
      if not node:
          return
      result.append(node.val)
      df(node.left)
      df(node.right)
  
  df(root)
  return result

# postorderTraversal of the tree (Left, Right, Root)
def postorderTraversal(root):
  result = []
  
  if not root:
      return result
  
  def df(node: TreeNode):
      if not node:
          return
      df(node.left)
      df(node.right)
      result.append(node.val)
  
  df(root)
  return result

print('inorder: ', inorderTraversal(rootNode))
print('preorder: ', preorderTraversal(rootNode))
print('postorder: ', postorderTraversal(rootNode))