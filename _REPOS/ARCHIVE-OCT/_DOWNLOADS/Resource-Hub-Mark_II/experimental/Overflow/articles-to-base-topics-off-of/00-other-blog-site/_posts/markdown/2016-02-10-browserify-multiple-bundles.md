<!--


---
 "Browserify : Multiple bundles with gulp"
excerpt: "Create multiple bundles using browserify and gulp"
date: 2016-02-10 00:00:01 IST
updated: 2016-02-10 00:00:01 IST
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

In my application I want bundles for each pages and a [separate bundle](/2016/02/browserify-separate-app-and-vendor-bundles.html) for vendors/libraries. In my other post on separate bundles I used two different gulp tasks, but in this case I can't create multiple tasks for each end points.

So I kept all the entry files in root of my js folder and moved other modules inside other folder and used node glob to find all entry points, iterate and build/watch.

```js
import browserify from "browserify";
import watchify from "watchify";
import gulp from "gulp";
import glob from "glob";
import es from "event-stream";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";

gulp.task("build:pages", (done) => {
  glob("./src/*.js", (err, files) => {
    if (err) {
      done(err);
    }
    const tasks = files.map((entry) => {
      const b = browserify({
        entries: [entry],
        extensions: [".js"],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true,
      }).plugin(watchify);

      const bundle = () => {
        return b
          .bundle()
          .pipe(source(entry))
          .pipe(buffer())
          .pipe(gulp.dest(destJsx));
      };

      b.on("update", bundle);
      return bundle();
    });
    es.merge(tasks).on("end", done);
  });
});
```

We need `event-stream` to [merge streams](https://github.com/dominictarr/event-stream#merge-stream1streamn-or-merge-streamarray) and we can call bind `end` event on merged stream.
