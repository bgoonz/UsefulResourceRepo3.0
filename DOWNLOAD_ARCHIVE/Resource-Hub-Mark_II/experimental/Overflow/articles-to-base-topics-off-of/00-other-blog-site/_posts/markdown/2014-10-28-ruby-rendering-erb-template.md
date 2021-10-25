<!--


---
 "Ruby: Rendering erb template"
excerpt: "Ruby: Rendering erb template"
date: 2014-10-28 00:00:00 IST
updated: 2014-10-28 00:00:00 IST
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

I never used [ERB](http://www.ruby-doc.org/stdlib-2.1.4/libdoc/erb/rdoc/ERB.html) outside Rails or without [tilt](http://github.com/rtomayko/tilt). So while I
was working with a bare rack app, I though I should try our ERB directly and checkout its api.

So I taken a look into ERB Class just enough to render a template, nothing much in detail. Here is the syntax for ERB constructor,

```ruby
ERB.new(template_string, safe_eval=nil, trim_mode=nil, outvar='_erbout')
```

let see how we can render some template with this.

# Using Sting template

Here is the simple example, for rendering a string template. Since we didn't specify the `outvar` the `result` method will return the rendered html.

```ruby
name = "Whatznear";
ERB.new("<h1>Hello ERB World!! </h1><h3><%= name %></h3>").result(binding)
```

Hope you noticed that we are passing `binding` to result method. binding gives the context in which the template to be evaluated, so they can replace the correct variables with its values.

If you like looking into details of `binding`, you can check the [ruby doc for Binding](http://www.ruby-doc.org/core-2.1.4/Binding.html). The above snippet will result in

```html
<h1>Hello ERB World!!</h1>
<h3>Whatznear</h3>
```

# Using template file

If you want to render a template from file, you just need to read the content of file and pass to ERB constructor.

```ruby
require "erb"

class Basicerb

  def initialize name
    @name = name
    @template = File.read('./index.erb')
  end

  def render
    ERB.new(@template).result( binding )
  end
end
```

```erb
<%# index.erb %>
<h1>Hello ERB World!! </h1><h3><%= @name %></h3>
```

Here, we used `@name`, an instance variable because we are passing the context of `Basicerb` object to `result` method.

If you want to store the rendered html into another instance variable you can the variable as `outvar`.

```ruby
require "erb"

class Basicerb
  attr_reader :html

  def initialize name
    @name = name
    @template = File.read('./index.erb')
  end

  def render
    ERB.new(@template, 0, "", "@html").result( binding )
  end
end
```

# Using layout and view template

The most confusing things was rendering some erb inside an layout. Here is the `layout.rb`

```erb
<div class="jumbotron">
    <%= yield %>
</div>
```

and we use the above `index.erb` as view.

```ruby
require "erb"

class Basicerb
  def initialize name
    @name = name
    @layout = File.read('./layout.erb')
    @template = File.read('./index.erb')
  end

  def render
    templates = [@template, @layout]
    templates.inject(nil) do | prev, temp |
      _render(temp) { prev }
    end
  end

  def _render temp
    ERB.new(temp).result( binding )
  end
end
```

Lets break it down how it works, The [Enumerable#inject](http://www.ruby-doc.org/core-2.1.4/Enumerable.html#method-i-inject) will accept a value and a block. The block will be executed for every element and the value we passed will be taken as first element. So in this case, in the first iteration, `prev` will be `nil` and `temp` will be the `@template` (view) string and pass it to `_render` method. Since this `@template` doesn't have a `yield` it just render the string as before.

In the second iteration, the `prev` will be rendered html of `@template` and `temp` will be `@layout`. Then these values will be passed to `_render`. Now while rendering layout it have a `yield` method which will be replaced by rendered html of `@template`. And finaly the `render` method will return html as below.

```html
<div class="jumbotron">
  <h1>Hello ERB World!!</h1>
  <h3>Whatznear</h3>
</div>
```

Hooray, the result seems what we expected.
