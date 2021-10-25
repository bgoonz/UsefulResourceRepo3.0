<!--


---
 'Vue v/s React'
excerpt: 'Some details on the debate we had on choosing React or Vue'
date: 2019-04-18 00:05:00 IST
updated: 2019-04-18 00:05:00 IST
categories: opinion
tags: react, vue
image: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/react-vue/jyotirmoy-gupta-527306-unsplash-850.jpg
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

> **Disclaimer**   
> * This post not a comparision between Vue & React features.  
> * This doesn't recommend which one to use in your next project.  
> * This was expected to publish in `November 2018`, but couldn't. Publishing this now just for records.

![](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/react-vue/jyotirmoy-gupta-527306-unsplash-850.jpg){: width="100%"}

`October 2018` when I started my new consulting work, the initial days itself I was pulled into the debate of `Vue` v/s `React`.
2 years before we have done some react for the same company. 
But this time when I went to this company most of the projects where using `Vue`. I took up this work thinking I will be working with `Vue`,
but I didn't know that there where some discussion happening on switching back to `React`. Soon I became part of this heated debate.

Since I am coming from the `React` I am slightly biased to React but tried to keep open to ideas and thoughts around `Vue`.
Most of the discussions went like both parties try to list the features out of React/Vue and this didn't yield any result.

By this time I got a chance to take a look into some vue projects in the company and got some overview how they are using it.

Almost in first week of `Nov 2018` when we had another discussion and same feature listing started, I intervened and made them stop
and asked 2 questions.

* Why we moved to Vue from React?
* Why are we again considering moving to React?

for both these I didn't got any satisfactory explanation other than Vue is beginner friendly and other normal arguments.

Long story short, we decided to go with `React`. means all the upcoming projects will be done in `React` but will maintain the `Vue` without rewriting.
In the rest of the blog post I will try to explain why we made this decision.

# <a class="anchor" name="usage" href="#usage"><i class="anchor-icon"></i></a>1. Used by large corporates

Many famous and daily used web application where using React
for Eg.

* Facebook (of course the creator)
* Slack
* Reddit
* Twitter
* Microsoft
* Flipkart
* Paypal

Where on the side of `Vue`

* Gitlab
* Ola
* Zoomcar

can be more but didn't see much major players.
Also one of my friend's team started moving to `React` from `Vue` to various reasons similar to this.

# <a class="anchor" name="modules" href="#modules"><i class="anchor-icon"></i></a>2. Better tooling and support for modules

Since `React` is used by large corporations and they contribute back in the form of some useful modules
Modules like

* `downshift`, `react-testing-library` by Kent C Dodds from **Paypal**
* React router, reach router by **React Training**

Support for the `CSS-in-JS` libraries like `glamour`, `emotion` etc.

When it comes to tooling, `babel` officially supports it.

When we look into vue, I couldn't see much modules which are community supported and continued maintenance other than official Vue components.
So we concluded the availability and community support of modules is much better in react ecosystem than Vue.


# <a class="anchor" name="community" href="#community"><i class="anchor-icon"></i></a>3. Better community in town

Since we are in `Bangalore` the local `React` community is just awesome. Each meetup is with ~150 attendees (this is not the RSVP count) with great talks.
Even there is multiple React community and meetups happening, where as for vue very few.

Even a general Js meetup will have at least one talk on react.

# <a class="anchor" name="future" href="#future"><i class="anchor-icon"></i></a>4. Future is promising

When this discussion was happening, `hooks` were not released and `Suspense`, `Async rendering`, `React.lazy` etc where just released. All these new features were towards the productivity of the consumers. Also react already had RFC process.
On Vue, on future mostly it was like `rewrite into Typescript` which was not adding any advantage for consumers. No new special features where not in queue and some rumours where like `Vue` will adopt hooks in future. Now `Vue` started with RFC process.

# <a class="anchor" name="Conclusion" href="#Conclusion"><i class="anchor-icon"></i></a>Conclusion

It's not an easy task to evaluate 2 similar frameworks/libraries especially for a corporate. This decision is going to change a lot of things there.
Right or wrong they have to live with this decision for a long time. So this should be made after stepping out of the fan zone and tech.
We have to even think of hiring, expanding the team, long time support from corporate and community.

This post is not against `Vue`, just a document on how we took this very hard decision to go ahead with `React` for all future projects.
By this post I am trying to convey you to use `React` for next project rather it might help you in your decision making when it comes to coorporate environment.

Photo credit: <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jyotirmoy?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Jyotirmoy Gupta"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Jyotirmoy Gupta</span></a>
