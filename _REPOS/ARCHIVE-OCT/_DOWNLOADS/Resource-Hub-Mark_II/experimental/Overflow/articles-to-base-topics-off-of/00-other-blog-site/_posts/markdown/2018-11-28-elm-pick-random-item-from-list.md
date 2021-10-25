<!--


---
 'ELM : Pick random item from list'
excerpt: 'Pick random item from list using elm/random'
date: 2018-11-28 23:05:00 IST
updated: 2018-11-28 23:05:00 IST
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

Generating random number in `ELM` is tricky. We can't call a function `Math.random()` like in JavaScript. 
ELM by design support pure functions only. If you need to do anything impure you have to 
use `Cmd`, `Msg` and `Update` means you have to use ELM runtime to the impure job. 
To make our life easier ELM 0.19 comes with [elm/random][elm_random] package. 

`elm/random` gives a `Generator` which ask ELM runtime to generate a random number and pass back as `Update` `Msg`.
`Random.generate` will accept the `Msg` with 1 argument and a function with describe the type and range of the random.

```elm
type Msg = RandomNumber int
Random.generate RandomNumber (Random.int 0 10)
```

The above example is to generate random integer between 0 & 10. Since instead of returning value, `Random.generate` will send the message `RandomNumber` with random integer generated. To receive and handle this generated random integer we should have `update` function as below

```elm
update msg model ->
    case msg of
        RandomNumber rn ->
            -- use the random number rn

```

## <a class="anchor" name="random-item-list" href="#random-item-list"><i class="anchor-icon"></i></a>Random Item from list

Lets consider we have a list of items and we need to pick item randomly from this list.

```elm
type alias Char = 
    { text: String }

type alias Flags = 
    {  }


type alias Model =
    { selected : Maybe Char, chars: List Char }


initialModel : Model
initialModel =
    { selected = Nothing
    , chars = [
        {text= "A"}
        ,{text= "B"}
        ,{text = "C"}
        ,{text= "D"}
        ,{text= "E"}
      ] 
    }
```

selecting random item can be trigger in multiple ways like `a button click` or on `app mount`.
For this post let pick the random item on a `button click`.

```elm
renderText : Maybe Char -> Html Msg
renderText selected =
    case selected of 
        Just char ->
            text char.text
        Nothing ->
            text "Please click on Random Button"


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick FindRandom ] [ text "Random" ]
        , div [] [ (renderText model.selected) ]
        ]
```

Now we have a button with `Random` text which will send Cmd `FindRandom`. 
Next lets handle the `FindRandom` in the update.

```elm
type Msg
    = FindRandom


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        FindRandom ->
            (model, Random.generate RandomNumber (Random.int 0 (List.length model.chars - 1)))
```

Once the update method receive the `Msg` `FindRandom` it will trigger the `Random.generate` with boundary 0 & no.of item in the list.
ELM runtime generate random number in the given boundary and will send the Msg `RandomNumber` with the generated number.
Next lets handle that. The above code will become,


```elm
type Msg
    = FindRandom
    | RandomNumber Int


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        FindRandom ->
            (model, Random.generate RandomNumber (Random.int 0 (List.length model.chars - 1)))
        RandomNumber rn ->
            let
                selected = Array.fromList model.chars
                    |> Array.get rn
            in
                ({ model | selected = selected }, Cmd.none)
```

Once the update receives `RandomNumber` with the generated number, we have to pick Item from list. Since we don't have index for list we need to convert th list into array and use the generated number as index to get the List Item. Once we get the List Item we update the `model.selected` value and that will get rendered in the view.

The whole code will look like,

```elm
module Main exposing (main)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

import Random
import Array

type alias Char = 
    { text: String }

type alias Flags = 
    {  }


type alias Model =
    { selected : Maybe Char, chars: List Char }


initialModel : Model
initialModel =
    { selected = Nothing
    , chars = [
        {text= "A"}
        ,{text= "B"}
        ,{text = "C"}
        ,{text= "D"}
        ,{text= "E"}
      ] 
    }


type Msg
    = FindRandom
    | RandomNumber Int


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        FindRandom ->
            (model, Random.generate RandomNumber (Random.int 0 (List.length model.chars - 1)))
        RandomNumber rn ->
            let
                selected = Array.fromList model.chars
                    |> Array.get rn
            in
                ({ model | selected = selected }, Cmd.none)

renderText : Maybe Char -> Html Msg
renderText selected =
    case selected of 
        Just char ->
            text char.text
        Nothing ->
            text "Please click on Random Button"


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick FindRandom ] [ text "Random" ]
        , div [] [ (renderText model.selected) ]
        ]
        
init : Flags -> (Model, Cmd Msg)
init flags =
    (initialModel, FindRandom)


main : Program Flags Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        }
```

This is an extracted version which used in [random gstin][random_gstin] app and its source is available on [github.com/revathskumar/random-gstin][random_gstin_source] 

The Running version is available on [ellie-app][code_snippet].

    Versions of Language/packages used in this post.

    | Library/Language | Version |
    | ---------------- |---------|
    |      ELM         |  0.19.0 |
    |   elm/random     |  1.0.0  |

[elm_random]: https://package.elm-lang.org/packages/elm/random
[code_snippet]: https://ellie-app.com/42fkLMFVdqBa1
[random_gstin]: https://revathskumar.github.io/random-gstin/
[random_gstin_source]: https://github.com/revathskumar/random-gstin/
