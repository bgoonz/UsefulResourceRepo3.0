a = ["1", "2", "3", "4"]

# Approach 1
# append a comma after every element except the last one
r = ""

for i, s in enumerate(a):
    r += s

    if i != len(a) - 1:   # if not the last one
        r += ', '


# Approach 2
# append a comma before every element except the first one
r = ""
first_pass = True

for s in a:
    if first_pass:  # if it's the first one
        r += s
        first_pass = False
    else:
        r += ', ' + s  # it's a subsequent value


# Approach 3
# Start with the first element, and then append comma+element
# for all remaining elements

if len(a) == 0:
    r = ""
else:
    r = a[0]

    for s in a[1:]:
        r += ", " + s

# Approach 4
# Use built-in join :)
r = ", ".join(a)

print(r)

