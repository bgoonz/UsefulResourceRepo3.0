<!--


---
 "CSS : box-sizing: border-box;"
excerpt: "CSS : box-sizing: border-box;"
date: 2014-08-08 00:00:00 IST
updated: 2014-08-08 00:00:00 IST
categories: css
tags: css
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

The first thing I think, IE done right is its box-model, means how they handle the sizing of the elements. By W3C specification by the width of an element is the width of its content, padding and border is not included in the width. But IE broken the specification they included padding and border in the width.

{% highlight sh %}

# In IE

width = content + padding + border

# In other browsers

width = content
{% endhighlight %}

![Box model](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2014/08/box-model_zps56745849.png)

In browsers other than IE, we need to calculate the actual width of an element including its padding. So if we given an element a content width of 20px and total padding (including both sides) of 10px, the element will use the space of 30px in the DOM. so if we reduce the padding to 6px (including both sides) its gonna effect the whole layout since it changes the width of the element to 26px, or we need to increase the content width to 24px balance the change. Here we recalculated the width and applied.

This is where IE box model comes relevant. In the same situation of above, we give the width of an element as 30px instead of 20px, and padding of 10px. The IE will calculate the content width of the element as 20px and apply to it. The element will occupy the same amount (30px) space in the DOM as above. So when we need to change the padding to 6px, we don't wanna worry about the layout. The element occupies 30px and IE calculate the content width for us.

## Fixing this incompatibility

As a web developer supporting for this two box-models are pretty difficult and the design become fragile. To make life easier for web developers, CSS has introduced **box-sizing** property.

## box-sizing

Using `box-sizing` property we can set the box model of an element to either IE standard or to W3C standard. As I said before, IE standard is much more easier to use so everyone is recommend to set to IE standard by setting `box-sizing: border-box`.

`box-sizing: content-box` will set to the default box model of non IE browsers.

`box-sizing` property is vendor specific, so you may need to use

{% highlight css %}
.someclass {
-ms-box-sizing: border-box;
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}
{% endhighlight %}

## \* {box-sizing: border-box}

[Paul Irish](http://twitter.com/paul_irish) has written an [blog post](http://www.paulirish.com/2012/box-sizing-border-box-ftw/) on advantage of resting all the elements to border-box by default. In non IE browsers, the default box-sizing is **content-box**.

To reset all elements to border-box,

{% highlight css %}
_, _:before, \*:after {
-ms-box-sizing: border-box;
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}
{% endhighlight %}
