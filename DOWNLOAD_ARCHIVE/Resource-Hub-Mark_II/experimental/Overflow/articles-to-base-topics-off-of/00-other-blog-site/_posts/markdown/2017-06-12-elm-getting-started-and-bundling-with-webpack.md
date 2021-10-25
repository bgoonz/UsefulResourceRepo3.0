<!--


---
 'ELM : Getting started and bundling with webpack'
excerpt: "Setup ELM project with webpack bundling"
date: 2017-06-12 00:00:00 IST
updated: 2017-06-12 00:00:00 IST
categories: elm
tags: elm, webpack
image: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2017/elm-webpack/elm-install.png
---
[ELM lang](http://elm-lang.org) is a new language to write reliable web apps which will generate javascript with performance in focus and no runtime exceptions. To get started we need to go through the [The Elm Architecture](https://guide.elm-lang.org/architecture/) and understand the basic pattern of `Model`, `Update` and `View`.

Once we were done we can start with playing with some snippets. In this post, we will cover 
* How to setup ELM
* How to start playing with a **Hello world** example.
* How to bundle your app with webpack.

## Installing ELM

If ELM is not installed in your system, the easiest way to install ELM is installing it from `npm`.

~~~sh
npm install -g elm elm-live
~~~

[elm](http://npm.im/elm) will install `elm-package`, `elm-reactor`, `elm-make` & `elm-repl` and [elm-live](https://github.com/tomekwi/elm-live)
is a flexible dev server with live reloading.

![elm install]({{ page.image }})

## Setup ELM project

Since we have ELM installed in the system now, we can get started with installing the elm dependencies using `elm package` in an empty directory.

~~~sh
elm package install
~~~

This will install `elm-lang/core`, `elm-lang/virtual-dom` & `elm-lang/html`. Also this command will generate a `elm-package.json` file.

![elm package install](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2017/elm-webpack/elm-packge-install.png)

A sample `elm-package.json` will look like the one below.

```json
// elm-package.json
{
    "version": "1.0.0",
    "summary": "helpful summary of your project, less than 80 characters",
    "repository": "https://github.com/user/project.git",
    "license": "BSD3",
    "source-directories": [
        "."
    ],
    "exposed-modules": [],
    "dependencies": {
        "elm-lang/core": "5.1.1 <= v < 6.0.0",
        "elm-lang/html": "2.0.0 <= v < 3.0.0"
    },
    "elm-version": "0.18.0 <= v < 0.19.0"
}
```

Now, let's write a ELM program to show **Hello World**.

~~~elm
-- index.elm
import Html exposing (..)
import Html.Attributes exposing (..)

main = span [class "welcome"] [text "Hello World"]
~~~

Now, let's run `elm reactor` and open `http://localhost:8000/` see its running in the browser.

![elm in browser](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2017/elm-webpack/elm-hello-world.png)

We can run `elm live` if we need the live reload for our development.

The hello world example have on `View` part in the basic ELM pattern. Let's look into another example 
which has a `Model` & `Update`.

~~~elm
-- counter.elm
import Html exposing (..)
import Html.Events exposing (onClick)

type alias Model = Int
type Action = NoOp | Inc | Dec

update : Action -> Model -> ( Model, Cmd Action)
update action model =
  case action of
    NoOp -> (model, Cmd.none)
    Inc -> (model + 1, Cmd.none)
    Dec -> (model - 1, Cmd.none)

view : Model -> Html Action
view model =
  div [] [
    div [] [text "Counter"],
    div [] [text ("From model :: " ++ (toString model))],
    div [] [
      button [onClick Dec] [text "-"],
      span [] [text (toString model)],
      button [onClick Inc] [text "+"]
    ]
  ]

init : ( Model, Cmd Action )
init =
  (0, Cmd.none)

subscriptions : Model -> Sub Action
subscriptions model =
  Sub.none

main =
  Html.program {init = init, update = update, view = view, subscriptions = subscriptions}

~~~

Now we know how to run small ELM program, but when it comes to a real project we will be using bundling tools like
`webpack`. Next, we will look into how we can bundle a ELM program with **webpack**. We will use the same counter program
to bundle and run with webpack.

## Bundling with Webpack

We will start with setting up a `index.html` & the entry point `index.js`

~~~html
<!--index.html-->

<html>
  <head>
    <title>ELM Counter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  

  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script></head>
  <body>
    <div id="elm-app"></div>
    <script async src="app.js"></script>
  </body>
</html>
~~~

The above snippet will assume that our webpack config will compile the ELM to `app.js`.

Now the entry point `index.js` need to take care of requiring `counter.elm` and mounting the ELM app
in the `div#elm-app`.

~~~js
// index.js
'use strict';

var Elm = require('./counter.elm');
var mountNode = document.getElementById('elm-app');

// The third value on embed are the initial values for incomming ports into Elm
var app = Elm.Main.embed(mountNode);
~~~

### Installing & configuring webpack 

Let's create a `package.json` using `npm init` command and then install the webpack and other dependencies.

~~~sh
npm install --save elm-webpack-loader webpack webpack-dev-server
~~~

Now let's configure the webapack with `elm-webpack-loader`.

~~~js
// webpack.config.js
module.exports = {
  entry: {
    app: [
      './index.js'
    ]
  },

  output: {
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test:    /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader:  'elm-webpack-loader?verbose=true&warn=true',
      },
    ],

    noParse: /\.elm$/,
  },

  devServer: {
    inline: true,
    stats: { colors: true },
  }
};
~~~

Now we are done with configuring webpack with elm loader, Let's see this in action by executing the command

~~~sh
./node_modules/.bin/webpack-dev-server
~~~

and open the `http://localhost:8081/` in the browser.

![elm counter app in browser](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2017/elm-webpack/elm-counter-webpack.png)
