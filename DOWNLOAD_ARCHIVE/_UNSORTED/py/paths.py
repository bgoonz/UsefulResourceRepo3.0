class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value <= self.value:
            # the new value, must go left
            if self.left is None:
                # create a new node as a left child of current node
                self.left = BSTNode(value)
            else:
                self.left.insert(value)

        else:
            # the value must go right    
            if self.right is None:
                self.right = BSTNode(value)
            else:
                # let the right hand Node figure it out
                self.right.insert(value)
            

def dft_recursive(start_node):
    arr = []
    def dft_helper(root):
        arr.append(root.value) # DO THE WORK

        if root.left:
            dft_helper(root.left)

        if root.right:
            dft_helper(root.right)

    dft_helper(start_node) # Call the helper
    return arr


def find_paths_dft(start_node):
    paths_array = []
    def dft_helper(root, path):
        path.append(root.value)
        # When we are at a leaf, append the path we found to arr
        if root.left is None and root.right is None:
            paths_array.append(path)

        if root.left:
            dft_helper(root.left, path.copy())

        if root.right:
            dft_helper(root.right, path.copy())

    dft_helper(start_node, []) # Call the helper
    return paths_array


def find_paths_stack(start_node):
    paths_array = []
    # ------ DFT Iterative 
    stack = []
    stack.append((start_node, []))
    while len(stack) > 0:
        # pop the item off stack
        current_node, current_path = stack.pop()
        # DO SOME STUFF
        current_path.append(current_node.value)
        if current_node.left is None and current_node.right is None:
            paths_array.append(current_path)

        if current_node.left:
            stack.append((current_node.left, current_path.copy()))

        if current_node.right:
            stack.append((current_node.right, current_path.copy()))

    return paths_array


















root = BSTNode(8)
root.insert(5)
root.insert(4)
root.insert(7)
root.insert(12)
root.insert(11)
root.insert(13)

# print(find_paths_dft(root))
print(find_paths_stack(root))