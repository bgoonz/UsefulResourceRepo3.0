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
# from objectives import add_to_head, add_to_tail, add_to_next, print_list

from linked_list import insert_at_tail, print_list

class LinkedListNode():
    def __init__(self, value):
        self.value = value
        self.next  = None

def reverse(head_of_list):
    # If list is just one node, return it
    if head_of_list.next is None:
        return head_of_list

    prev_node = None
    curr_node = head_of_list
    next_node = head_of_list.next

    while curr_node is not None:
        # point current_node to previous node
        curr_node.next = prev_node
        # update previous_node pointer to current_node
        prev_node = curr_node
        # update the current_node pointer to next_node
        curr_node = next_node
        # update the next_node pointer to next of next_node
        if next_node is not None:
            next_node = next_node.next

    return prev_node

head = LinkedListNode(0)
tail = head
# Adding a node at the end
tail = insert_at_tail(tail, 1)
tail = insert_at_tail(tail, 2)
tail = insert_at_tail(tail, 3)

print_list(head)

head = reverse(head)
print('-----')
print_list(head)