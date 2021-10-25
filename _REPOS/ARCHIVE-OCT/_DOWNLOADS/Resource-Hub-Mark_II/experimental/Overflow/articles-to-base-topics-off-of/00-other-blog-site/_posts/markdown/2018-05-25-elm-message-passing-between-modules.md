<!--


---
 'ELM : message passing between modules'
excerpt: 'Message passing between modules in ELM.'
date: 2018-05-25 00:05:00 IST
updated: 2018-25-05 00:05:00 IST
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

In the last blog we saw [how to update a field in the list of items][part_1]. In that we had only one module `Main`. 
In this we will see what are the changes need when we plan to move the `viewItem` into a child module and 
how the message passing works between the modules.

If you are planning to seperate module, 

* Parent should have a message to convert the parent message to child message
* This message will take care of conversion of all the messages related to child module.
* Same may we have to convert the `Cmd` from child module to parent one.
* Use `.map` function to convert one message to another  

From the last post the whole code will look like

```elm
type alias Item =
  { description : String
  , id : Int
  }


type alias Model =
  { items : List Item }

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    UpdateDescription id description ->
      let
        updateDescription item =
          if (item.id == id) then
            { item | description = description }
          else
            item

        items =
          List.map updateDescription model.items
      in
        ( { model | items = items }, Cmd.none )

viewItem : Item -> Html Msg
viewItem item =
  div [ class "panel-block" ]
    [ div [ class "columns" ]
      [ div [ class "column" ]
        [ input [ type_ "text", value item.description, onInput (UpdateDescription item.id) ] []
        ]
    ]

view : Model -> Html Msg
view model =
  div [ class "panel" ]
    [ p [ class "panel-heading" ] [ text "Items" ]
    , div []
      (if (List.length model.items) > 0 then
        (List.map viewItem model.items)
      else
        [ text "No Items to show" ]
      )
```

As the first step we will move the `Item` into a different module.

```elm
module Item exposing (..)

type alias Item =
  { description : String
  , id : Int
  }

type Msg = UpdateDescription String

update : Msg -> Item -> ( Item, Cmd Msg )
update msg item =
  case msg of
    UpdateDescription description ->
        ( { model | description = description }, Cmd.none )

view : Item -> Html Msg
view item =
  div [ class "panel-block" ]
    [ div [ class "columns" ]
      [ div [ class "column" ]
        [ input [ type_ "text", value item.description, onInput UpdateDescription ] []
        ]
    ]
```

Now the `Item` module will handle the data for that item and `Main` module will handle the list.

The `Main` module will be

```elm
module Main exposing (..)

import Item

type alias Model =
  { items : List Item.Item }
```

Next we need to declare the message which accepts an `id` and `Item` message to convert.

```elm
type Msg = UpdateItem Int Item.Msg
```

Next lets make changes to the `update`, Now the update function should do the following tasks

* Find the Item which need updation
* Call `Item.update` with the item found
* get back the updated Item and update the Item list.

Since we are using `List` we can't easily get the Item at a particular index, or update and Item at particular index.
We will use [List.Extra][package_list_extra] package which give some handy method like [findIndex][find_index_function], [getAt][get_at] and [setAt][set_at].

Lets utilise these methods to update our list of items

```elm
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    UpdateItem id itemMsg ->
        case itemMsg of 
            Item.UpdateDescription -> 
                let
                    mayBeIndex = (List.Extra.findIndex (\item -> item.id == id) model.items)
                    index =
                        case mayBeIndex of
                            Just index -> index
                            Nothing -> -1

                    selectedItem =
                        case (List.Extra.getAt index model.items) of
                            Just item -> item
                            Nothing -> Item.initItem

                    ( updatedItem, cmdMsg ) =
                        Item.update childAction selectedItem

                    items =
                        List.Extra.setAt index updatedItem model.items
                in
                    ( { model | items = items }, Cmd.map (UpdateItem id) cmdMsg )
```

Since `Item.update` will return the updated item and `Cmd Msg`, we should convert the item message using `Cmd.map`.

Now into the `view`, Since the messages used by `Main` and `Item` is different if we try to use `Item.view` instead of `viewItem`
will result in error. With the help `Html.map` we can use `UpdateItem` to convert the `Msg`.

```elm
view : Model -> Html Msg
view model =
  div [ class "panel" ]
    [ p [ class "panel-heading" ] [ text "Items" ]
    , div []
        (if (List.length model.items) > 0 then
            div [] (List.map (\item -> Html.map (UpdateItem item.id) (Item.view item)) model.items)
        else
            div [ class "panel-block" ] [ text "No Items to show" ]
        )
```

That's it.
we successfully moved `Item` into a separate module and started passing messages between modules.

    Versions of Language/packages used in this post.

    | Library/Language | Version |
    | ---------------- |---------|
    |      ELM         |  0.18.0 |
    |    List.Extra    |  7.1.0  |


[part_1]: /2018/05/elm-update-field-in-a-list.html
[package_list_extra]: http://package.elm-lang.org/packages/elm-community/list-extra/7.1.0
[find_index_function]: http://package.elm-lang.org/packages/elm-community/list-extra/7.1.0/List-Extra#findIndex
[get_at]: http://package.elm-lang.org/packages/elm-community/list-extra/7.1.0/List-Extra#getAt
[set_at]: http://package.elm-lang.org/packages/elm-community/list-extra/7.1.0/List-Extra#setAt
