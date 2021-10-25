class ListNode(object):
  def __init__(self, x):
    self.value = x
    self.next = None



def revNodesInK(l, k):
    # if there is no list

    # if k is equal to 1

    # if either of those cases are true then we can just return the list
    if l == None or k == 1:
        return l

    # make a new list node and call it list_head
    list_head = ListNode(0)
    # join the actual list (l) to the end of my list_head
    list_head.next = l

    # set my starting_node to be a reference to list_head
    starting_node = list_head

    # set a counter variable to zero to keep count of the number of iterations
    node_counter = 0

    # iterate over the original list
    while l:
        # increment my counter variable
        node_counter += 1

        # check if i am within bounds us modulus
        if node_counter % k == 0:

            # set my starting node to equal the return from a call to my helper function
            starting_node = helper_func(starting_node, l.next)
            # change the head of my old list to the starting nodes next node
            l = starting_node.next
        # otherwise if we have not reached our kth position
        else:
            # traverse forward by one in my original list
            l = l.next

    # return list_head.next
    return list_head.next



def helper_func(start_ref, end_ref):
    ## helper function to take in a starting node and an ending node
    # S  L    *
    # 0->3->2->1->6->5->4->7->8->None

    # make some sort of pointer to the end node to be our rev / previous node (3)
    previous_node = end_ref
    # set up a pointer to my new starting node set this to the starting nodes next (2)
    new_head = start_ref.next

    # set a current_node to the starting nodes next (2)
    current_node = start_ref.next

    # iterate over the sublist until my current node is the same as my end node
    while current_node != end_ref:
        # set a temporary pointer to our current nodes next (3)
        temp_ref = current_node.next
        # set my current nodes next to point to my previous node
        current_node.next = previous_node
        # set my previous node to my current node
        previous_node = current_node
        # set my current node to be my temporary pointer
        current_node = temp_ref

    # set our starting nodes next to our previous node
    start_ref.next = previous_node

    # return the new head
    return new_head

n0 = ListNode(1)
n0.next = ListNode(2)
n0.next.next = ListNode(3)
n0.next.next.next = ListNode(4)
n0.next.next.next.next = ListNode(5)

kk = 2

n1 = revNodesInK(n0, kk)

print(n1.value)
# k = 3
# lst1 = [1, 2, 3, 4, 5, 6, 7, 8]
# for i in range(k):
#     swp(lst1[i], lst1[i + 1], lst1[i + 2])



# def swp(a, b, c):
#     temp = a
#     a = b
#     b = c
#     c = temp


# lst2 = [2, 4, 5, 7, 8, 45, 56, 34, 56]
# lst2 = [2, 4, 5, 7]
# lst2 = [8, 45, 56, 34]

# k = 4
# counter = 0
# while (True):
#     counter += 1
#     if counter % k = 0:
#         # do something
#         starting_position = swp(counter - 1, counter, counter + 1)









