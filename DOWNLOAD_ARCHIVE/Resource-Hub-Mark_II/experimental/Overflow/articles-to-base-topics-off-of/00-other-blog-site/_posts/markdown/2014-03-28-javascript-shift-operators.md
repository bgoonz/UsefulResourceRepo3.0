<!--


---
 "JavaScript : shift operators"
date: 2014-03-28 00:00:00 IST
updated: 2014-03-28 00:00:00 IST
categories: javascript
---

-->
<!DOCTYPE html>
<html>

<head>
  <title>basic-git-workflow</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script>
</head>

<body>

Shift operators were always confusing for me. So I thought of revising old lessons like converting numbers to binary, shift operators, etc.. once again.

# Converting integer to binary

These are one of the first lessons which I learned when I started learning computing. Even though computers use 32/64 bits for a integer, for ease I am using only 8 bits.

So in 8 bits, we can represent integers from `0`(`00000000`) to `255`(`11111111`) if they are unsigned. When it comes to signed integers its bit confusing, In 8 bits, we can represent `-128`(`11111111`) to `+127`(`01111111`) signed integers.ie., if the 8th bit is `1` its a negative number. In another way, `0-127` are positive and `128-255` are negative.

# So how to convert a negative number into binary?

Lets our number be `-10`, so the esiest way to find the binary

```
256 + (-10)
256 - 10 = 246
```

Converting `246` to binary, gives you `11110110`. which is equalent binary for `-10`.

Another way to find the binary of negative numbers is,

- Take the binary of postitive number
- Find [1's compliment](https://en.wikipedia.org/wiki/1%27s_complement) (inverting all 0's to 1's and 1's to 0's )
- Add 1 to it.

To find `-10`'s binary, first we find binary of `10`, which is `00001010`.

```
10 converted to 00001010
1's compliment of 00001010 is 11110101
Add 1 to it : 11110101 + 1 = 11110110
```

So here I am gonna address 3 shift operators which revised recently, which are

- `>>` (Signed right shift)
- `<<` (Signed left shift)
- `>>>` (Unsigned right shift)

<br/>
# `>>` (Signed right shift)
On `10 >> 1`, here 10 is converted to binary as `00001010` and shit the bits 1 position to the right. Which results `00000101` equalant of 5 in decimal.

On `-10 >> 1`, -10 is converted to binary as `11110110` and when shifts to 1 position to right it becomes `11111011` which is equalant to -5.

# `<<` (Signed left shift)

On `10 << 1`, here the difference is, it shift the bits 1 posision to its left. which results `00010100` equalant of 20 in decimal. On `-10`, in the same way after shift it become `11101100` equalant to -20

# `>>>` (Unsigned right shift)

On `10 >>> 1`, here the processing of positive integers are same the `>>` (right shift) but bit different for the negative numbers.

On `-10 >>> 1`, the binary equalant of `-10` is `11110110`. now shift 1 postition to right, adding zero's on left. which results `01111011` converting this to decimal (discarding sign) will result `123`.
