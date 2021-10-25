<!--


---
 "Using regex in mysql query"
excerpt: "Using regex in mysql query"
date: 2015-05-28 00:00:00 IST
updated: 2015-05-28 00:00:00 IST
categories: mysql
tags: mysql
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

**Disclaimer:** I don't recommend to use this in production since it cause heavy performance drop. As I read, using **REGEX** in query is 10x slower than **LIKE** operator.

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

Recently I had a requirement to filter out records which matches a particular pattern. Usually in such cases I retrive the records and run filter in the program. This time I was curious to know whether there is an alternative way. If I can filter using a pattern in MySQL, it will be easy for me. Thus I came to know about [REGEX](https://dev.mysql.com/doc/refman/5.1/en/regexp.html) in MySQL.

So now I my query looks like

```sql
SELECT * FROM messages WHERE nick_name REGEXP '[a-z]0\.[0-9]+';
```

to get records matching my regex or I can use NOT REGEX to filter out.

```sql
SELECT * FROM messages WHERE nick_name NOT REGEXP '[a-z]0\.[0-9]+';
```

As I said in disclaimer there is a huge performance drawback for **REGEX** when compared to **LIKE** operator. The **REGEX** operator is `10x` slower than **LIKE** operator.
