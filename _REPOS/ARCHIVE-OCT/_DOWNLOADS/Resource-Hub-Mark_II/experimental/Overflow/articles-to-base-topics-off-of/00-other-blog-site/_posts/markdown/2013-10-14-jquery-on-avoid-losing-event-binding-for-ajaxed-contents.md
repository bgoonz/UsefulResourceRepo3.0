<!--


---
 "jQuery.on : avoid losing event binding for ajaxed contents"
date: 2013-10-14 00:00:00 UTC
updated: 2013-10-14 00:00:00 UTC
categories: jquery
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

## Problem

Recently when I was working on a rails project I have to render the a partial after the form sumitted via `remote: true`. But then I noticed that the event binding stopped working after the rendering partial via `.js.erb`.

{% highlight js %}
// list.js.erb
$('.user-list').html(<%= j render partial: "user_list" %>);
{% endhighlight %}

The user_list consists of a table of users, In which the user details are shown when we click on the corresponding row. This is working fine when they are rendered from server. But the show details stopped working after we render the `list.js.erb` after the form submission.

{% highlight html %}

<!-- _user_list.html.erb -->
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <% @user.each do | user | %>
      <tr class='user'>
        <td><% user.name %></td>
        <td><% user.email %></td>
      </tr>
      <tr class='user-details'>
        <td colspan="2"><%= user.details %></td>
      </tr>
    <% end %>
  </tbody>
</table>
{% endhighlight %}

The user-details row is initialy hidden by css. The below code is used to show the hidden details of the user.

{% highlight js %}
// users.js
$('.user').on('click',function(e){
$(e.currentTarget).next('tr.user-details').fadeToggle(500)
})
{% endhighlight %}

But after renedering `list.js.erb` the click event on `.user` didn't get fired.

## The real problem

I hope everyone undestood the problem. The actual issue has nothing to do with rails. The real problem was my understanding of `$.on` method.

I initialy thought the [$.on](http://api.jquery.com/on/) is same as [$.live](http://api.jquery.com/live/) method, **Attach the event handler for the selector, now and in future**. Future means any element added to dom with selector even after the bindings are done.

But `$.on` will bind the event handlers only for the selector elements exists at the time of binding.

Since after rendering `list.js.erb` all the existing `tr.user` elements are replaced with new one's. `$.on` won't bind event handlers for the new one's, hence the functionaly brokes.

## Solution

Now I am on to solution. After a lot of googling I found that the if I want `$.on` to work same as `$.live` I need to change how I bind the event handler to the elements.

The worked solution is,

{% highlight js %}
// users.js
$(document).on('click','.user', {} ,function(e){
$(e.currentTarget).next('tr.user-details').fadeToggle(500)
})
{% endhighlight %}

This will bind the event handlers to the DOM selector elements not only now, but also in future (selectors added to DOM after the bindings). Now the click event fires even the specific selectors are added or replaced with new DOM elements.

Hope this helped you.

PS : This soultion is not only for rails, but also help for the event bindings for the ajaxed contents.
