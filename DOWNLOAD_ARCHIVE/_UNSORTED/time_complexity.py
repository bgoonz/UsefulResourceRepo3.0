# Constant time O(1)
def print_first(items):
    print(items[0])

# Linear time O(n)
def print_all_items(items):
    for item in items:
        print(item)

# Linear time O(2n)
def print_all_items_twice(items):
    for item in items:
        print(item)
        print(item)

# Quadratic O(n ^ 2)
# polynomial time O(n^2)
def print_pairs(items):
    for item1 in items:
        for item2 in items:
            print(item1, item2)

# Constant time loops
def constant_loop(items):
    for item in range(10):
        for item2 in range(10):
            print(item, item2)


def do_some_stuff(items):
    # print item
    print(items[0])

    print("Hello world")

    print(2 + 2)

    count = 0
    # print all items
    for item in items:
        print(item)
        count += 1

    # pairs
    for item1 in items:
        for item2 in items:
            print(item1, item2)
    
    return count




arr = ['a', 'b', 'c', 'd', 'e'] * 20

# print_all_items(arr)
print_pairs(arr)

