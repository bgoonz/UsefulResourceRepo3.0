<!--


---
 "Zeus : Running Test::Unit tests made easy"
date: 2013-12-28 00:00:00 IST
updated: 2013-12-28 00:00:00 IST
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

In **Rails 3.2**, there are predefined tasks to run Test::Unit tests like `rake test:units`, `rake test:functionals` etc. But when you are developing, you may need to run a single test or tests from a file. None of the rake tasks provide this in Rails 3.2.

I like to show you how you can do this with [zeus](https://github.com/burke/zeus).

# What's this zeus?

Zeus is rails application preloader. It preload your rails environment so that you run rake tasks, server and console with in 1-2 seconds. It reloads itself when ever you make any changes to initializers or do a bundle. It will saves you from rails booting.

`zeus test` is coupled with some handy hacks which will let you run your tests easily. You can run all tests in a file or a single test.

# Run tests in a single file

You can run tests from a single file by just passing the file path to `zeus test`
{% highlight sh %}
zeus test test/functional/some_test.rb
{% endhighlight %}

# Run a single test

Consider this as your test case.

{% highlight ruby linenos %}

# test/functional/some_controller_test.rb

class SomeControllerTest < ActionController::TestCase
def setup

end

test 'should create' do # your test
end
end
{% endhighlight %}

Think that in the above case you need to run only **should create**. With zeus there are multiple ways to run single test.

# \#1

You can use pass the test case as underscored and prepend with **test\_** which makes **test_should_create** and pass to `-n` option.

{% highlight sh %}
zeus test test/functional/some_controller_test.rb -n test_should_create
{% endhighlight %}

# \#2

Another similar method is passing the test case in double quotes to `-n` option. Don't forget to prepend **test** before test case.
{% highlight sh %}
zeus test test/functional/some_controller_test.rb -n "test should create"
{% endhighlight %}

# \#3

The third method felt more comfortable for me. Just append **:\<line_no of test case\>** to the file path.
{% highlight sh %}
zeus test test/functional/some_controller_test.rb:7
{% endhighlight %}

Here **7** is the line number of `test "should create"`.

In **Rails 4**, you can pass the filename to the rake tasks and **Rails 4.1** will ship with [spring](https://github.com/jonleighton/spring) preloader. But still I believe zeus will be my favorite to run tests.

Happy testing.
