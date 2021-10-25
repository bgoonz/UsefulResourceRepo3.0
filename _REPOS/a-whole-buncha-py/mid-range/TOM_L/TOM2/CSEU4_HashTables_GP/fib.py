def fib(n):
    if n <= 1:
        return n

    return fib(n-1) + fib(n-2)

# http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibtable.html


print(fib(213)) # => 146178119651438213260386312206974243796773058