<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Write File

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Write data to a file.

<section class="installation">

## Installation

```bash
npm install @stdlib/fs-write-file
```

</section>

<section class="usage">

## Usage

```javascript
var writeFile = require('@stdlib/fs-write-file');
```

#### writeFile( file, data\[, options], clbk )

Asynchronously write `data` to a `file`.

```javascript
var join = require('path').join;

var fpath = join(__dirname, 'examples', 'fixtures', 'file.txt');

writeFile(fpath, 'beep boop\n', onWrite);

function onWrite(error) {
  if (error) {
    throw error;
  }
}
```

The `data` argument may be either a `string` or a [`Buffer`][@stdlib/buffer/ctor].

```javascript
var join = require('path').join;
var string2buffer = require('@stdlib/buffer-from-string');

var fpath = join(__dirname, 'examples', 'fixtures', 'file.txt');

writeFile(fpath, string2buffer('beep boop\n'), onWrite);

function onWrite(error) {
  if (error) {
    throw error;
  }
}
```

The function accepts the same `options` and has the same defaults as [`fs.writeFile()`][node-fs].

#### writeFile.sync( file, data\[, options] )

Synchronously writes `data` to a `file`.

```javascript
var join = require('path').join;

var fpath = join(__dirname, 'examples', 'fixtures', 'file.txt');

var err = writeFile.sync(fpath, 'beep boop\n');
if (err instanceof Error) {
  throw err;
}
```

The function accepts the same `options` and has the same defaults as [`fs.writeFileSync()`][node-fs].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

- The difference between this `writeFile.sync` and [`fs.writeFileSync()`][node-fs] is that [`fs.writeFileSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent directory path) and this API will return an `error`. Hence, the following anti-pattern

  <!-- run-disable -->

  ```javascript
  var fs = require('fs');

  // Check for directory path existence to prevent an error being thrown...
  if (fs.existsSync('/path/to')) {
    fs.writeFileSync('/path/to/file.txt', 'beep boop\n');
  }
  ```

  can be replaced by an approach which addresses existence via `error` handling.

  <!-- run-disable -->

  ```javascript
  var writeFile = require('@stdlib/fs-write-file');

  // Explicitly handle the error...
  var err = writeFile.sync('/path/to/file.txt', 'beep boop\n');
  if (err instanceof Error) {
    // You choose what to do...
    throw err;
  }
  ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require('path').join;
var writeFile = require('@stdlib/fs-write-file');

var fpath = join(__dirname, 'examples', 'fixtures', 'file.txt');

// Synchronously write data to a file:
var err = writeFile.sync(fpath, 'beep boop\n', 'utf8');
// returns null

console.log(err instanceof Error);
// => false

// Asynchronously write data to a file:
writeFile(fpath, 'beep boop\n', onWrite);

function onWrite(error) {
  if (error) {
    console.error('Error: %s', error.message);
  }
  console.log('Success!');
}
```

</section>

<!-- /.examples -->

---

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/fs-write-file
```

</section>

<section class="usage">

### Usage

```text
Usage: write-file [options] <filepath>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  --enc, --encoding encoding   Encoding. Default: 'utf8'.
         --flag flag           Flag. Default: 'r'.
         --mode mode           Mode. Default: 0o666.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

- Relative output file paths are resolved relative to the current working directory.
- Errors are written to `stderr`.
- File contents should be provided over `stdin` as part of a [standard stream][standard-stream] pipeline.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ printf 'beep boop\n' | write-file ./examples/fixtures/file.txt
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="main-repo" >

---

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].

## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-write-file.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-write-file
[test-image]: https://github.com/stdlib-js/fs-write-file/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/fs-write-file/actions/workflows/test.yml
[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-write-file/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-write-file?branch=main
[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-write-file.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-write-file/main
[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/
[stdlib]: https://github.com/stdlib-js/stdlib
[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors
[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-write-file/main/LICENSE
[node-fs]: https://nodejs.org/api/fs.html
[@stdlib/buffer/ctor]: https://www.npmjs.com/package/@stdlib/buffer-ctor
[standard-stream]: http://en.wikipedia.org/wiki/Pipeline_%28Unix%29

</section>

<!-- /.links -->
