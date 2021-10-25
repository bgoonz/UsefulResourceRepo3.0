<!--


---
 'ELM : Adding and removing CSS classes conditionally'
excerpt: 'ELM : Adding and removing CSS classes conditionally'
date: 2017-11-07 00:00:00 IST
updated: 2018-04-01 05:00:00 IST
categories: elm
tags: elm
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

In the react ecosystem, [classnames](https://www.npmjs.com/package/classnames) modules is everyones favorite to conditionally add and remove css classes. 

ELM, provide built in support for the same by [classList](http://package.elm-lang.org/packages/elm-lang/html/2.0.0/Html-Attributes#classList) in `Html.Attributes`

## Using `classList`

`classList` function will accept a list of `Tuples`. The type annotation of argument is `List (String, Bool)`. Each tuple should be paired with a css classname and a boolean value. The second value in `Tuple` can be expression which yeilds a Boolean value.

```elm
import Html exposing (..)
import Html.Attributes exposing (classList)

navbar : model -> Html Action
navbar model =
  nav [] [
      a [ classList [
            ("nav-item", True),
            ("active", model.selectedTab == Home)
          ]
        ] [text "Home"],
      a [ classList [
            ("nav-item", True),
            ("active", model.selectedTab == About)
          ]
        ] [text "About"],
      a [ classList [
            ("nav-item", True),
            ("active", model.selectedTab == Talks)
          ]
        ] [text "Talks"],
      a [ classList [
            ("nav-item", True),
            ("active", model.selectedTab == Feed)
          ]
        ] [text "Feed"]
  ]
```

In the above snippet, the css class `nav-item` will be always present since it always `True` but the `active`
class will be added when the associated expression returns true.

Hope that helped. Thanks for reading.
