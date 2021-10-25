<!--


---
 'ELM : Passing initial data to ELM application'
excerpt: 'ELM : Passing initial data to ELM application using programWithFlags'
date: 2017-11-05 00:00:00 IST
updated: 2017-11-05 00:00:00 IST
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

When we start introducing the ELM slowly into our existing application, there is high chance that we need to pass some initial data to ELM module to configure it while it starts up.

Consider we have written a small application using `program`.

```elm
-- Main.elm
type Action = NoOp

type alias Model =
  { name: String }

initModel : Model
initModel =
  { name = "A" }

view : Model -> Html Action
  div [] [
    text model.name
  ]

update : Action -> Model -> (Model -> Cmd Action)
update action model ->
  case action of
    NoOp -> 
      (model, Cmd.none)

init : (Model -> Cmd Action)
init =
  (initModel, Cmd.none)

main : Program Never Model Action
main =
  Html.program {
    init: init,
    update: update,
    view: view,
    subscription: \_ -> Sub.none
  }
```

And the bootup will be

```js
import { Main } from './Main.elm'
var app = Main.embed(document.getElementById('elm-app'));
```

In the above app we don't have any way to pass the initial value for the name.
To make the above app to accept `name` while booting up we need to follow 2 steps

1. Pass the data as second parameter to `embed`
2. Use `programWithFlags` instead of `program`.

Let start with defining the `type` flags

```elm
type alias Flags =
  { name : String }
```

Now use the `programWithFlags` instead of `program` for our `main`.

```elm
main : Program Flags Model Action
main =
  Html.programWithFlags {
    init: init,
    update: update,
    view: view,
    subscription: \_ -> Sub.none
  }
```

Then, in `init` method update the model using the value we received via flag.

```elm
init : Flags -> (Model -> Cmd Action)
init flags =
  ({ initModel | name = flags.name }, Cmd.none)
```

Now our app is ready to accept the name on startup. Let's pass the value to our elm program.

```js
import { Main } from './Main.elm'
var app = Main.embed(document.getElementById('elm-app'), { 
  name: 'ELM' 
});
```

Thats it we are now passing the data to ELM program while it starting.
If we are using `fullscreen` method, same as `embed` it will accept the initial data as the second parameter.

So now our final code will look like,

```elm
-- Main.elm
type alias Flags =
  { name : String }

type Action = NoOp

type alias Model =
  { name: String }

initModel : Model
initModel =
  { name = "A" }

view : Model -> Html Action
view model =
  div [] [
    text model.name
  ]

update : Action -> Model -> (Model -> Cmd Action)
update action model ->
  case action of
    NoOp -> 
      (model, Cmd.none)

init : Flags -> (Model -> Cmd Action)
init flags =
  ({ initModel | name = flags.name }, Cmd.none)

main : Program Flags Model Action
main =
  Html.programWithFlags {
    init: init,
    update: update,
    view: view,
    subscription: \_ -> Sub.none
  }
```

Hope it helped.
