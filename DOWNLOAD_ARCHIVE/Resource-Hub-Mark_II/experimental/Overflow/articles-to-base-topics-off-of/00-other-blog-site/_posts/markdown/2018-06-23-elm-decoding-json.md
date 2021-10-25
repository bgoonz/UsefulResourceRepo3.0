<!--


---
 'ELM : decoding JSON'
excerpt: 'Decoding simple JSON string to ELM Types'
date: 2018-06-23 00:05:00 IST
updated: 2018-06-23 00:05:00 IST
categories: elm
tags: elm, json, decoder
image: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/elm-json-decoder/3762360637_6b851c9478.jpg
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

In ELM understanding decoding JSON will take a bit of time. We can define a `Decoder` as a spec on how to perform the translation from JSON
to ELM types.

In this post we will try to understand the how to decode a JSON string to ELM types. For limiting the scope we Will cover 
decoding `Simple Object` in this post and the others complex ones like decoding `List of Objects`, decoding `Union Types`, decoding `JSON with optional keys` will cover in other posts.

We will use [Json.Decode][json_decode] package from ELM core to do the decoding.

{:style="text-align: center;"}
![json card][json_card]

{:style="text-align: center;"}
photo credit: superfluity [JSON Card -- Front][json_card_src] via [photopin][photopin] [(license)][cc_license]

# <a class="anchor" name="simple-object" href="#simple-object"><i class="anchor-icon"></i></a>simple object

Lets get started with defining a simple json string for easy decoding. We will also define an `ELM` type to which
this json should decode into.

```elm
import Json.Decode

type alias Obj = 
    { a: Int, b: String }

json = 
    """
    {"a": 10, "b": "abc"}
    """
```

Next lets define a custom decoder function called `decodeObjValue`, which is composed from the different methods available in `Json.Decode` library.
This will defined as per the structure of our `json` and `Obj`. 

```elm
decodeObjValue : Json.Decode.Decoder Obj
decodeObjValue =
    Json.Decode.map2 Obj
        (Json.Decode.field "a" Json.Decode.int)
        (Json.Decode.field "b" Json.Decode.string)
```

Since we have only 2 fields in the JSON string we can use `Json.Decode.map2` and pass `Obj` and functions to decode each field.
Our first field `a` is of type `Int`. So we can use `(Json.Decode.field "a" Json.Decode.int)` and for `b` we use `(Json.Decode.field "b" Json.Decode.string)`
since we are expecing `b` to be of type `String`

**Note:** It is extremely important to keep the order of the fields. The decoding will fail if we try to decode the field `b` first.

In Elm, all type alias's are shorthand functions In our case `Obj` is `(\a b -> Obj a b)`
This is the reason why we should keep the order of field. If we try to decode `b` first the `Obj` will receive a String as first param and it can't accept it.

Now we defined or agreed on how to decode the incoming json. Next we need to run this decoder.
Since our input is `String` we will use [Json.Decode.decodeString][decode_string] to parse the given string and run our custom decoder.

```elm
decodeObj : String -> Obj
decodeObj json =
    case Json.Decode.decodeString decodeObjValue json of
        Ok obj ->
            obj
        Err _ ->
            {a = -1, b = "Error"}
```

`Json.Decode.decodeString` will accept the `Decoder` as first argument and json string which need to decoded as second.
It returns the type `Result` which we need use it with `case` statement to get the exact result.

You can see the decode in action on [ellie-app][ellie_link]

<iframe src="https://ellie-app.com/embed/yghR44wmJda1" style="width:100%; height:400px; border:0; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

    Versions of Language/packages used in this post.

    | Library/Language | Version |
    | ---------------- |---------|
    |      ELM         |  0.18.0 |
    |      core        |  5.1.1  |

[json_card]: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/elm-json-decoder/3762360637_6b851c9478.jpg
[json_card_src]:http://www.flickr.com/photos/44792728@N00/3762360637
[json_decode]: http://package.elm-lang.org/packages/elm-lang/core/5.1.1/Json-Decode
[decode_string]: http://package.elm-lang.org/packages/elm-lang/core/5.1.1/Json-Decode#decodeString
[ellie_link]: https://ellie-app.com/yghR44wmJda1
[photopin]: http://photopin.com
[cc_license]:https://creativecommons.org/licenses/by-nc-sa/2.0/
