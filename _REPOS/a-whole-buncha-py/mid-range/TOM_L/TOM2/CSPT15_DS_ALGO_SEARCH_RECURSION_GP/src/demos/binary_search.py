# binary search
def binary_search(lst, target):
    #  set a min to 0
    min = 0
    # set max to length of list minus 1
    max = len(lst) - 1

    # iterate over the data while `min` is still less than `max`
    while min < max:
        # figure out what guess we want to make (get the middle index) do a floor division of max and normalize it
        # to normalize (max - min)
        # to floor divide use //
        # (max + min) // 2
        guess = (max + min) // 2

        # if the list at index of our guess equals the target
        if lst[guess] == target:
            # return the index of the list (guess)
            return guess

        # otherwise check if the guess was too low if so then reset min to one more than guess
        elif lst[guess] < target:
            # our min set to guess plus one
            min = guess + 1
        
        # otherwise our guess was too high, reset the max to one less than the guess
        else:
            # set max to our guess minus 1
            max = guess - 1

    # no match was found
    # return minus one
    return -1

