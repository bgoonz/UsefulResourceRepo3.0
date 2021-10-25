<!--


---
 "Reveal.js : generate pdf using phantomjs"
excerpt: "Reveal.js : generate pdf using phantomjs"
date: 2014-12-08 00:00:00 IST
updated: 2014-12-08 00:00:00 IST
categories: html
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

Since I started giving [tech talks](/talks.html) in meetups I used [reveal.js](https://github.com/hakimel/reveal.js/) to build my slides. As a web developer its the finest tool to create and share slides for me. I either share the slides on github or upload to slide hosting sites.

To upload the slides to hosting sites I need to convert html slides to pdf. The reveal.js have a workflow to convert the html slides into pdf using chrome. But since I love CLI, I was looking for a way to convert my slides to pdf using [phantom.js](https://github.com/ariya/phantomjs/). Then a [stackoverflow thread](http://stackoverflow.com/questions/25027156/reveal-js-build-pdfs-dynamically-with-grunt-lib-phantomjs) got me into the following solution.

Before seeing the stackoverflow I never knew that reveal.js have equiped with a [plugin print-pdf.js](https://github.com/hakimel/reveal.js/blob/master/plugin/print-pdf/print-pdf.js) to do this. For this solution to work, you need phantomjs to be installed. You can either download the compiled phantomjs or install using `npm`.

```sh
npm install -g phantomjs
```

After installing the phantomjs you can run the following command to generate the pdf.

```sh
phantomjs path/to/print-pdf.js "http://localhost:9000/index.html?print-pdf" file-name.pdf
```

Since I installed revealjs using bower, my path to `print-pdf.js` plugin is `bower_components/reveal.js/plugin/print-pdf/print-pdf.js` and my slides are served using simple http server running at `localhost:9000`.

But when I tried this first time, I got the blank slides because reveal.js load the slide content via ajax after loading the `index.html` and as per the plugin phantomjs won't wait for the ajax to complete. So I found a simple hack to wait phantomjs to load the slide contents using `setTimeout`.

```js
page.open(revealFile, function (status) {
  // console.log( 'Printed succesfully' );
  // page.render( slideFile );
  // phantom.exit();
  console.log(status);
  if (status !== "success") {
    console.log("Unable to load the address!");
    phantom.exit();
  } else {
    setTimeout(function () {
      page.render(slideFile);
      phantom.exit();
    }, 1000); // Change timeout as required to allow sufficient time
  }
});
```

If you are using grunt, you can register the task to generate pdf.

```js
grunt.registerTask("pdf", function () {
  var childProcess = require("child_process");
  var phantomjs = require("phantomjs");
  var binPath = phantomjs.path;
  var done = grunt.task.current.async();

  childArgs = [
    "bower_components/reveal.js/plugin/print-pdf/print-pdf.js",
    "http://localhost:9000/index.html?print-pdf",
    "filename.pdf",
  ];

  childProcess.execFile(binPath, childArgs, function (error, stdout, stderr) {
    grunt.log.writeln(stdout);
    done(error);
  });
});
```

So from now generating pdf from reveal.js slides have become really easy, I just need to run

```sh
grunt pdf
```

If you have a better solution to check whether phantomjs finished loading the slides contents other than the above hack, please do let me know.

Thank You.
