# # Is an item in our array? return true or false


def linear_search(array, target):
    # Loop through our array
    for item in array:
        print("Try searching")
        if item == target:
            return True
    
    return False


def search_in_current_spot(array, target, current_spot):
    if current_spot >= len(array):
        return False

    if array[current_spot] == target:
        return True

    found = search_in_current_spot(array, target, current_spot + 1)
    return found


def iterative_binary_search(arr, target):
    # get the middle of the arr
    start = 0
    end = len(arr)
    while not end < start:
        middle_index = (start + end) // 2
        # compare the value in the middle, to target
        # If the value == target:
        if arr[middle_index] == target:
            print(counter) 
            return True
        # if the target is smaller:
        elif arr[middle_index] > target:
            # repeat over array from start to middle
            end = middle_index - 1
        # if the target is larger:
        else:
            # repeat over array from middle to end
            start = middle_index + 1
    return False

def binary_search(arr, target):
    if len(arr) == 0:
        return False
    # get the middle of the arr
    middle_index = len(arr) // 2
    # compare the value in the middle, to target
    # If the value == target:
    if arr[middle_index] == target:
        return True
    # if the target is smaller:
    is_found_in_right = False
    is_found_in_left = False
    if arr[middle_index] > target:
        # repeat over array from start to middle
        is_found_in_left = binary_search(arr[0: middle_index], target)
        
    # if the target is larger:
    if arr[middle_index] < target:
        is_found_in_right = binary_search(arr[middle_index + 1:], target)
    #     repeat over array from middle to end
    return is_found_in_left or is_found_in_right



our_array = list(range(11))
print(our_array)

print(binary_search(our_array, 3))





# print(linear_search(our_array, 10))
# print(linear_search(our_array, 100))