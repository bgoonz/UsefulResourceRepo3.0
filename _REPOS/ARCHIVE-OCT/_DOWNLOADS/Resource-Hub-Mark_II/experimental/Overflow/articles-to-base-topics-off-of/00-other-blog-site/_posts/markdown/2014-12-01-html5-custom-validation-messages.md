<!--


---
 "HTML5: custom validation messages"
excerpt: "HTML5: custom validation messages"
date: 2014-12-01 00:00:00 IST
updated: 2014-12-01 00:00:00 IST
categories: html5, javascript
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

### UPDATE : 2017/03/08

We have to clear the custom validity either using `oninput` or `onchange` event
to avoid an extra invalid loop with blank message. The snippets below is updated accordingly.

<hr />

By the introduction of HTML5 validations, things are really getting easy for the developers regarding the form validation. we can validate the inputs using the attributes itself. They usually have their on predefined validation message. What if we want our custom validation message. we always need it. right?

For the required attribute, the usual error message is "_Please fill out this field_". Let see how we can customize those messages.

Here is a simple form with number field `age` with required attribute, minimum is set to 1 and maximum value set to 150.

```html
<form action="">
  <label for="age"> Age </label>
  <input type="number" name="age" required="required" min="1" max="150" />
  <input type="submit" />
</form>
```

This form is invalid if age field is blank, non-number, less than or equal to zero and greater than 150. Every input have a **oninvalid** event handler in which we can assign a handler method, this method will be triggered when value in this input is invalid.

```js
document.addEventListener("DOMContentLoaded", function () {
  var invalid = function (e) {};

  var age_element = document.getElementsByName("age");
  age_element[0].oninvalid = invalid;
});
```

This is just like any other event handle like `click`, `mouseover`, `mouseout` etc. The event object will be passed to the handler. From the event object we will get the target element using `e.target`. Now the target will have a property named `validity` which is an object of `ValidityState`. The `ValidityState` object will have all the errors types with a boolean value.

```js
[object ValidityState] {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  typeMismatch: false,
  valid: false,
  valueMissing: false
}
```

If the required attribute of an element is violated, then `valueMissing` will be `true`. So now we have a way to identify which validation is violated. Now we need a way to set custom message.

The target element have `setCustomValidity` method to set the validation message. It accepts a string argument which is our custom message. SO now we can customize the `valueMissing` (required) error as follows.

```js
document.addEventListener("DOMContentLoaded", function () {
  var invalid = function (e) {
    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity("Value Missing");
      return;
    }
  };

  var age_element = document.getElementsByName("age");
  age_element[0].oninvalid = invalid;
  age_element[0].oninput = function (e) {
    e.target.setCustomValidity("");
  };
});
```

Set `setCustomValidity` to empty string on `oninput` or `onchange` event to clear the custom validity message.
After settings the custom message for other errors our code will look like

```js
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
  var invalid = function (e) {
    if (e.target.validity.badInput) {
      e.target.setCustomValidity("Only Integer");
      return;
    }
    if (e.target.validity.rangeOverflow) {
      e.target.setCustomValidity("max value 150");
      return;
    }
    if (e.target.validity.rangeUnderflow) {
      e.target.setCustomValidity("min value 1");
      return;
    }
    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity("Value Missing");
      return;
    }
  };

  var age_element = document.getElementsByName("age");
  age_element[0].oninvalid = invalid;
  age_element[0].oninput = function (e) {
    e.target.setCustomValidity("");
  };
});
```

If you want to see this in action here is the jsbin.

<a class="jsbin-embed" href="http://jsbin.com/xameda/embed?js,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

Hope you enjoyed the post. Let me know if you have any feedback or corrections.
Thank You.
