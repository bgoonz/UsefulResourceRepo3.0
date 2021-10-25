"""
Given a reference to the head node of a singly-linked list, write a function
that reverses the linked list in place. The function should return the new head
of the reversed list.

In order to do this in O(1) space (in-place), you cannot make a new list, you
need to use the existing nodes.

In order to do this in O(n) time, you should only have to traverse the list
once.

*Note: If you get stuck, try drawing a picture of a small linked list and
running your function by hand. Does it actually work? Also, don't forget to
consider edge cases (like a list with only 1 or 0 elements).*
"""
class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None # Other LinkedListNode

from objectives import add_node_to_next, print_list


def reverse(head_of_list):
    if not head_of_list or head_of_list.next is None:
        return head_of_list
    
    curr_node = head_of_list
    prev_node = None
    next_node = None
    while curr_node:
        next_node = curr_node.next
        # Have current node point backwards
        curr_node.next = prev_node

        # move the curr_node along
        prev_node = curr_node
        curr_node = next_node
    
    return prev_node


head = LinkedListNode(1)
tail = head

tail = add_node_to_next(tail, 2)
tail = add_node_to_next(tail, 3)
tail = add_node_to_next(tail, 4)
tail = add_node_to_next(tail, 5)

print_list(head)
print('------')
reversed_head = reverse(head)
print_list(reversed_head)