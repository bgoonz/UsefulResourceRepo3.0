# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
"""
U

Output: a linked list with the integer put into it, in numerical order!
Input: a linked list, and an integer to put into the list
Constraints: solution must have O(n), linked list isn't empty, we have an integer
Edge cases: "one, none, some, and a lot"

3 things about LL:
- they hopscotch all over
- how to traverse it
- handle the head, the middle, and the tail


P

traverse the linked list
    while linked_list_node is not None:
        linked_list_node = linked_list_node.next

3 cases
- node should go in the middle
    When we find a value greater than the value we want to insert, stop there
    Use the previous value to insert the node
- node should go at the end
    We find a node with a .next that points to None
- node should go at the front
    if the very first value is greater than our integer to be inserted

should I turn the integer into a ListNode?


Review

check out deque if you want, basically a DLL (doubly linked list)

"""

# here l is the head of the linked list
def insertValueIntoSortedLinkedList(l, value):
      
    new_node = ListNode(value) # this is just magically present in our workspace, but you would have to build this yourself or import it in real life/editor
    
    # check if we insert at the HEAD (or if the linked list if null)
    if l == None or l.value > new_node.value:
        new_node.next = l
        return new_node
        
    # if not, let's start walking
    previous_node = l
    current_node = l.next
    
    # here's our MIDDLE
    while current_node is not None: # here we go traversing...
        # check this node's value, if bigger, then insert before this node
        if current_node.value > new_node.value:
            previous_node.next = new_node
            new_node.next = current_node
            
            return l
            
        # if the current node ISN'T bigger than our new node, then keep traversing
        previous_node = current_node
        current_node = current_node.next
        
    # if we got here, we're at the TAIL of the list
    # so add the new node to the tail
    previous_node.next = new_node
    
    return l