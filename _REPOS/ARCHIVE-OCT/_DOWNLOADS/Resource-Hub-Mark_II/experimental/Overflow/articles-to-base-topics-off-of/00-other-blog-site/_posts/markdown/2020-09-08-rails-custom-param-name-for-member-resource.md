<!--


---
 "Rails: custom param name for member resource"
excerpt:
  Occasionally we come into a situation where we need custom name for the param instead of id.
  This post will explain how we can configure the rails route for this.
date: 2020-09-08 00:59 +0530
updated: 2020-09-08 00:59 +0530
categories: rails
tags: rails, routes, tips
image: /assets/images/custom_param_name/routes.png
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

By default, the param name for the member resources like `:show`, `:update`, `:delete` etc are `id`.
Occasionally we come into a situation where the name `id` doesn't make sense to the routes.

For example, in `reservations` we have `:show` but instead of `id` we will be passing `confirmation_code` instead of reservation id.
Using `params[:id]` in this case will be confusing for the people who read the code.

This blog will describe how we can use a custom name like `confirmation_code` for the param name and use `params[:confirmation_code]`.

# <a class="anchor" name="for-all-routes-of-the-resource" href="#for-all-routes-of-the-resource"><i class="anchor-icon"></i></a>For all routes of the resource

Our normal routes for `reservations` resource will look like

```
Verb   URI Pattern                                       Controller#Action
GET    /api/v1/reservations/:id(.:format)                api/v1/reservations#
GET    /api/v1/reservations(.:format)                    api/v1/reservations#index
POST   /api/v1/reservations(.:format)                    api/v1/reservations#create
PATCH  /api/v1/reservations/:id(.:format)                api/v1/reservations#update
PUT    /api/v1/reservations/:id(.:format)                api/v1/reservations#update
DELETE /api/v1/reservations/:id(.:format)                api/v1/reservations#destroy
```

To change the name `id` to `confirmation_code`, we can configure the route like below

```rb
resources :reservations, param: :confirmation_code
```

Now for all the reservation member routes, `id` will be replaced with `confirmation_code`.

```
Verb   URI Pattern                                       Controller#Action
GET    /api/v1/reservations/:confirmation_code(.:format) api/v1/reservations#show
GET    /api/v1/reservations(.:format)                    api/v1/reservations#index
POST   /api/v1/reservations(.:format)                    api/v1/reservations#create
PATCH  /api/v1/reservations/:confirmation_code(.:format) api/v1/reservations#update
PUT    /api/v1/reservations/:confirmation_code(.:format) api/v1/reservations#update
DELETE /api/v1/reservations/:confirmation_code(.:format) api/v1/reservations#destroy
```

# <a class="anchor" name="only-for-single-route" href="#only-for-single-route"><i class="anchor-icon"></i></a>Only for single route

If we want the custom name only for a single route like for `:show`, we can configure this using `only` & `except`

```rb
resources :reservations, only: :show, param: :confirmation_code
resources :reservations, except: :show,
```

The result will be

```
Verb   URI Pattern                                       Controller#Action
GET    /api/v1/reservations/:confirmation_code(.:format) api/v1/reservations#show
GET    /api/v1/reservations(.:format)                    api/v1/reservations#index
POST   /api/v1/reservations(.:format)                    api/v1/reservations#create
PATCH  /api/v1/reservations/:id(.:format)                api/v1/reservations#update
PUT    /api/v1/reservations/:id(.:format)                api/v1/reservations#update
DELETE /api/v1/reservations/:id(.:format)                api/v1/reservations#destroy
```

Now we can use the confirmation code for `:show` & `id` for all other routes.

Hope this helped.
