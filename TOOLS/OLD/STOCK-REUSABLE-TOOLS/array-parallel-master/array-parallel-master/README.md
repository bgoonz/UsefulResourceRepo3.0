# Array Series [![Build Status](https://travis-ci.org/jonathanong/array-parallel.png)](https://travis-ci.org/jonathanong/array-parallel)

Call an array of asynchronous functions in parallel

### API

#### parallel(fns[, context[, callback]])

```js
var parallel = require("array-parallel");

parallel(
  [
    function (done) {
      done();
    },
  ],
  this,
  function (err) {}
);
```

#### fns

`fns` is an array of functions to call in series.
The argument signature should be:

```js
function (done) {
  done(new Error())
  // or
  done(null, result)
}
```

That is, each function should only take a `done` as an argument.
Each callback should only take an `Error` as the first argument,
or a value as the second.

#### context

Optional context to pass to each `fn`.
Basically `fn.call(context, done)`.

#### callback(err, results)

```js
function (err, results) {

}
```

Only argument is an `Error` argument.
It will be the first error retrieved from all the `fns`.
`results` will be an array of results from each `fn`,
thus this could be considered an asynchronous version of `[].map`.

### License

The MIT License (MIT)

Copyright (c) 2013 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
