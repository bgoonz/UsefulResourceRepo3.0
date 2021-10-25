"""
This binary_search function is utilized by the 
insertion_sort function
"""
def binary_search(the_array, item, start, end):
  if start == end:
    if the_array[start] > item:
      return start
    else:
      return start + 1
  if start > end:
    return start

  mid = (start + end) // 2
  if the_array[mid] < item:
    return binary_search(the_array, item, mid + 1, end)
  elif the_array[mid] > item:
    return binary_search(the_array, item, start, mid - 1)
  else:
    return mid


"""
Insertion sort that timsort uses if the array size is small or if
the size of the "run" is small
"""
def insertion_sort(the_array):
  l = len(the_array)
  for i in range(1, l):
    value = the_array[i]
    pos = binary_search(the_array, value, 0, i - 1)
    the_array = the_array[:pos] + [value] + the_array[pos:i] + the_array[i+1:]
  return the_array
  

"""
The merge function is used to merge sorted runs together into 
a single sorted list
"""
def merge(left, right):
  if not left:
    return right
  if not right:
    return left
  if left[0] < right[0]:
    return [left[0]] + merge(left[1:], right)
  return [right[0]] + merge(left, right[1:])


def timsort(the_array):
  # Split into natural runs
  l = len(the_array)
  
  if l < 64:
    return insertion_sort(the_array)
    
  runs = []
  new_run = [the_array[0]]
  
  for i in range(1, l):
    if i == l - 1:
      new_run.append(the_array[i])
      runs.append(new_run)
      break
    if the_array[i] < the_array[i -1]:
      runs.append(new_run)
      new_run = [the_array[i]]
    else:
      new_run.append(the_array[i])
  
  # Sort each run using insertion_sort
  sorted_runs = []
  for run in runs:
    sorted_runs.append(insertion_sort(run))
  
  # Merge each run together into a single list
  sorted_list = []
  for run in sorted_runs:
    sorted_list = merge(sorted_list, run)
  
  return sorted_list