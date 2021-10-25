
class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None # Other LinkedListNode

head = LinkedListNode('A')
tail = head

def add_node_to_next(current_node, value):
    # Make the new node
    new_node = LinkedListNode(value)
    old_next = current_node.next
    # Link current node to new node
    current_node.next = new_node
    # New node, should link to whatever 
    # current_node was linked to before
    new_node.next = old_next
    return new_node

def add_node_to_head(current_head, value):
    new_head = LinkedListNode(value)
    new_head.next = current_head
    return new_head

def print_list(start_node):
    if not start_node:
        return
    print(start_node.value)
    # I want to print the next node, 
    # I wonder if I have a function for that...
    print_list(start_node.next)

def print_list_iter(start_node):
    curr_node = start_node
    while curr_node is not None:
        print(curr_node.value)
        curr_node = curr_node.next
    
def get_nth_node(start_node, n):
    curr_node = start_node
    current_num = 0
    while curr_node is not None:
        if current_num == n:
            return curr_node
        curr_node = curr_node.next
        current_num += 1


# tail = add_node_to_next(tail, 'B')
# tail = add_node_to_next(tail, 'C')
# add_node_to_next(head, 'E')
# head = add_node_to_head(head, 'D')

# fourth_node = get_nth_node(head, 3)
# print(fourth_node.value)

# add_node_to_next(fourth_node, 'Im between B and C')

# print_list(head)
