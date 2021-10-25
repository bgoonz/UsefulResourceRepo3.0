# Arrays passed by reference
# In place accesses each element using an index to change what the input array is storing
# This causes the input array to also change (notice no return is needed)
def double_nums_in_place(a):
    for i in range(len(a)):
        a[i] = a[i] * 2

# Out of place creates a copy of the input array so the original array does not get modified
def double_nums_out_place(a):
    new_arr = []
    for i in range(len(a)):
        new_arr.append(a[i] * 2)
    return new_arr


# Immutable values get passed as copy, and do not change the values of variables outside the function
def add_two(a):
    a += 2
    return a


num = [ 1, 2, 3, 4]
num2 = num


add_two(num)

print(num)

















arr = [1,2,3,4]

arr2 = double_nums_out_place(arr)

# print(arr)
# print(arr2)

arr = [5, 4, 3, 8]
# Out of place sort
sorted_arr = sorted(arr)
# Original array did not change
print(arr)

# In place
arr.sort()
# Original array changed
print(arr)
