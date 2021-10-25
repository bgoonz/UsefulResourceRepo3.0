<!--


---
 'VueJS : update input value without losing cursor position'
excerpt: 'VueJS : update input value without losing cursor position'
date: 2018-11-07 00:05:00 IST
updated: 2018-11-07 00:05:00 IST
categories: vue
tags: vue
image: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/vue-cursor-jump-fix/cursor-jump-fixed.gif
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

In my recent project I came across a requirement which need to format the input value while typing. More preceisly I need to format the number into comma seperated format while the user types. In the first glance it seems to be easy, but when we tried one specific issue caught us.

The issue is when you format the value in input the cursor jumps to the end of input which gives bad experience for the user.

![demo cursor jump issue](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/vue-cursor-jump-fix/cursor-jump.gif)

This blog post will explain how we solved it and gave our users better experience. Since the blog post is regarding cursor postion, we won't go into the details on formatting the input value.

## <a class="anchor" name="capture-position" href="#capture-position"><i class="anchor-icon"></i></a>Capture current cursor position

To start first we will captiure the current position of cursor on every input change and keep this in state.

```html
<template>
  <input
    :value="formatedValue"
    @input="handleInput"
  />
</template>


<script>

import formatNumber from 'accounting-js/lib/formatNumber';
import unformat from 'accounting-js/lib/unformat';

export default {
  name: "CommaFormattedNumber",
  props: {
    value: {
      type: String,
      default: "",
      required: true,
    }
  },
  data() {
    return {
      formatedValue: this.processFormatting(this.value),
      position: 0,
    };
  },
  watch: {
    value() {
      this.formatedValue = this.processFormatting(this.value);
    }
  },
  methods: {
    handleInput(e) {
      this.prevValue = e.target.value;
      let targetValue = unformat(e.target.value);
      this.position = e.target.selectionStart;
      this.formatedValue = formatNumber(targetValue)
      this.$emit("input", this.formatedValue);
    },
    processFormatting(value) {
        // process formatting
    }
  }
};
</script>
```

The `CommaFormattedNumber` component will accept the value as prop, format as comma seperated and render in input. On input change we will get the cursor position using `e.target.selectionStart` and seti it in the state.


## <a class="anchor" name="using-directives" href="#using-directives"><i class="anchor-icon"></i></a>Using custom directives

Now we have the current position of the cursor in the state, Next we need to set the cursor postion on input using `selectionEnd` after the VNode update. This can be achieved using [custom directives][custom_directives] in VueJS. 

The VueJs directives have `update` hook function which we use for this. But there is a catch. we can't access the `this` object inside the update. It will receive the element which is updated as the first argument. Since there is no `this` we can't get the `this.position` in update. To by-pass this we decided to set the `position` as data attribute to input element.

```html
<template>
  <input
    :value="formatedValue"
    @input="handleInput"
    :data-position="position"
  />
</template>
```

Now we have the `position` of cursor available inside the `update` method and can be accessed as `e.dataset.position`.

```html
<script>

import formatNumber from 'accounting-js/lib/formatNumber';
import unformat from 'accounting-js/lib/unformat';

export default {
  name: "CommaFormattedNumber",
  props: {
    value: {
      type: String,
      default: "",
      required: true,
    }
  },
  data() {
    return {
      formatedValue: this.processFormatting(this.value),
      position: 0,
    };
  },
  directives: {
    formatWithComma: {
      update(e) {
        if (e.selectionEnd !== e.dataset.position) {
          e.selectionEnd = Number(e.dataset.position);
        }
      }
    }
  },
  // other methods and watch
};
</script>
```

This will give basic fix, but needed some corner case handling etc which I skipped here. The full code is available on [codesandbox][codesandbox]

![demo cursor jump fixed](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/vue-cursor-jump-fix/cursor-jump-fixed.gif)

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0ovwj219kp?module=%2Fsrc%2Fcomponents%2FCommaFormattedNumber.vue&view=preview)

This is now published as a node module [vue-comma-formatted-number][vue_comma_formatted_number]

[custom_directives]: https://vuejs.org/v2/guide/custom-directive.html
[codesandbox]: https://codesandbox.io/s/0ovwj219kp
[vue_comma_formatted_number]:https://www.npmjs.com/package/vue-comma-formatted-number
