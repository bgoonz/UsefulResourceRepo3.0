<!--


---
 "ActiveResource : Passing prefix options"
date: 2013-12-31 00:00:00 IST
updated: 2013-12-31 00:00:00 IST
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

ActiveResource can be used with nested resources, provided you need to pass the parameters accordingly. ActiveResource call it as `prefix options` that used with nested resource. Its a bit tricky to pass the prefix options to different methods, since methods use different approach to accept prefix params. Lets consider we have a model for Inventory like on below,

{% highlight ruby %}
class Inventory < ActiveResource::Base
self.prefix = '/api/admin/stores/:store_id/'
end
{% endhighlight %}

The prefix option `:store_id` is passed to various method in different ways. Make sure you use the same key as you specified in the `self.prefix`.

# On find()

For `find()` method you can pass the `:store_id` in `:params` hash, as second parameter.

{% highlight ruby %}

# .find()

Inventory.find(params[:id], params: { store_id: params[:store_id]})
{% endhighlight %}

# On save()

For `save()` you can't pass it as second parameter. So you need to explicitly set on the object before calling the `.save()` method.

{% highlight ruby %}

# .save()

@inventory = Inventory.new(params[:inventory])
@inventory.prefix_options[:store_id] = @store.id
@inventory.save
{% endhighlight %}

# On update_attributes()

`.update_attributes()` won't accept any second parameter, so you need to pass it with other params.

{% highlight ruby %}

# .update_attibutes()

params[:inventory][:store_id] = @store.id
@inventory.update_attributes(params[:inventory])
{% endhighlight %}
