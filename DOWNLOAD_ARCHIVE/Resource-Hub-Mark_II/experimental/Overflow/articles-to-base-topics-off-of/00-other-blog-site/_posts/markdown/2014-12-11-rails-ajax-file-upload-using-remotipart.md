<!--


---
 "Rails: File upload via ajax using remotipart"
excerpt: "Rails: File upload via ajax using remotipart"
date: 2014-12-11 00:00:00 IST
updated: 2014-12-11 00:00:00 IST
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

Rails `remote` is one of the best way to submit a form with ajax. But it is not capable of uploading files using ajax. That's where `remotipart` gem comes into action.

## Add gem to Gemfile

```ruby
# Gemfile
gem 'remotipart'
```

After adding `remotipart` to `Gemfile` do the `bundle install`.

## Add to javascript manifest

Then you need to require `remotipart` in javascript manifest.

```js
// app/assets/javascripts/application.js

//= require jquery.remotipart
```

## set `multipart` option for form

As in every form with fileupload, you need to set the `multipart` option.

```erb
<%= form_for(@upload, remote: true, multipart: true) do |f| %>
    <%= f.file_field :image %>
    <%= f.submit %>
<% end %>
```

Thats it, you don't need any extra configuration for the forms. A [example application](https://github.com/revathskumar/rails-ajax-upload) is available on github.

# Further references

- [code on github](https://github.com/JangoSteve/remotipart)
- [iframe method](http://www.alfajango.com/blog/ajax-file-uploads-with-the-iframe-method/)
