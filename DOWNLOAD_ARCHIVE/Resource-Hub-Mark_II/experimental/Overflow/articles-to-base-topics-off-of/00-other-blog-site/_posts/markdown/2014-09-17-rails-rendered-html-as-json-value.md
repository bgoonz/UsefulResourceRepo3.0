<!--


---
 "Rails : Rendered HTML as JSON value"
excerpt: "Rails : Fixing parseerror thrown by $.ajax when rendered HTML is returned in JSON"
date: 2014-09-17 00:00:00 IST
updated: 2014-09-17 00:00:00 IST
categories: rails
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

When [SJR](https://signalvnoise.com/posts/3697-server-generated-javascript-responses)(Server-generated JavaScript Responses) was first introduced to me by
[@sunilkumar_g56](https://twitter.com/sunilkumar_g56), I was not much impressed
until I actually use it my project. Yes, they are really handy and helps you to
work done really faster. But one thing I hate about is writing a part of JavaScript in the rails views as `.js.erb`.

I found it bit difficult to read the code using SJR because while I read the ajax action
in some JS file and then I need to go into some other file to know what happens
when it is success/failure. Also if you are use Constructor pattern for your components,
its difficult to access even the public methods in SJR. So I like to return the
response of the ajax request and do the DOM manipulation on success and failure
in module itself.

If the ajax response is just some HTML and you need to make change only in one location
on DOM, you just need to render the partial/view, but when you have multiple data to
return as ajax response and need to make DOM changes in multiple areas we need to
return the response as JSON.

You might now think that what so difficult to do it? Me too thought the same until I
need to return a rendered HTML as the value in JSON. The `jQuery.ajax` function
started throwing error saying `parseerror` to the returned json.

To fix this you need to run to_json on the rendered HTML,

{% highlight erb %}
{
"status": "success",
"html": {
"products": <%= (render partial: 'show.html').to_json.html_safe %>
},
"data": {
"count": <%= @products["search_count"] %>
}
}
{% endhighlight %}

So you might be wondering whether the `String` class have a method named `to_json`,
No, but `render` method really returns `EscapedString` which have a `to_json` method on it.
You can see the source in [activesupport/lib/active_support/json/encoding.rb](https://github.com/rails/rails/blob/08754f12e65a9ec79633a605e986d0f1ffa4b251/activesupport/lib/active_support/json/encoding.rb#L54-L60)

This `to_json` method will escape &lt;, &gt;, and &amp; to unicode chars.
