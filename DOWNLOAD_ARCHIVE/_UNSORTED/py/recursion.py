
def print_hello_world_n_times(n):
    if n == 0:
        return
    print("Hello world")
    print_hello_world_n_times(n - 1)




print_hello_world_n_times(997)