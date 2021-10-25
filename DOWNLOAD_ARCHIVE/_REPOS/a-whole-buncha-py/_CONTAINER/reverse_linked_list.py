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
class LinkedListNode():
    def __init__(self, value):
        self.value = value
        self.next  = None

def reverse(head_of_list):
    '''
    Input: head of the linked list we want to reverse 
    Output: the head of the reversed linked list 

    We need to traverse the linked list and flip all their next arrows
    What do we need to keep track of in order to flip each arrow? 

    We need to keep track of three things: the current node, the next node, 
    and a reference to the previous node 

    Traverse through our linked list 
        set current's next to refer to prev
        update our references to each point to their respective next nodes 

    At the end, we need to return the new head 
    '''
    # init our three pointers 
    current = head_of_list
    prev = None 

    # traverse so long as current is referring to a Node 
    while current is not None:
        next = current.next
        # flip current's arrow around 
        current.next = prev

        # update our three pointers 
        prev = current 
        current = next 
    
    # the `prev` pointer is now referring to the new head 
    return prev 

# initialize a few LinkedListNodes
x = LinkedListNode('X')
y = LinkedListNode('Y')
z = LinkedListNode('Z')

# connect the LinkedListNodes together 
x.next = y
y.next = z

# define a function that prints every node 
# in the linked list starting with the input node 
def print_ll(node):
    # init a new reference that will keep track 
    # of where we are in the traversal 
    current = node 
    # traverse the linked list until 
    # we get to the end 
    while current is not None:
        # print the value of each node along the way 
        print(current.value)
        # update current to refer to the next node
        # in the linked list 
        current = current.next

print_ll(x)
print('====')
new_head = reverse(x)
print_ll(new_head)
