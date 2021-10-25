<!--


---
 "BabelJS : Writing next generation JS"
excerpt: "BabelJS : Writing next generation JS"
date: 2016-01-27 00:00:00 IST
updated: 2016-01-27 00:00:00 IST
categories: javascript, babeljs
tags: javascript, babeljs
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

[BabelJS](http://babeljs.io) allows you to write ES6 or ES7 today. I recently started writing all my javascript in ES6 and transpile though babel.js.

## setup

```sh
npm i --save-dev babel-cli babel-preset-es2015
```

Now you can write your Javascript in ES6 and build/transpile with babel.

```sh
./node_modules/.bin/babel --presets=es2015 source.js -o output.js
```

## Using .babelrc

You can also define the presets in `.babelrc` file in the root folder of the project.

```json
{
  "presets": ["es2015"]
}
```

Now you don't have to specify this as CLI option.

```sh
./node_modules/.bin/babel source.js -o output.js
```

If you have multiple files you can specify the input and output directories.

```sh
./node_modules/.bin/babel src/ -d dist/
```

## Source Maps

You can generate source maps using `-s` option.

```sh
./node_modules/.bin/babel src/ -d dist/ -s
```

## npm script

For easiness you can set this in npm scripts.

```json
# package.json
{
  "name": "some-name",
  "scripts": {
    "build": "babel source.js -o output.js"
  }
}
```

Now you can run the command `npm run build` to transpile.

## Watch

You can also set the babel.js to watch you source file and transpile when ever you save a change in the source file. You can use `-w` or `--watch` option for it.

```sh
babel -w source.js -o output.js
```

Now babel will build your output file when ever you make some changes to the source file.

## Using with ReactJS

If you want to use with ReactJS, you need to install `babel-preset-react` preset as well.

```sh
npm i --save-dev babel-preset-react
```

Once you install the react preset you can now build `.jsx` files using babel.

```sh
./node_modules/.bin/babel --presets=es2015,react source.jsx -o output.js
```

Now its time to say goodbye to coffeescript and write next generation JavaScript.
