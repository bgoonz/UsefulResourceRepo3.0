from time import time
from singly_linked_list import LinkedList

n = 10000

l = [i for i in range(0, n)]
ll = LinkedList()

for i in range(0, n):
    ll.add_to_tail(i)


start = time()
for i in range(0, n):
    ll.remove_head()
end = time()

print(f'Linked List remove from head runtime: {end - start} seconds')

start = time()
for i in range(0, n):
    l.pop(0)
end = time()

print(f'List pop from front runtime: {end - start} seconds')
