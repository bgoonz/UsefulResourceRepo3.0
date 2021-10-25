<!--


---
 "Treating in house projects like open source"
excerpt: "Treating in house projects like open source"
date: 2015-08-23 00:00:00 IST
updated: 2015-08-23 00:00:00 IST
categories: best-practices
tags: projects, best-practices
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

I always loved open source and contributing to it. Personally I believe it taught me alot on how to code and how not to.

When I start a new project I like to bootstrap it using the best tools available to standardize and automate the task which make it easier for team and also try to follow some style guide and and coding standards. Some people in my team doesn't understand why we are following this. Most such things I take from other open source project and I feel like it will benefit my team as well.

Some of things I take from open source project setup are,

## Place only blueprint of config files

Since anything we add into git, stays there forever in history, I really don't like my production config with passwords and api keys to add into git. So I used to keep a `.example` file with blueprint of the configuration and ignore the config files with real values.

## Have good README, with setup instructions

Initially we didn't have any README, because of this when I help a new joinee to setup the project, I was missed some steps and wasted so much time. So I thought of putting some time to write a REAME with the whole setup instructions from cloning git repository to deployment. Now when a joinee comes I just give the access to the git repository and ask them to go though the README and setup. This helped me to save 10x of my time which wasted to setup for each joinee.

## Use editor config to enforce same coding style for team

In order to force everyone to follow same coding style, I added a settings to `.editorconfig` file and asked everyone to install [EditorConfig](http://editorconfig.org/#download) plugin for their favorite editor. This way my team is able to follow the same coding style easily.

## Communication

I like to drop a comment in issue tracker or send out a team email regarding the decision which we taken in a offline discussion. Its like a documentation for me to check back in future why we made this decision and what went wrong. Also this helps to keep updated with the whole team about some decisions and if they want they can recommend a better solution. Since my team is always work near by they don't understand why they need to do it. I always think to teach them how to work remote and still keep everyone in sync.
