# Make a node class
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def add(self, value):
        self.next = Node(value)
    
    def find_middle(self):
        middle = self
        end = self

        while end != None:
            end = end.next
            if end:
                end = end.next
                middle = middle.next
            

        print(f"Middle: {middle.value}")


root = Node(4)

cur = root

cur.add(9)

cur = cur.next

cur.add(4)

cur = cur.next
# root = Node([1, 2, 4, 3, 23])
# cur = root
# cur.add({"name": "Tom"})
# cur = cur.next
# cur.add(9)
# cur = cur.next
# cur.add("bob")
# cur = cur.next
# cur.add(12)
# cur = cur.next
# cur.add("Bob")
# cur = cur.next
# cur.add(None)
# cur = cur.next
# cur.add(34)
# cur = cur.next

root.find_middle()






# # tests

root = Node(3)
cur = root
cur.add(4)
cur = cur.next
cur.add(5)
cur = cur.next
cur.add(6)
cur = cur.next

root.find_middle()