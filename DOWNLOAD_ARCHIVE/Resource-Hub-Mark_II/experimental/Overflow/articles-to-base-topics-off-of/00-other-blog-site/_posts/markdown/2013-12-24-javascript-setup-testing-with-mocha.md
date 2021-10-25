<!--


---
 "JavaScript : Setup testing with mocha"
date: 2013-12-24 00:00:00 IST
updated: 2013-12-24 00:00:00 IST
categories: github
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

[Mocha](http://visionmedia.github.io/mocha/) is the one of the testing framework available in JavaScript. It supports both tdd and bdd and we can run tests from both browser and CLI.

# Setup for testing in Browser

Every release of the Mocha will contain a [mocha.js](https://github.com/visionmedia/mocha/blob/master/mocha.js) to enable testing in browser.
We can use [chai.js](http://chaijs.com/) or [expect.js](https://github.com/LearnBoost/expect.js) for assertions.
If you are using `tdd` you need mocha to setup by,

{% highlight js %}
mocha.setup('tdd');
{% endhighlight %}

or else you can use `mocha.setup('bdd')`.
Here is the boilerplate html for mocha testing. After including your scripts and tests, you can open up in a browser to run tests.

Don't forget to include `mocha.run()` which will initiate the test runner.

{% highlight html %}

<body>
    <div id="mocha"></div>
    <script src="bower_components/mocha/mocha.js"></script>
    <script>mocha.setup('bdd')</script>
    <script src="bower_components/chai/chai.js"></script>
    <script>
        var assert = chai.assert;
        var expect = chai.expect;
        var should = chai.should();
    </script>

    <!-- include source files here... -->

    <!-- include spec files here... -->
    <script src="spec/test.js"></script>

    <script>mocha.run()</script>

</body>
{% endhighlight %}

# Setup for testing in CLI

When it comes to testing, I like CLI more than browser. So here is how you can run your mocha tests from CLI. At first you need to install npm module mocha.

{% highlight sh %}
npm install mocha
{% endhighlight %}

If you are trying to run tests of an web app in the CLI, then you need to find the help of [phatomjs](http://phantomjs.org/) or else you can create some tests and try running with `mocha` command.

You can specify **bdd** or **tdd** using the `--ui` option.

# Yeoman : generator-mocha

[Yeoman](http://yeoman.io) can help you to boilerplate your mocha testing setup. Install [generator-mocha](https://github.com/yeoman/generator-mocha) for it.

{% highlight sh %}
npm install -g generator-mocha
{% endhighlight %}

Then boilerplate the setup with the command,
{% highlight sh %}
yo mocha
{% endhighlight %}

By default yeoman will generate boilerplate for **bdd**, if you wanna generate for **tdd**, use the option `--ui` as same as for mocha command.

Yeoman will install the mocha, chai etc with the help of bower and help to run tests with [grunt-mocha](https://github.com/kmiyashiro/grunt-mocha). Yeoman will boilerplate for webapp and grunt-mocha will run the tests with the help of phatomjs.
