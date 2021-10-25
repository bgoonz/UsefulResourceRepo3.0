<!--


---
 "Slides : VCR and Webmock"
excerpt: "VCR and webmock"
date: 2014-09-21 00:00:00 IST
updated: 2014-09-21 00:00:00 IST
categories: slides, talks
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

Today at [KRUG meetup](http://krug.github.io/posts/sep-2014-kochi-meetup/),
I given a talk on [VCR](https://github.com/vcr/vcr) and [Webmock](https://github.com/bblimke/webmock).

Since we at [whatznear](http://whatznear.com/) uses **API first** architecture, our web apps are the ones who consume our API first. So we need to mock our API with in our tests, so our tests wil run faster and reliable. In today's talk I tried to cover,

- How to stub http calls
- Why webmock alone didn't worked
- Why we used VCR

<script async class="speakerdeck-embed" data-id="89af89f022080132317f76af556e37c5" data-ratio="1.29456384323641" src="//speakerdeck.com/assets/embed.js"></script>

Hope you enjoyed the talk.
Looking forward for your comments.
