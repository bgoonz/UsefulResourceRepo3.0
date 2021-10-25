<!--


---
 'ELM : Fetching data with XHR'
excerpt: "Using elm/http package to fetch data with xhr"
date: 2019-05-07 00:05:00 IST
updated: 2019-05-07 00:05:00 IST
categories: elm
tags: elm
image: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/elm-http-xhr/elm-http-xhr.png
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

This post will explain how to use `elm/http` package to fetch data using XHR requests in ELM applications.
Since the reponse is from the outer world of ELM we need to [decode JSON response][decode_json] before ELM can consume it.
For the purpose of demo we will fetch `posts` from [jsonplaceholder][jsonplaceholder] and render the list of titles from its `/posts` resource.

![ELM fetch with XHR](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/elm-http-xhr/elm-http-xhr.png){: width="100%"}

## <a class="anchor" name="setup" href="#setup"><i class="anchor-icon"></i></a>Setup Model

Lets start with defining model for the application.
Our `Post` model will have `id`,`title` & `body` fields and
main `Model` will contain the list of `Post`s the `uiState` to show the state of request and `error` to store the error message. 

```elm
type UiState
    = Init
    | Loading
    | Success
    | Failure

type alias Post =
    { id : Int, title : String, body : String }


type alias Model =
    { posts : List Post, uiState : UiState, error : Maybe String }


initialModel : Model
initialModel =
    { posts = [], uiState = Init, error = Nothing }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )
```

Once we have `Modal` and `Post` we can setup the decoders for these

## <a class="anchor" name="list-decoder" href="#list-decoder"><i class="anchor-icon"></i></a>List Decoder

```elm
postDecoder : Json.Decode.Decoder Post
postDecoder =
    Json.Decode.map3 Post
        (Json.Decode.field "id" Json.Decode.int)
        (Json.Decode.field "title" Json.Decode.string)
        (Json.Decode.field "body" Json.Decode.string)


postCollectionDecoder : Json.Decode.Decoder (List Post)
postCollectionDecoder =
    Json.Decode.map identity
        (Json.Decode.list postDecoder)
```

if your api is namespaced the collection with keys like `data` then the `postCollectionDecoder` will become

```elm
postCollectionDecoder : Json.Decode.Decoder (List Post)
postCollectionDecoder =
    Json.Decode.map identity
        (Json.Decode.field "data" (Json.Decode.list repoDecoder))
```

## <a class="anchor" name="fetch-update" href="#fetch-update"><i class="anchor-icon"></i></a>fetch & update

Next we need to setup the `Msg` and `update` function.

We will make use of two `Msg`s.
`InitFetchPosts` will update the uiState to loading and initiate the fetch.
Once the fetch result is available we will handle it with `FetchPosts` Msg.

```elm
type Msg
    = InitFetchPosts
    | FetchPosts (Result Http.Error (List Post))

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        InitFetchPosts ->
            ( { model | uiState = Loading }, fetchPosts )

        FetchPosts result ->
            case result of
                Ok posts ->
                    ( { model | uiState = Success, posts = posts }, Cmd.none )

                Err _ ->
                    ( { model | uiState = Failure, error = Just "Error" }, Cmd.none )
```

then use `Http.get` to fetch the data

```elm
fetchPosts : Cmd Msg
fetchPosts =
    Http.get
        { url = "https://jsonplaceholder.typicode.com/posts"
        , expect = Http.expectJson FetchPosts postCollectionDecoder
        }
```

we can initiate `fetchPosts` either [on init using task][on_init] or on a normal button click.
For the purpose of this post let use a button to load the data we will be able to notice the `Loading` state switch to `Success`
when data is received.

## <a class="anchor" name="view" href="#view"><i class="anchor-icon"></i></a>Rendering the view

In view we will have a button which will initiate the xhr request and the render the data as per the 
xhr status. Once the xhr is initiated we will show the text `Loading...` as the loading indicator and
later change it to either error message or the list of titles as per the status of xhr request.


```elm
renderItem : Post -> Html Msg
renderItem post =
    li [] [ text post.title ]


renderData : Model -> Html Msg
renderData model =
    case model.uiState of
        Init ->
            span [] []

        Loading ->
            span [] [ text "Loading..." ]

        Success ->
            ul [] (List.map (\post -> renderItem post) model.posts)

        Failure ->
            case model.error of
                Just error ->
                    span [] [ text error ]

                Nothing ->
                    span [] []


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick InitFetchPosts ] [ text "Fetch Posts" ]
        , renderData model
        ]
```

The Running version is available on [ellie-app][code_snippet].

    Versions of Language/packages used in this post.

    | Library/Language | Version |
    | ---------------- |---------|
    |      ELM         |  0.19.0 |
    |   elm/http       |  2.0.0  |

<iframe src="https://ellie-app.com/embed/5rmGSL6kbB4a1" style="width:100%; height:400px; border:0; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


[decode_json]: /2018/06/elm-decoding-json.html
[jsonplaceholder]: https://jsonplaceholder.typicode.com/
[on_init]: /2018/11/elm-send-command-on-init.html
[code_snippet]: https://ellie-app.com/5rmGSL6kbB4a1
[elm_http]: https://package.elm-lang.org/packages/elm/http/2.0.0/
