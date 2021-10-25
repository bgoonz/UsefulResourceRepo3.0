# Node.js: createOutputStream

Exactly like `fs.createWriteStream`, but if the directory does not exist, it's created. Extracted from [fs-extra](https://www.npmjs.com/package/fs-extra)

## Install

    npm i --save create-output-stream

## Example

```js
var createOutputStream = require('create-output-stream');

// if /tmp/some does not exist, it is created
var ws = createOutputStream('/tmp/some/file.txt');
ws.write('hello\n');
```

## License

MIT
