<!--


---
 "Rails: Save file to s3 bucket"
excerpt: "Rails: Save file to s3 bucket"
date: 2014-12-12 00:00:00 IST
updated: 2014-12-12 00:00:00 IST
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

In my last blog post I explained how to [upload file via ajax](/2014/12/rails-ajax-file-upload-using-remotipart.html). In that the file is store in the application server itself. But what if we want to store file in our s3 bucket. We can use `aws-sdk` gem to do it.

## Add gem to Gemfile

```rb
# Gemfile
gem 'aws-sdk'
```

As usual after adding gem to `Gemfile` do `bundle install`.

## Configure AWS

To authorize your app to access s3 bucket you can pass the `key` and `secret` to `AWS#config` method. To do this authorization on our application startup we can add a new file in `config/initializers` folder.

```rb
# config/initializers/s3.rb
AWS.config(
  :access_key_id => 'key',
  :secret_access_key => 'secret'
)
```

You can either specify your `key` and `secret` in `s3.rb` or load it from [custom configuration file](/2012/06/rails-loading-configuration-from-custom.html). The latter one is recommended.

## Upload to s3

Now we have configured and authorized our application to access s3 buckets. Now we can start working on uploading files. Since uploading to s3 can be from any controller, I like to move the functionality to `lib` folder as a separate custom library.

```rb
#  lib/s3_store.rb
class S3Store
  BUCKET = "app-uploads".freeze

  def initialize file
    @file = file
    @s3 = AWS::S3.new
    @bucket = @s3.buckets[BUCKET]
  end

  def store
    @obj = @bucket.objects[filename].write(@file.tempfile, acl: :public_read)
    self
  end

  def url
    @obj.public_url.to_s
  end

  private

  def filename
    @filename ||= @file.original_filename.gsub(/[^a-zA-Z0-9_\.]/, '_')
  end
end
```

Now we have separate `s3_store` library to do task related to s3 bucket. Since our library is in `lib` folder, rails by default won't load it. To reload the `s3_store.rb` in development we need to add `lib` folder to [autoload paths](/2013/04/rails-make-custom-libraries-autoloadable.html). This will also ensure that rails will autoload our library and we don't need to write a separate `require` for it.

ok, go ahead and use the library in our controller, to upload files to s3 bucket.

```rb
# app/controllers/some_controller.rb
def image
  begin
    image = S3Store.new(params[:upload][:image]).store
    #...
  rescue Exception => e
    #...
  end
end
```

Since we return `self` from store method, you can use `image.url` to get the public url of the file uploaded. This can be used to store to db for reference.
