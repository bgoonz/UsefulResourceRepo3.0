import math
import time

primes = []

def isPrime(n):
  if n>1 and n%1==0:
    sqrt = int(math.ceil(math.sqrt(n)))
    if n%sqrt==0 and n!=sqrt: return False
    #this is where most of the magic happens
    for i in primes:
      if n%i==0: return False
      if i>sqrt:
        primes.append(n)
        return True
    #backfills prime numbers if you start
    #higher than 2
    if n>5:
      for i in range(2, n):
        isPrime(i)
      return isPrime(n)
    #this catches 2, 3, and 5
    primes.append(n)
    return True
  return False
  
#1,229 prime numbers in 10,000
#9,592 prime numbers in 100,000
#78,498 prime numbers in 1,000,000
#664,579 prime numbers in 10,000,000
total_start = time.time();
for j in range(1, 5):
  r = 1000*(10**j)
  print("Test #%s - Searching up to %s" % (j, "{:,}".format(r)))
  count = 0
  primes = []
  start_time = time.time()
  for i in range(0, r+1):
    if isPrime(i):
      count+=1
  end_time = time.time()
  t = (end_time - start_time)*1000
  s = "" if t > 1000 else "milli"
  t = t/1000 if t > 1000 else t
  print("Found %s prime numbers" % count)
  print("Time taken: %.2f %sseconds" % (t,s))
  print ""
total_end = time.time()
t = (total_end - total_start)*1000
s = "" if t > 1000 else "milli"
t = t/1000 if t > 1000 else t
#print primes
print("Done... total time: %.2f %sseconds" % (t,s))