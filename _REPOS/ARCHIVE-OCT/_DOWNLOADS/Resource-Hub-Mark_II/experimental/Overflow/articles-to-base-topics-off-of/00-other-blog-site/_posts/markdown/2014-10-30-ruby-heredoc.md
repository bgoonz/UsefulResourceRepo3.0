<!--


---
 "Ruby: heredoc"
excerpt: "Ruby heredoc"
date: 2014-10-30 00:00:00 IST
updated: 2014-10-30 00:00:00 IST
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

Ruby heredoc have two syntax, the one starts with `<<` and other with `<<-`. The one starts with `<<` needs END marker should be at starting of a line.

```ruby
def something
  @abc = <<ABC
    some
    multiline
    text
ABC
end
```

but `<<-` the one with dash, won't need marker at the start of line, so we can easily intend END marker.

```ruby
def something
  @abc = <<-ABC
    some
    multiline
    text
  ABC
end
```

while working on [erb rendering](/2014/10/ruby-rendering-erb-template.html), something caught my eye, a wierd syntax (at least for me) with heredoc on [ruby doc](http://www.ruby-doc.org/stdlib-2.1.4/libdoc/erb/rdoc/ERB.html#method-c-new-label-Example).

```ruby
ERB.new(<<-'END_PRODUCT'.gsub(/^\s+/, ""), 0, "", "@product").result b
  <%= PRODUCT[:name] %>
  <%= PRODUCT[:desc] %>
END_PRODUCT
```

Then only I came to know that heredoc can be easily passed to functions like

```ruby
some_method(<<-START)
  some
  multiline
  text
START
```

and if you have two heredoc to pass, then

```ruby
some_method(<<-START, <<-END)
  some
  multiline
  text
START
  another
  multiline
  text
END
```

# Single quoted

just like single quoted string, which won't evalute the interpolated expression

```ruby
a = 10
@abc = <<-'ABC'
  some
  multiline
  text
  #{a}
ABC
```

will result in

```ruby
'  some
  multiline
  text
  #{a}'
```

# Double quoted

As you guessed, this will evalute the interpolated expression and substitute the value.

```ruby
a = 10
@abc = <<-"ABC"
  some
  multiline
  text
  #{a}
ABC
```

will result in

```ruby
'  some
  multiline
  text
  10'
```

# Removing unwanted spaces due to indentation

Since we indend the heredoc to make code more readable, this will lead to unnecessary spaces in our text. To avoid this you can use [gsub](http://ruby-doc.org/core-2.1.4/String.html#method-i-gsub) method.

```ruby
some_method(<<-START.gsub(/^\s+/, ""))
  some
  multiline
  text
START
```

which will result in

```ruby
'some
multiline
text
10'
```

if you are using Rails/ActiveSupport there is handy method you can use [strip_heredoc](http://apidock.com/rails/String/strip_heredoc)

```ruby
some_method(<<-START.strip_heredoc)
  some
  multiline
  text
START
```
