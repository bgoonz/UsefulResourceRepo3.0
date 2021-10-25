# line-clamp [![npm Version](http://img.shields.io/npm/v/line-clamp.svg?style=flat)](https://www.npmjs.com/package/line-clamp) [![Build Status](https://img.shields.io/travis/yuanqing/line-clamp.svg?branch=master&style=flat)](https://travis-ci.org/yuanqing/line-clamp)

> Line clamp a DOM element in vanilla JavaScript.

- Truncates in pure JavaScript; does *not* rely on [`-webkit-line-clamp`](https://css-tricks.com/line-clampin/)
- Works even if the given element contains nested DOM nodes
- Supports appending a custom string instead of an ellipsis (`…`)
- 477 bytes gzipped

## Usage

> [**Editable demo (CodePen)**](https://codepen.io/lyuanqing/pen/VQQVry)

HTML:

```html
<div class="line-clamp">
  Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit.
</div>
```

CSS:

```css
.line-clamp {
  width: 100px;
  line-height: 20px;
}
```

JavaScript:

```js
const element = document.querySelector('.line-clamp')
lineClamp(element, 3)
```

Boom:

```html
<div class="line-clamp" style="overflow: hidden; overflow-wrap: break-word; word-wrap: break-word;">
  Lorem ipsum dolor sit amet, <strong>consectetur…</strong>
</div>
```

### Limitations

- The element is assumed to have a pixel line-height, obtained via [`window.getComputedStyle`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle).

## API

```js
const lineClamp = require('line-clamp')
```

### lineClamp(element, lineCount [, options])

`options` is an optional object literal.

- Set `options.ellipsis` to change the string to be appended to the truncated text. Defaults to `…`.

See [Usage](#usage).

## Installation

Install via [yarn](https://yarnpkg.com):

```sh
$ yarn add line-clamp
```

Or [npm](https://npmjs.com):

```sh
$ npm install --save line-clamp
```

## Prior art

- [Clamp.js](https://github.com/josephschmitt/Clamp.js)
- [FTEllipsis](https://github.com/ftlabs/ftellipsis)
- [Shave](https://github.com/dollarshaveclub/shave)

## License

[MIT](LICENSE.md)
