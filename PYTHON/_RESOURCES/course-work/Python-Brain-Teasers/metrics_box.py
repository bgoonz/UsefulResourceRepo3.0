from functools import wraps


def metrics(fn):
    ncalls = [0]
    name = fn.__name__

    @wraps(fn)
    def wrapper(*args, **kw):
        ncalls[0] += 1
        print(f"{name} called {ncalls[0]} times")

    return wrapper


@metrics
def inc(n):
    return n + 1


inc(3)
