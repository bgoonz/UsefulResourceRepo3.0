<!--


---
 "Browserify with gulp"
excerpt: "Browserify with gulp"
date: 2016-02-03 00:00:00 IST
updated: 2016-02-03 00:00:00 IST
categories: javascript
tags: browserify, gulp
image: https://keyholesoftware.com/wp-content/uploads/Browserify-5.png
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

![browserify + gulp]({{ page.image }})

In my [last blog post](/2016/01/browserify.html) I explained how to use browserify command line to bundle javascript modules. In this we will use browserify api to use it along with gulp. I will be writing gulpfile snippets for this post in ES6. You can checkout my post on [writing gulpfile in ES6](/2016/01/writing-gulpfile-in-es6.html).

```js
import gulp from "gulp";
import browserify from "browserify";
import fs from "fs";

gulp.task("default", () => {
  browserify({
    entries: "src/utils.js",
    debug: true,
  })
    .bundle()
    .pipe(fs.createWriteStream("./dist/utils.js"));
});
```

A basic implementation can be done as above. But this won't work when you need to pipe with other gulp plugins like `uglify` or `gulp.dist`. This is because `browserify.bundle()` return a [text stream](https://github.com/substack/node-browserify#bbundlecb) where as gulp works using [vinyl stream](https://github.com/gulpjs/vinyl). In order to browserify to work with other plugins you need to use [vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream).

`vinyl-source-stream` will convert text streams from `browserify.bundle()` to vinyl streams so you can pipe with other gulp plugins which support streaming. Install the `vinyl-source-stream` using `npm i --save-dev vinyl-source-stream`.

```js
import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("default", () => {
  browserify({
    entries: "src/utils.js",
    debug: true,
  })
    .bundle()
    .pipe(source("utils.js"))
    .pipe(gulp.dest("./dist"));
});
```

Now we can use `gulp.dest` to write the output file but if we try to pipe it to `gulp-uglify` you will get error saying **Streaming not supported**. This is because some gulp plugins doesn't support streaming. The `vinyl-source-stream` returns a **streaming** vinyl object where as uglify expects **buffered** vinyl file objects.

Thats were `vinyl-buffer` comes in. `vinyl-buffer` will convert streaming vinyl files to use buffer. you install _vinyl-buffer_ using `npm i --save-dev vinyl-buffer`

```js
import gulp from "gulp";
import browserify from "browserify";
import uglify from "gulp-uglify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";

gulp.task("default", () => {
  browserify({
    entries: "src/utils.js",
    debug: true,
  })
    .bundle()
    .pipe(source("utils.min.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
});
```

Now in `dist/utils.min.js` you will get minified version of the build.

## Working with Source Maps

If you want to generate sourcemaps for your builds you can use `gulp-sourcemaps` plugin. Install gulp-sourcemaps using `npm i --save-dev gulp-sourcemaps`.

```js
import gulp from "gulp";
import browserify from "browserify";
import uglify from "gulp-uglify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import sourcemaps from "gulp-sourcemaps";

gulp.task("default", () => {
  browserify({
    entries: "src/utils.js",
    debug: true,
  })
    .bundle()
    .pipe(source("utils.min.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist"));
});
```

## Handling Errors

In order to handle errors you bind callback to 'error' event from browserify.

```js
import gulp from "gulp";
import browserify from "browserify";
import uglify from "gulp-uglify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import sourcemaps from 'gulp-sourcemaps';
import 'gutil' from 'gulp-util';

gulp.task('default', () => {
  browserify({
    entries: 'src/utils.js',
    debug: true
  })
  .bundle()
  .on('error', err => {
    gutil.log("Browserify Error", gutil.colors.red(err.message))
  })
  .pipe(source('utils.min.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist'));
});
```

## Using with react and babel

If you are planning to right react components in ES6 then I recommend `babelify` transform, otherwise `reactify` transform will help to bundle the react modules.

```js
import gulp from "gulp";
import browserify from "browserify";
import uglify from "gulp-uglify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import sourcemaps from 'gulp-sourcemaps';
import 'gutil' from 'gulp-util';
import babelify from 'babelify';

gulp.task('jsx', () => {
  browserify({
    entries: 'src/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .on('error', err => {
    util.log("Browserify Error", util.colors.red(err.message))
  })
  .pipe(source('index.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist'));
});
```

Image courtesy [keyholesoftware.com](https://keyholesoftware.com)
