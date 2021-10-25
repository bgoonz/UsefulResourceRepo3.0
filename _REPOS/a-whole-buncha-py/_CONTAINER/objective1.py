# Changing an immutable variable value causes a new item in memory to be created
# This is why ID is different after you set num to 200
num = 1
print(id(num))
num = 200
print(id(num))

# num2 = num
# # print(num2 is num)
# num2 = 2
# print(num)
# # print(num2)
# # print(num2 is num)

#Strings are also immutable
string1 = 'Hello World'
string2 = string1

print(string2 is string1)
string2 = 'Something else'

print(string1)

# Mutable variables are Arrays, Objects, Class instances (basically any "complex data type")
# when two variables are pointing to the same array, both variables can change the same array in memory

arr = [1, 2, 3]
arr2 = arr
print(id(arr)  == id(arr2)) # true
arr2.append(4)
# Arr now has number 4 in it, even though arr2 was the variable that called the change
# because Arr and Arr2 point to the same object
print(arr)

# If I change what arr2 is pointing to, arr is now no longer the same as arr2
arr2 = [1,2,3,4,5]

# The IDS are different
print(id(arr)  == id(arr2)) # false


# my_dict = {'hello': 'world'}
# my_dict2 = my_dict

# my_dict2['new_key'] = 'new value'

# print(my_dict)