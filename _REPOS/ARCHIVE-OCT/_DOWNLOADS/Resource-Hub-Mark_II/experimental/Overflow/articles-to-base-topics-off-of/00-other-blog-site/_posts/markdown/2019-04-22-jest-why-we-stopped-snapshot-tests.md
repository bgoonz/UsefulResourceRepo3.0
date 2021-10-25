<!--


---
 'Jest : why we stopped snapshot tests'
excerpt: 'Jest : why we stopped snapshot tests'
date: 2019-04-22 00:05:00 IST
updated: 2019-04-22 00:05:00 IST
categories: jest
tags: jest, testing
image: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/jest-snapshot/john-matychuk-590843-unsplash.jpg
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

When jest introduced snapshot tests we were very eager to try out. we were using snapshot for most of the components and soon enough we have to make a decision that we no longer do snapshot tests.

![](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/jest-snapshot/john-matychuk-590843-unsplash.jpg){: width="100%"}

The main reason for such a decision was 

## <a class="anchor" name="external-dependencies" href="#external-dependencies"><i class="anchor-icon"></i></a>1. Test failure due to external dependencies.

Our tests started failing due to changes in external dependencies. The external ui component updated the `css class` naming convention and all our component snapshot started failing, then we have to update all 
failing snapshots and in another release the same library 
rollback the changes/made some new changes (don 't remember exactly what was the it) and again the snapshots started failing. 

This made it very difficult to maintain the snapshot tests.

## <a class="anchor" name="devs" href="#devs"><i class="anchor-icon"></i></a>2. Devs update the snapshot without verify

Since `jest` gave very easy option to update the snapshot using `-u` option, devs started using it regularly and keep updating the snapshort without verifing whether the changes are relevent or by mistake. 

This become increasingly difficult to do the code review.

## <a class="anchor" name="current-date-time" href="#current-date-time"><i class="anchor-icon"></i></a>3. Extra effort to mock current date/time

We required to put extra effort & time to mock the methods which generate current date and time. 
The best part is this test will pass while we develop and test and start failing from next day only. 
by that time we might have already moved into new task. 


Photo credit: <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@john_matychuk?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from John Matychuk"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">John Matychuk</span></a>
