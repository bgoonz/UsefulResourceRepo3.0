
"""
*** Remove K from list
----------------------
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
"""

# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
# Alt Soln:


# def removeKFromList(l, k):
#     if l is None:
#         return []
#     current = l
#     prev = None
#     while current is not None:
#         if current.value == k:
#             # if the head has the current value just put the value of
#             # next into it and remove next
#             if prev is None:
#                 l = current.next
#                 current = l
#             else:
#                 prev.next = current.next
#                 current = current.next
#         else:
#             prev = current
#             current = current.next
#     return l

# Best Soln:
l1 = [3, 1, 2, 3, 4, 5]
k1 = 3
class ListNode(object):
  def __init__(self, x):
    self.value = x
    self.next = None

def removeKFromList(l, k):
  c = l
  while c:
      if c.next and c.next.value == k:
          c.next = c.next.next
      else:
          c = c.next
  return l.next if l and l.value == k else l


print('def removeKFromList(l1, k1):',removeKFromList(l1, k1))
