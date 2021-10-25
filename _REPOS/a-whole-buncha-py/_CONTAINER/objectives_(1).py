class LinkedListNode:
    def __init__(self, val):
        self.value = val
        self.next = None # Always stores another LinkedListNode
    

def insert_at_head(linked_list, new_value):
    # create a new linked list node
    new_node = LinkedListNode(new_value)
    new_node.next = linked_list
    return new_node

def insert_at_tail(linked_list_tail, new_value):
    new_node = LinkedListNode(new_value)
    linked_list_tail.next = new_node
    return new_node


def print_list(start_node):
    curr_node = start_node
    while curr_node is not None:
        # print the node value
        print(curr_node.value)
        # move on to the next node
        curr_node = curr_node.next

# def print_list_recursive(curr_node):
#     if curr_node:
#         print(curr_node.value)
#         print_list_recursive(curr_node.next)


# Init code for my linked list
head = LinkedListNode(6) # This is the head of our "linked list"
tail = head

# Every time we insert, we return a new node that is going to be our new HEAD value
head = insert_at_head(head, 5)
head = insert_at_head(head, 4)
head = insert_at_head(head, 3)
head = insert_at_head(head, 2)

# Every time we insert, we return a new node that is going to be our new TAIL value
tail = insert_at_tail(tail, 7)

# Print the list starting from the head
print_list(head)