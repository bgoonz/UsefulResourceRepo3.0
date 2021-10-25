def make_change(amount, denominations):
    ways_of_making_n_cents = [0 for i in range(amount + 1)]
    ways_of_making_n_cents[0] = 1

    for coin in denominations:
        for higher_amount in range(coin, amount + 1):
            remainder = higher_amount - coin
            ways_of_making_n_cents[higher_amount] += ways_of_making_n_cents[remainder]

    return ways_of_making_n_cents[amount]
