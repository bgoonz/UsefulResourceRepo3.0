<!--


---
 'ELM : Update field in a list'
excerpt: 'Simple way to update a field in the list of Items.'
date: 2018-05-01 06:05:00 IST
updated: 2018-05-01 06:05:00 IST
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

**Part 2 is now published : [ELM : message passing between modules][part_2]**

when we work on a project which has a list or a grid, in most cases we come to a situtation where we need to update one of the field in a list of Items.
In this blog we will see how we can update the field in a list.

This approch might not be appropriate for the use case with lot of list Items since we have to iterated though each item on every update. In that case please consider using a different data structure.

```elm
type alias Item =
  { description : String
  , id : Int
  }


type alias Model =
  { items : List Item }
```

In view 


```elm
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

And to render each Item we have a seperate method `viewItem`

```elm
viewItem : Item -> Html Msg
viewItem item =
  div [ class "panel-block" ]
    [ div [ class "columns" ]
      [ div [ class "column" ]
        [ input [ type_ "text", value item.description, onInput (UpdateDescription item.id) ] []
        ]
    ]
```

Now if when user edits an item, we should make sure we are updating the correct Item in the store.
For this the `UpdateDescription` message should accept `id` of the item and the input value.

Since our data structure uses list, we don't have index to update the item in list. 
Instead we have to map through each item and match the id and if id matches we will update the field. 

```elm
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
``` 

As of now this is pretty simple and no confusion, But gets complicated when we decide to move the `ItemView` to a seperate module. We see that in the [next blog post][part_2].

    Versions of Language/packages used in this post.

    | Library/Language | Version |
    | ---------------- |---------|
    |      ELM         |  0.18.0 |

if you have any feedback, please drop a comment below.



[part_2]: /2018/05/elm-message-passing-between-modules.html
