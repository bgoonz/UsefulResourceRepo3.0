# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# DFT In Order

# define some helper function that we will use inside our traversal code
def inorder_helper(root, res):
    if root is None:
        return
    inorder_helper(root.left, res)
    # in order
    res.append(root.val)
    inorder_helper(root.right, res)


def inorder_traversal(root):
    # store our result
    result = []
    # pass in our root and result to the helper function
    inorder_helper(root, result)
    # after all of the calls to our helper are finished we can return our result!
    return result

# DFT Pre Order

# define a helper function for a pre order traversal

def preorder_helper(root, res):
    if root is None:
        return
    # pre order
    res.append(root.val)
    inorder_helper(root.left, res)
    inorder_helper(root.right, res)

def preorder_traversal(root):
    # store our result
    result = []
    # pass in our root and result to the helper function
    preorder_helper(root, result)
    # after all of the calls to our helper are finished we can return our result!
    return result

# DFT Post Order

# define a helper function for a post order traversal

def postorder_helper(root, res):
    if root is None:
        return
    inorder_helper(root.left, res)
    inorder_helper(root.right, res)
    # post order
    res.append(root.val)

def postorder_traversal(root):
    # store our result
    result = []
    # pass in our root and result to the helper function
    preorder_helper(root, result)
    # after all of the calls to our helper are finished we can return our result!
    return result

# BFT (Level Order) the only real difference between the concept of DFT and BFT is a conceptual data structure difference

def breadth_first_traversal(root):
    if root is None:
        return []

    result = []
    queue = []
    queue.append(root)

    while len(queue) != 0:
        node = queue.pop(0)
        result.append(node.val)

        if node.left is not None:
            queue.append(node.left)

        if node.right is not None:
            queue.append(node.right)

    return result


def depth_first_traversal(root):
    if root is None:
        return []

    result = []
    stack = []
    stack.append(root)

    while len(stack) != 0:
        node = stack.pop()

        result.append(node.val)
        if node.left is not None:
            stack.append(node.left)

        if node.right is not None:
            stack.append(node.right)

    return result
