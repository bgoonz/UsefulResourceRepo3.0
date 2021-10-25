<!--


---
 "Ruby : nil? or empty?"
date: 2013-08-21 12:29:00 IST
updated: 2013-08-21 12:29:00 IST
categories: ruby
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

Consider you wanna make sure a string is not empty as well as not nil.
If you are using rails you have a [blank?](http://api.rubyonrails.org/classes/Object.html#method-i-blank-3F) method to do it. but what if you are not on rails?

As usual you will write a method something like

{% highlight ruby %}
def is_nil_or_empty? value
value.empty? || value.nil?
end
{% endhighlight %}

But this will through error **undefined method empty?' for nil:NilClass** when you pass a `nil` to this method, since `nil` doesn't have a method called `empty?`.

So I recommend you to test `nil?` first, like

{% highlight ruby %}
def is_nil_or_empty? value
value.nil? || value.empty?
end
{% endhighlight %}

So `value.nil?` will return `true` and ruby won't check the second part since
ruby uses [Short Circuit Evaluation](http://blog.revathskumar.com/2013/05/short-circuit-evaluation-in-ruby.html)

You can also convert the value to string before checking empty, so that you don't wanna always follow this order.

{% highlight ruby %}
def is_nil_or_empty? value
value.to_s.empty?
end
{% endhighlight %}

This will work since `nil.to_s` will return an empty string.

If you pass `false` as boolean this method will return false, since `"false".empty?` will be false. If you are expecting other datatypes to this method then you will definity need more logic.

Happy coding. ;)
