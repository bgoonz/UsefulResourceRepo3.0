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

def post_order_traversal(root):
    if root.left:
        post_order_traversal(root.left)
    if root.right:
        post_order_traversal(root.right)
    print(root.value)

def in_order_traversal(root):
    if root.left:
        in_order_traversal(root.left)

    print(root.value)

    if root.right:
        in_order_traversal(root.right)

def pre_order_traversal(root):
    print(root.value)
    if root.left:
        pre_order_traversal(root.left)
    if root.right:
        pre_order_traversal(root.right)

def DFT(root):
    stack = []
    stack.append(root)
    while len(stack) > 0:
        # Process items on stack
        curr_node = stack.pop()

        print(curr_node.value)

        # add our nodes to the stack
        if curr_node.right:
            stack.append(curr_node.right)
        
        if curr_node.left:
            stack.append(curr_node.left)

def BFT(root):
    queue = []
    queue.append(root)
    while len(queue) > 0:
        # Process items on stack
        curr_node = queue.pop(0)

        print(curr_node.value)

        # add our nodes to the stack
        if curr_node.left:
            queue.append(curr_node.left)

        if curr_node.right:
            queue.append(curr_node.right)
        
def search_in_tree(root, target):
    queue = []
    queue.append(root)
    while len(queue) > 0:
        # Process items on stack
        curr_node = queue.pop(0)

        # Do my own thing
        if curr_node.value == target:
            return True

        # add our nodes to the stack
        if curr_node.left:
            queue.append(curr_node.left)

        if curr_node.right:
            queue.append(curr_node.right)

    return False

def search_recursive(root, target):
    if root.value == target:
        return True
    if root.left is None and root.right is None:
        return False
    
    found_left = False
    found_right = False
    if root.left:
        found_left = search_in_tree(root.left, target)
    if root.right:
        found_right = search_in_tree(root.right, target)
    
    return found_left or found_right



root = BSTNode(8)
root.insert(5)
root.insert(4)
root.insert(7)
root.insert(12)
root.insert(11)
root.insert(13)

print(search_in_tree(root, 11))
print(search_in_tree(root, 15))

print(search_recursive(root, 11))
print(search_recursive(root, 15))


# DFT(root)
# BFT(root)

#print_tree(root)
