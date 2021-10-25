# Runtime of a iterative function
def some_func(n): # O(n)
    if n == 1:
        return
    i = 0
    while i <= n: # O(n) * O(1) + 1 (O(1) * O(n)) => O(n) + 1 => O(n)
        # O(1)
        for _ in range(n):
            print("*")
            break
        i += 1
    
some_func(10) # => O(n) output n + 1 asterisk
