# Binary Search Tree
# ------------------

#class ListNode:   # for analogy
#    def __init__(self, val):
#        self.value = val
#        self.next = None


class TreeNode:
    def __init__(self, val):
        self.value = val
        self.left = None
        self.right = None

def search(root, value):
    cur = root

    while cur is not None:
        # compare to see if we found it
        if cur.value == value:
            return True  # True, we found it

        # if not, go to the proper next node to search
        if value < cur.value:
            cur = cur.left
        else: # value > cur.value
            cur = cur.right

    # If we make it here, we didn't find it
    return False

def search_recur(cur, value):
    if cur is None:
        return False

    if cur.value == value:
        return True   # Found it!

    if value < cur.value:
        return search_recur(cur.left, value)

    else:
        return search_recur(cur.right, value)

def pre_order(cur):
    if cur is None:
        return

    print(cur.value)
    pre_order(cur.left)  # Go left as far as we can
    pre_order(cur.right)

def in_order(cur):
    if cur is None:
        return

    in_order(cur.left)  # Go left as far as we can
    print(cur.value)
    in_order(cur.right)

def in_order_to_list(cur, lst):
    if cur is None:
        return

    in_order_to_list(cur.left, lst)  # Go left as far as we can
    #print(cur.value)
    lst.append(cur.value)
    in_order_to_list(cur.right, lst)

def max_depth(root):
    if root is None:
        return 0

    left_depth = max_depth(root.left)
    right_depth = max_depth(root.right)

    return max(left_depth, right_depth) + 1

# Hackishly build the tree
# In CodeSignal, they will have done this for you
root = TreeNode(3)
root.left = TreeNode(1)
root.left.right = TreeNode(2)
root.right = TreeNode(4)
root.right.right = TreeNode(5)
root.right.right.right = TreeNode(6)

print(max_depth(root))

in_order(root)

#l = []
#in_order_to_list(root, l)
#print(l)

print(search(root, 2))
print(search(root, 5))
print(search(root, 99))

print(search_recur(root, 2))
print(search_recur(root, 5))
print(search_recur(root, 99))
