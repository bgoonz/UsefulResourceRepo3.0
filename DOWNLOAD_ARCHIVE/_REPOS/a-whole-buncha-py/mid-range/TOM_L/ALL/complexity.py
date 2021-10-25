def timeof(n):
    if n == 1:
        return
    i = 0
    while i <= n: # O(n) * O(1) + 1
        # inner loop will break out after first itteration O(1)
        for _ in range(n):
            print('*')
            break
        i += 1


timeof(10)