def make_change(amount, denominations, index=0):
    # base cases
    if amount == 0:
        return 1

    if amount < 0:
        return 0
	
    # otherwise,
    if index == len(denominations):
        return 0
    # choose a coin
    coin = denominations[index]
    # see how many possibilities we can get for each number of times to use coin
    num_possibilities = 0

    while amount >= 0:
        num_possibilities += make_change(amount, denominations, index + 1)
        amount -= coin

    return num_possibilities
