# def function(n):
#   while n > 0:
#     print("hello")
#     n -= 1

# # function(10)


# def rec_function(n):
#   if n <= 0:
#     return
  
#   print("hello")

#   rec_function(n - 1)
#   rec_function(n - 2)
#   rec_function(n - 3)

# rec_function(10)
my_arr = [12, 23, 53, 1, 2, 100, 200]
my_arr.sort()

def linear_search(arr, target): # O(n)
  for i in range(len(arr)):
    if arr[i] == target:
      return i
  
  return -1

def r_linear_search(arr, target, i=0): # O(n)
  if len(arr) > 0:
    if arr[0] == target:
      return i

    result = r_linear_search(arr[1:], target, (i + 1))

    if result != -1:
      return result

  return -1


print(linear_search(my_arr, 100))
print(r_linear_search(my_arr, 100))

# [12, 23, 53, 1, 2, 100, 200]
# [23, 53, 1, 2, 100, 200]
# [53, 1, 2, 100, 200]


def binary_search(arr, target): # O(log(n))
  min = 0
  max = len(arr) - 1


  while max >= min:
    middle = (min + max) // 2

    if arr[middle] == target:
      return middle

    elif arr[middle] < target:
      min = middle + 1
    
    else:
      max = middle - 1

  return - 1

print(binary_search(my_arr, 100))

def r_binary_search(arr, target, min=0, max=None): # O(log(n))
  if max == None:
    max = len(arr) - 1

  if max >= min:
    middle = (min + max) // 2

    if arr[middle] == target:
      return middle

    elif arr[middle] < target:
      return r_binary_search(arr, target, middle + 1, max)
    
    else:
      return r_binary_search(arr, target, min, middle - 1)

  else:
    return - 1

print(r_binary_search(my_arr, 100))