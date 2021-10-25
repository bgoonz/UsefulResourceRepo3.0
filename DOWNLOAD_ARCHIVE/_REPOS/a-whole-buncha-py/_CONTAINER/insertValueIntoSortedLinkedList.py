# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def insertValueIntoSortedLinkedList(l, value):
    new_node = ListNode(value)
    # if list is empty
    if l is None:
        return new_node    
    
    # If value needs to go to front
    if l.value >= value:
        # Add to head
        new_node.next = l
        return new_node

    # Add the new node in
    curr_node = l
    while curr_node.next is not None:
        # find the node to insert our number after
        if curr_node.next.value >= value:
            # This is where we insert
            new_node.next = curr_node.next
            curr_node.next = new_node
            return l
        curr_node = curr_node.next
    
    # If we reached here, we need to add number to tail
    curr_node.next = new_node
    
    return l
