"""
Problem
-------
print out the area of a circle to 3 decimal places in feet squared

print out the output of...
- how do we find the area of a circle
-- PI R^2 > PI * (R^2) > PI * R * R
- how do we format a number to 3 decimal places

"""
# first pass attempt
# how do we find the area of a circle?
# lets just get the area and print it then work from there
# import math module to use math.pi
import math
# set a radius variable (r)
r = 3
# set an area of a circle by using pi * r * r (math.pi * r * r)
area = math.pi * r * r
# print the area variable
print(f" {area:.3f} ft\u00b2")