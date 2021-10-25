<!--


---
 "Rails : Passing authtoken from session to ActiveResource"
date: 2014-04-29 11:00:00 IST
updated: 2014-04-29 11:00:00 IST
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

Previously while we need to pass user authtoken with ActiveResource API calls, we were using class variables. But that doesn't look good as we were running multiple instances of our app. Our previous code look something like

```ruby
# app/controllers/application_controller.rb

class ApplicationController < ActionController::Base

  before_filter :set_active_resource_header


  private
    def set_active_resource_header
      if current_user
        ActiveResource::Base.auth_token = session[:user].auth_token
      end
    end
end
```

and we patched `ActiveResource::Connection#authorization_header` to use our token

```ruby
# In ActiveResource::Connection#authorization_header patch
module ActiveResource

  class Base
    cattr_accessor :token
  end

  class Connection
    def authorization_header(http_method, uri)
      { 'auth_token' => ActiveResource::Base.token }
    end
  end
end
```

Recently we figured out there was some issues and thought not to use class variables. Then we need some way to access `session` inside `authorization_header` method. While searching for a solution we came into [request_store](https://github.com/steveklabnik/request_store) gem.

# Request Store

Request store gem helps to store a global state in Rails app in a thread safe way. We can use it like

```ruby
def index
  RequestStore.store[:foo] ||= 0
  RequestStore.store[:foo] += 1

  render :text => RequestStore.store[:foo]
end
```

Then we updated our code to use request_store.

```ruby
# app/controllers/application_controller.rb

class ApplicationController < ActionController::Base

  before_filter :store_user

  private
    def store_user
      RequestStore.store[:user] = session[:user]
    end
end

# In ActiveResource::Connection#authorization_header patch
module ActiveResource

  class Connection
    def authorization_header(http_method, uri)
      if ::RequestStore.store[:user].present?
        { 'auth_token' => ::RequestStore.store[:user].auth_token }
      else
        {}
      end
    end
  end
end
```

Now it is working fine, But I would like to know your comments on this.

Thanks.
