<!--


---
 "Haskell : Clock angle problem"
excerpt: "Haskell : Clock angle problem"
date: 2015-01-01 00:00:00 IST
updated: 2015-01-01 00:00:00 IST
categories: haskell
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

Last week, I stumble upon the **clock angle problem, find the angle between the hour hand and minute hand**. I find it bit interesting and thought to give a try, but I didn't have any idea where to start. so I googled and went to its [wiki page](https://en.wikipedia.org/wiki/Clock_angle_problem). There it have really good explanation on how to solve it with all the equations.

I am writing this post as my own reference and if you want a better explantion you can goto [wikipedia : Clock angle problem](https://en.wikipedia.org/wiki/Clock_angle_problem) page.

For this problem the input will be the time accepted in 12 hours clock.

## Rate of change

The first step towards solving this is finding the rate at which the angle of both hour hand and minute hand change in a minute.

Let take the **Hour hand** first and find its rate of change. An hour hand turns **360 degree** in 12 hours, which means 360 degree in 720 minutes. This will give its rate of change as **0.5 degree** in 1 minute.

```
360 degree in 12 hours
360 in 12*60 = 720 minutes
rate of change = 360/720 = 0.5 degree
```

In case of **minute hand** it turns 360 degree in 60 minutes, thus it's rate of change will be **6 degree** per minute.

```
360 in 60 minutes
rate of change = 360/60 = 6 degree
```

## Angle between hands and 12 O'Clock

After finding the rate of change now we can find the angle between hour hand and 12 O'Clock and similarly angle between minute hand and 12 O'Clock at the given time. The difference of these two result in our answer for angle between hour and minute hand.

Since we already know the rate of change hour hand per minute, the angle between 12 O'Clock and hour hand will be the `0.5 * time converted to minutes`. For example let say the given time is **5:20**,

```
hourHandAngle = 0.5 * (60H + M)
// H - Hour in given time
// M - Minute in given time

hourHandAngle = 0.5 * (60 * 5 + 20)
              = 0.5 * (320)
              = 160 degree
```

The angle between 12 O'Clock and minute hand will be 6 times minutes, ie., `6 * Minutes`

```
minHandAngle = 6M // M - Minutes in given time

minHandAngle = 6 * 20
             = 120 degree
```

Now the angle between hour hand and minute hand is **absolute of difference between hourHandAngle and minHandAngle**.

```
angleBetween = | hourHandAngle - minHandAngle |
angleBetween = | 0.5 * (60H + M) - 6M |

// Angle between the hour hand and minute hand
// at 5:20
angleBetween = | 160 -120 |
             = 40 degree
```

## Solution with Haskell

Now we know how to solve clock angle problem. Since I am learning Haskell nowadays, I thought I should try to solve it with Haskell and here is my solution in Haskell.

```hs
import System.IO
angleHour :: (Float, Float) -> Float
angleMinute :: Float -> Float


main = do
  putStrLn "Hour : "
  hour <- getLine
  putStrLn "Minute : "
  minute <- getLine
  putStrLn(hour ++ ":" ++ minute)
  let angleH = angleHour((read hour :: Float), (read minute :: Float))
  let angleM = angleMinute (read minute :: Float)
  putStrLn "Angle Between : "
  putStrLn(show(abs(angleH - angleM)))

angleHour (hr, min) = (0.5 * (60*hr + min))
angleMinute (min) = 6 * min
```

In this I receive the time, hour and minute in different prompts. This might be a bad solution but please forgive me for lack of knowledge. If you have suggestions to improve this code please lemme know via comments.

Thanks.

Happy New Year.
