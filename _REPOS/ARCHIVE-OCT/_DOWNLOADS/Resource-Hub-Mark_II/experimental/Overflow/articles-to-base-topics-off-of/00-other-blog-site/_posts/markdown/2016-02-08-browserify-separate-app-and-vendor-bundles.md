<!--


---
 "Browserify : separate app and vendor bundles"
excerpt: "Browserify : separate app and vendor bundles"
date: 2016-02-08 00:00:00 IST
updated: 2016-02-08 00:00:00 IST
categories: javascript
tags: browserify
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

When working with browserify, I like to separate bundles for libraries and vendor files and app. Since app bundle will change for most releases and vendor bundle will change only in couple of release and caches much longer. So for my application I have a `app.js` and `vendor.js`.

Since I have a react application, the libraries like `react`, `redux`, `react-redux` etc will got to `vendor.js` and and my components will go into `app.js`.

## Splitting bundles in command line

We can use `--external` or `-x` option to tell browserify not to include `react`, `redux` and `react-redux` in `app.js` bundle.

```sh
./node_modules/.bin/browserify src/index.jsx -o dist/app.js -x=react -x=redux -x=react-redux -t [ babelify --presets [ es2015 react ] ]
```

Now our app bundle is ready. Now it's time for vendor bundle. For that we can use `--require` or `-r` option to require all our dependencies.

```sh
./node_modules/.bin/browserify -o dist/vendor.js -r react -r redux -r react-redux
```

## Using gulp

In gulp, you can use `b.require()` method for requiring modules and `b.external()` method for specifying vendors. I added two different tasks, one to build the vendor and one for app. I add watch only for app build for performance.

Also I keep a array for vendor libraries to specify easily in each tasks.

```js
import gulp from "gulp";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import sourcemaps from "gulp-source-maps";

const vendors = ["react", "redux", "react-redux"];

gulp.task("build:vendor", () => {
  const b = browserify({
    debug: true,
  });

  // require all libs specified in vendors array
  vendors.forEach((lib) => {
    b.require(lib);
  });

  b.bundle()
    .pipe(source("vendor.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("build:app", () => {
  browserify({
    entries: ["./src/index.jsx"],
    extensions: [".js", ".jsx"],
    debug: true,
  })
    .external(vendors) // Specify all vendors as external source
    .transform(babelify)
    .bundle()
    .pipe(source("app.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("dist/"));
});

gulp.task("default", ["build:app", "build:vendor"]);
```

That's it. Now we have separate builds for app and vendor.
