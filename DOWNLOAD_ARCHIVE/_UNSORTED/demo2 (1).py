"""
Demonstration #2
Given a non-empty array of integers `nums`, every element appears twice except except for one. Write a function that finds the element that only appears once.
Examples:
- single_number([3,3,2]) -> 2
- single_number([5,2,3,2,3]) -> 5
- single_number([10]) -> 10
"""
# def single_number(nums):
#   d = []
#   for num in nums:
#     if num not in d:
#       d.append(num)
#     else:
#       d.remove(num)
  
#   return d.pop()

def single_number(nums):
  d = {}
  for num in nums:
    d[num] = 0
  
  for i in nums:
    d[i] += 1

  for k, v in d.items():
    if v == 1:
      return k

# tests
print(single_number([3,3,2])) # 2
print(single_number([5,2,3,2,3])) # 5
print(single_number([10])) # 10