<!--


---
 'ELM : Send command on init'
excerpt: 'ELM : Send command on init'
date: 2018-11-29 02:05:00 IST
updated: 2018-11-29 02:05:00 IST
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

In the last post [ELM : pick random item from list][pick_random_item_post] we discussed about finding a random number on a button click.
But that not that intuitive. we should have a placeholder text until the user clicks on the button for the first time. To avoid this we need to send the `FindRandom` Cmd on the init itself.

This post will explain how we can achieve this.

## <a class="anchor" name="single-cmd" href="#single-cmd"><i class="anchor-icon"></i></a>Single Cmd

The `init` function returns a tuple of model and a Cmd. its signature will look like `init : Flags -> ( Model, Cmd Msg )` and since we don't have any `Cmd` to perform there we usually give `Cmd.none`.

```elm
init : Flags -> ( Model, Cmd Msg )
init flags =
   ( initialModel, Cmd.none)
```

Just replacing `Cmd.none` with `FindRandom` won't work since `FindRandom` is a `Msg` and as per init type signature it needs `Cmd Msg`.
Thats where the [elm/Task][elm_task] comes in. As per the elm doc a Task can be described as

   asynchronous operations that may fail, like HTTP requests or writing to a database.

In our case we can use this to convert the `Msg` into `Cmd Msg` using [Task.succeed][task_succeed] & [Task.perform][task_perform].

`Task.succeed` will convert the `Msg` into a Task which will `succeed` immediately and the run the task using `Task.perform` and convert into `Cmd` using an `identity` function.

An `identity` function is a function which takes one argument and return the same.

```elm
identity : a -> a
identity a =
   a
```

If you are thinking why `identity` function, it means that what ever the result of the task will be the result of the `Cmd`.

ie., `Task.perform identity` takes the task produced by `Task.succeed FindRandom` and convert into `Cmd msg`.

Thus our `init` function becomes

```elm
init : Flags -> ( Model, Cmd Msg )
init flags =
   ( initialModel, Task.succeed FindRandom |> Task.perform identity  )
```

The updated running sample is on [ellie-app][code_snippet]

## <a class="anchor" name="multiple-cmd" href="#multiple-cmd"><i class="anchor-icon"></i></a>Multiple Cmd

Last section we saw how to perform a `Cmd msg` on `init`, but in some cases we might need to perform more than one `Cmd  msg` on `init`.
For this we can use `Cmd.batch` to do this.

```elm
init : Flags -> ( Model, Cmd Msg )
init flags =
   ( initialModel, Cmd.batch
                [ Random.generate NewId (Random.int 1000 10000)
                , Task.succeed (AddItem "Setup & provision production server") |> Task.perform identity
                , Task.succeed (AddItem "Setup CI") |> Task.perform identity
                , Task.succeed (AddItem "Setup Project Skeleton") |> Task.perform identity
                  ])
```

The above example is taken from [revathskumar/estimate-helper][estimate_helper_batch]



[pick_random_item_post]: /2018/11/elm-pick-random-item-from-list.html
[code_snippet]: https://ellie-app.com/42gtyJ7cnLha1
[elm_task]: https://package.elm-lang.org/packages/elm/core/latest/Task
[task_succeed]: https://package.elm-lang.org/packages/elm/core/latest/Task#succeed
[task_perform]: https://package.elm-lang.org/packages/elm/core/latest/Task#perform
[msg_to_cmd_msg]: https://medium.com/elm-shorts/how-to-turn-a-msg-into-a-cmd-msg-in-elm-5dd095175d84
[estimate_helper_batch]: https://github.com/revathskumar/estimate-helper/blob/9a33c0a6cf2ec12d2b1b76600a148bfc60321195/src/Main.elm#L49-L54

