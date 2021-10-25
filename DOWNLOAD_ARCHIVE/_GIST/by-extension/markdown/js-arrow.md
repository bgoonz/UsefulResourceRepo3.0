# Introduction to JavaScript arrow functions

---

---

---

---

# FROM MDN DOCS:

<details>
<summary>====>Arrow Functions<=======</summary>
**Differences & Limitations:**

- Does not have its own bindings to
  [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) or [`super`](/en-US/docs/Web/JavaScript/Reference/Operators/super),
  and should not be used as [`methods`](/en-US/docs/Glossary/Method).
- Does not have [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target) keyword.
- Not suitable for
  [`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call),
  [`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
  and [`bind`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
  methods, which generally rely on establishing a [scope](/en-US/docs/Glossary/Scope).
- Can not be used as [constructors](/en-US/docs/Glossary/Constructor).
- Can not use [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield), within its body.

{{EmbedInteractiveExample("pages/js/functions-arrow.html")}}

### Comparing traditional functions to arrow functions

Let's decompose a "traditional anonymous function" down to the simplest "arrow function" step-by-step:

> **Note:** Each step along the way is a valid "arrow function".

```js
// Traditional Anonymous Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```

> **Note:** As shown above, the { braces } and ( parentheses ) and "return" are required in some cases.

For example, if you have **multiple arguments** or **no
arguments**, you'll need to re-introduce parentheses around the arguments:

```js
// Traditional Anonymous Function
function (a, b){
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Anonymous Function (no arguments)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;
```

Likewise, if the body requires **additional lines** of processing, you'll
need to re-introduce braces **PLUS the "return"** (arrow functions do not
magically guess what or when you want to "return"):

```js
// Traditional Anonymous Function
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
```

And finally, for **named functions** we treat arrow expressions like
variables:

```js
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
let bob = (a) => a + 100;
```

## Syntax

### Basic syntax

One param. With simple expression return is not needed:

```js
(param) => expression;
```

Multiple params require parentheses. With simple
expression return is not needed:

```js
(param1, paramN) => expression;
```

Multiline statements require body braces and return:

```js
(param) => {
  let a = 1;
  return a + param;
};
```

Multiple params require parentheses. Multiline statements
require body braces and return:

```js
(param1, paramN) => {
  let a = 1;
  return a + param1 + paramN;
};
```

### Advanced syntax

To return an object literal expression requires
parentheses around expression:

```js
(params) => ({ foo: "a" }); // returning the object {foo: "a"}
```

[Rest
parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) are supported:

```js
(a, b, ...r) => expression;
```

[Default
parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) are supported:

```js
(a = 400, b = 20, c) => expression;
```

[Destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
within params supported:

```js
([a, b] = [10, 20]) => a + b; // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30
```

## Description

### Arrow functions used as methods

As stated previously, arrow function expressions are best suited for non-method
functions. Let's see what happens when we try to use them as methods:

```js
"use strict";

var obj = {
  // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```

Arrow functions do not have their own `this`. Another example involving
{{jsxref("Object.defineProperty()")}}:

```js
"use strict";

var obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window {...} (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  },
});
```

### call, apply and bind

The
[`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call),
[`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
and [`bind`
](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)methods are **NOT suitable** for Arrow functions -- as they were
designed to allow methods to execute within different scopes -- because **Arrow
functions establish "this" based on the scope the Arrow function is defined
within.**

For example
[`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call),
[`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
and [`bind`
](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)work as expected with Traditional functions, because we establish the scope for each
of the methods:

```js
// ----------------------
// Traditional Example
// ----------------------
// A simplistic object with its very own "this".
var obj = {
  num: 100,
};

// Setting "num" on window to show how it is NOT used.
window.num = 2020; // yikes!

// A simple traditional function to operate on "this"
var add = function (a, b, c) {
  return this.num + a + b + c;
};

// call
var result = add.call(obj, 1, 2, 3); // establishing the scope as "obj"
console.log(result); // result 106

// apply
const arr = [1, 2, 3];
var result = add.apply(obj, arr); // establishing the scope as "obj"
console.log(result); // result 106

// bind
var result = add.bind(obj); // establishing the scope as "obj"
console.log(result(1, 2, 3)); // result 106
```

With Arrow functions, since our `add` function is essentially created on the
`window` (global) scope, it will assume `this` is the window.

```js
// ----------------------
// Arrow Example
// ----------------------

// A simplistic object with its very own "this".
var obj = {
  num: 100,
};

// Setting "num" on window to show how it gets picked up.
window.num = 2020; // yikes!

// Arrow Function
var add = (a, b, c) => this.num + a + b + c;

// call
console.log(add.call(obj, 1, 2, 3)); // result 2026

// apply
const arr = [1, 2, 3];
console.log(add.apply(obj, arr)); // result 2026

// bind
const bound = add.bind(obj);
console.log(bound(1, 2, 3)); // result 2026
```

Perhaps the greatest benefit of using Arrow functions is with DOM-level methods
(setTimeout, setInterval, addEventListener) that usually required some kind of closure,
call, apply or bind to ensure the function executed in the proper scope.

**Traditional Example:**

```js
var obj = {
  count: 10,
  doSomethingLater: function () {
    setTimeout(function () {
      // the function executes on the window scope
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // console prints "NaN", because the property "count" is not in the window scope.
```

**Arrow Example:**

```js
var obj = {
  count: 10,
  doSomethingLater: function () {
    // The traditional function binds "this" to the "obj" context.
    setTimeout(() => {
      // Since the arrow function doesn't have its own binding and
      // setTimeout (as a function call) doesn't create a binding
      // itself, the "obj" context of the traditional function will
      // be used within.
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater();
```

### No binding of `arguments`

Arrow functions do not have their own [`arguments`
object](/en-US/docs/Web/JavaScript/Reference/Functions/arguments). Thus, in this example, `arguments` is a reference to the
arguments of the enclosing scope:

```js
var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 3 + 3 = 6
```

In most cases, using [rest
parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) is a good alternative to using an `arguments` object.

```js
function foo(n) {
  var f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### Use of the `new` operator

Arrow functions cannot be used as constructors and will throw an error when used with
`new`.

```js
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```

### Use of `prototype` property

Arrow functions do not have a `prototype` property.

```js
var Foo = () => {};
console.log(Foo.prototype); // undefined
```

### Use of the `yield` keyword

The
[`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield)
keyword may not be used in an arrow function's body (except when permitted within
functions further nested within it). As a consequence, arrow functions cannot be used as
generators.

### Function body

Arrow functions can have either a "concise body" or the usual "block body".

In a concise body, only an expression is specified, which becomes the implicit return
value. In a block body, you must use an explicit `return` statement.

```js
var func = (x) => x * x;
// concise body syntax, implied "return"

var func = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed
```

### Returning object literals

Keep in mind that returning object literals using the concise body syntax
`params => {object:literal}` will not work as expected.

```js
var func = () => { foo: 1 };
// Calling func() returns undefined!

var func = () => { foo: function() {} };
// SyntaxError: function statement requires a name
```

This is because the code inside braces ({}) is parsed as a sequence of statements (i.e.
`foo` is treated like a label, not a key in an object literal).

You must wrap the object literal in parentheses:

```js
var func = () => ({ foo: 1 });
```

### Line breaks

An arrow function cannot contain a line break between its parameters and its arrow.

```js
var func = (a, b, c)
  => 1;
// SyntaxError: expected expression, got '=>'
```

However, this can be amended by putting the line break after the arrow or using
parentheses/braces as seen below to ensure that the code stays pretty and fluffy. You
can also put line breaks between arguments.

```js
var func = (a, b, c) => 1;

var func = (a, b, c) => 1;

var func = (a, b, c) => {
  return 1;
};

var func = (a, b, c) => 1;

// no SyntaxError thrown
```

### Parsing order

Although the arrow in an arrow function is not an operator, arrow functions have
special parsing rules that interact differently with [operator
precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) compared to regular functions.

```js
let callback;

callback = callback || function() {}; // ok

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments

callback = callback || (() => {});    // ok
```

## Examples

### Basic usage

```js
// An empty arrow function returns undefined
let empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

var simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

let max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter((v) => v % 2 == 0);
// [6, 0, 18]

var double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
    // ...
  })
  .then((b) => {
    // ...
  });

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);
```

</details>

---

---

---

---

<center>

![ZACH](https://miro.medium.com/max/1470/1*In49hWTEzZjOEZTQL78uTA.gif)

</center>

> ES6 arrow functions provide you with an alternative way to write a shorter syntax compared to the function expression.

**The following example defines a function expression that returns the sum of two numbers:**

---

```js
let add = function (x, y) {
  return x + y;
};

console.log(add(10, 20)); // 30
```

---

**The following example is equivalent to the above `add()` function expression but use an arrow function instead:**

---

```js
let add = (x, y) => x + y;

console.log(add(10, 20)); // 30;
```

---

**In this example, the arrow function has one expression `x + y` so it returns the result of the expression.**

**However, if you use the block syntax, you need to specify the `return` keyword:**

---

```js
let add = (x, y) => {
  return x + y;
};
```

---

**The  `typeof` operator returns `function` indicating the type of arrow function.**

---

```js
console.log(typeof add); // function
```

---

**The arrow function is also an instance of the [Function type](javascript-function-type/) as shown in the following example:**

---

```js
console.log(add instanceof Function); // true
```

---

### JavaScript arrow functions with multiple parameters

**If an arrow function has two or more parameters, you use the following syntax:**

---

```js



(p1, p2, ..., pn) => expression;
```

---

**The following expression:**

---

```js



=> expression
```

---

**is equivalent to the following expression:**

---

```js



=> { return expression; }
```

---

**For example, to [sort an array](javascript-array-sort/) of numbers in the descending order, you use the `sort()` method of the array object as follows:**

---

```js
let numbers = [4, 2, 6];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); // [6,4,2]
```

---

**The code is more concise with the arrow function syntax:**

---

```js
let numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log(numbers); // [6,4,2]
```

---

### JavaScript arrow functions with a single parameter

**If an arrow function takes a single parameter, you use the following syntax:**

---

```js
(p1) => {
  statements;
};
```

---

**Note that you can omit the parentheses as follows:**

---

```js
(p) => {
  statements;
};
```

---

**The following example uses an arrow function as an argument of the `[map()](/javascript-array-map/)` method that transforms an array of strings into an array of the string's lengths.**

---

```js
let names = ["John", "Mac", "Peter"];
let lengths = names.map((name) => name.length);

console.log(lengths);
```

---

## Output

```js
[4, 3, 5];
```

---

> Code language: JSON / JSON with Comments (json)

### JavaScript arrow functions with no parameter

> If the arrow function has no parameter, you need to use parentheses, like this:

---

```js
() => {
  statements;
};
```

---

## For example

```js
let logDoc = () => console.log(window.document);
logDoc();
```

---

#### Line break between parameter definition and arrow

> JavaScript doesn't allow you to have a line break between the parameter definition and the arrow (`=>`) in an arrow function.

## For example, the following code causes a `SyntaxError`

```js



let multiply = (x,y)
=> x * y;
```

---

_However, the following code works perfectly fine:_

---

```js
let multiply = (x, y) => x * y;
```

---

**JavaScript allows you to have line breaks between parameters as shown in the following example:**

---

```js
let multiply = (x, y) => x * y;
```

---

#### Statements & expressions in the arrow function body

#### **In JavaScript, an expression evaluates to a value as shown in the following example**

---

```js
10 + 20;
```

---

_A statement does a specific task such as:_

---

```js
**If (x === y) {
  console.log("x equals y");
}
```

---

**If you use an expression in the body of an arrow function, you don't need to use the curly braces.**

---

```js
let square = (x) => x * x;
```

---

**However, if you use a statement, you must wrap it inside a pair of curly braces as in the following example:#####**

---

```js
let except = (msg) => {
  throw msg;
};
```

---

#### JavaScript arrow functions and object literal

#### Consider the following example

---

```js
let setColor = function (color) {
  return { value: color };
};

let backgroundColor = setColor("Red");
console.log(backgroundColor.value); // "Red"
```

---

**The `setColor()` function expression returns an object that has the `value` property set to the `color` argument.**

**If you use the following syntax to return an object literal from an arrow function, you will get an error.**

---

```js
(p) => {
  object: literal;
};
```

---

## For example, the following code causes an error

```js
let setColor = (color) => {
  value: color;
};
```

---

\*\*Since both block and object literal use curly brackets, the JavasScript engine cannot distinguish between a block and an object.

## To fix this, you need to wrap the object literal in parentheses as follows

```js
let setColor = (color) => ({ value: color });
```

---

#### Arrow function vs. regular function

##### There are two main differences between an arrow function and a regular function

1. First, in the arrow function, the `this` are lexical. It means that the arrow function uses these variables (or constructs) from the enclosing lexical scope.
2. Second, an arrow function cannot be used as a function constructor. If you use the `new` keyword to create a new object from an arrow function, you will get an error.

---

---

# _**More On THIS**_

<details>
<summary>_**More On THIS**_</summary>

Summary: in this tutorial, you will  learn about the JavaScript `this` value and understand it clearly in various contexts.

##### If you have been working with other programming languages such as C++, Java, and [PHP](https://www.phptutorial.net/php-oop/php-this/), you're already familiar with the `this` keyword

##### In these languages, the `this`keyword represents the instance of the current object in the method of the class. And the `this` keyword is only relevant within a method of the class, meaning that you cannot use it outside of a method

> JavaScript has the `this` keyword that behaves differently from other programming languages, which may confuse you at first.

#### **In JavaScript, you can use the `this` keyword in the [global and function contexts](/javascript-execution-context/). Moreover, the behavior of the  `this` keyword changes between strict and non-strict modes**

#### What is the `this` keyword

##### The `this` references the object of which the function is a property. In other words, the `this` references the object that is currently calling the function

Suppose that you have an object called `counter`. This object `counter` has a method called `next()`.

When you call the `next()` method, you can access the `this` object.

```js
const counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

counter.next();
```

---

Inside the `next()` function, the `this` references the `counter` object.

See the following method call:

```js
counter.next();
```

---

> Code language: CSS (css)

##### The `next()` is a function that is the property of the `counter` object. Therefore, inside the `next()` function, the `this` references the `counter` object

By the way, when a function is a property of an object, it is called a method.

#### Global context

##### In the global context, the `this` references the [global object](/es-next/javascript-globalthis/), which is the `window` object on the web browser or `global` object on Node.js

This behavior is consistent whether the strict mode is applied or not, like this:

```js
console.log(this === window); // true
```

---

##### If you assign a property to `this` object in the global context, JavaScript will add the property to the global object as shown in the following example

```js
this.color = "Red";
console.log(window.color); // 'Red'
```

---

#### Function context

#### **In JavaScript, you can invoke a [function](javascript-function/) in the following ways**

- [Function invocation](/javascript-this/#function_invocation)
- [Method invocation](/javascript-this/#method_invocation)
- [Constructor invocation](/javascript-this/#constructor_invocation)
- [Indirect invocation](/javascript-this/#indirect_invocation)

Each function invocation defines its own context, therefore, the `this` behaves differently than you may expect.

### 1) Simple function invocation

##### In the non-strict mode, the `this` references the global object when the function is called as follows

```js
function show() {
  console.log(this === window); // true
}

show();
```

---

When you call the `show()` function, the `this` references the [global object](/es-next/javascript-globalthis/), which is the `window` on the web browser and `global` on Node.js.

Calling the `show()` function is the same as:

```js
window.show();
```

---

##### In the strict mode, JavaScript sets the `this` to `undefined`. #### Consider the following example

```js
"use strict";

function show() {
  console.log(this === undefined);
}

show();
```

---

To set the strict mode, you can use the directive `"use strict"` at the beginning of the file.

##### If you want to apply the strict mode to a specific function only, you place it at the top of the function body

Note that the strict mode has been available since ECMAScript 5.1. The `strict` mode applies to both function and inner functions within the function. Here is an example:

```js
function show() {
  "use strict";
  console.log(this === undefined); // true

  function display() {
    console.log(this === undefined); // true
  }
  display();
}

show();
```

---

Output:

```js
true;
true;
```

---

##### In the `display()` inner function, The `this` also set to `undefined` as shown in the console

### 2) Method invocation

When you call a method of an object, JavaScript sets `this` to the object that owns the method. See the following `car` object:

```js
let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

console.log(car.getBrand()); // Honda
```

---

##### In this example, the `this` object in the `getBrand()` method references the `car` object

\*\*Since a method is a property of an object which is a value, you can store it in a variable.

```js
let brand = car.getBrand;
```

---

And then call the method via the variable

```js
console.log(brand()); // undefined
```

---

You get `undefined` instead of `"Honda"` because when you call a method without specifying its object, JavaScript sets `this` to the global object in non-strict mode and `undefined` in the strict mode.

To fix this issue, you use the `[bind()](/javascript-bind/)` method of the `Function.prototype` object. The `bind()` method creates a new function whose the `this` keyword is set to a specified value.

```js
let brand = car.getBrand.bind(car);
console.log(brand()); // Honda
```

---

##### In this example, when you call the `brand()` method, the `this` keyword is bound to the `car` object. For example

```js
let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

let bike = {
  brand: "Harley Davidson",
};

let brand = car.getBrand.bind(bike);
console.log(brand());
```

---

Output:

```js

Harley Davidson
```

---

##### In this example, the `bind()` method sets the `this` to the `bike` object, therefore, you see the value of the `brand` property of the `bike` object on the console

### 3) Constructor invocation

When you use the `new` keyword to create an instance of a function object, you use the function as a constructor.

##### The following example declares a `Car` function, then invokes it as a constructor

```js
function Car(brand) {
  this.brand = brand;
}

Car.prototype.getBrand = function () {
  return this.brand;
};

var car = new Car("Honda");
console.log(car.getBrand());
```

---

##### The expression `new Car('Honda')` is a constructor invocation of the `Car` function

> JavaScript creates a new object and sets `this` to the newly created object. This pattern works great with only one potential problem.

Now, you can invoke the `Car()` as a function or as a constructor. If you omit the `new` keyword as follows:

```js
var bmw = Car("BMW");
console.log(bmw.brand);
// => TypeError: Cannot read property 'brand' of undefined
```

---

\*\*Since the `this` value in the `Car()` sets to the global object, the `bmw.brand` returns `undefined`.

To make sure that the `Car()` function is always invoked using constructor invocation, you add a check at the beginning of the `Car()` function as follows:

```js
function Car(brand) {
  if (!(this instanceof Car)) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}
```

---

ES6 introduced a meta-property named [`new.target`](es6/javascript-new-target/) that allows you to detect whether a function is invoked as a simple invocation or as a constructor.

You can modify the `Car()` function that uses the `new.target` metaproperty as follows:

```js
function Car(brand) {
  if (!new.target) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}
```

---

### 4) Indirect Invocation

#### **In JavaScript, [functions are first-class citizens](/javascript-functions-are-first-class-citizens/). In other words, functions are objects, which are instances of the [Function type](javascript-function-type/)**

##### The `Function` type has two methods: `[call()](/javascript-call/)` and `[apply()](/javascript-apply-method/)` . These methods allow you to set the `this` value when calling a function. For example

```js
function getBrand(prefix) {
  console.log(prefix + this.brand);
}

let honda = {
  brand: "Honda",
};
let audi = {
  brand: "Audi",
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");
```

---

Output:

```js

It's a Honda
It's an Audi
```

---

##### In this example, we called the `getBrand()` function indirectly using the `call()` method of the `getBrand` function. We passed `honda` and  `audi` object as the first argument of the `call()` method, therefore, we got the corresponding brand in each call

##### The `apply()` method is similar to the `call()` method except that its second argument is an array of arguments

```js
getBrand.apply(honda, ["It's a "]); // "It's a Honda"
getBrand.apply(audi, ["It's an "]); // "It's a Audi"
```

---

#### Arrow functions

[ES6](es6/)introduced a new concept named [arrow function](es6/javascript-arrow-function/). In arrow functions, JavaScript sets the `this` lexically.

It means the arrow function does not create its own [execution context](/javascript-execution-context/) but inherits the `this` from the outer function where the arrow function is defined. See the following example:

```js
let getThis = () => this;
console.log(getThis() === window); // true
```

---

##### In this example, the `this` value is set to the global object i.e., `window` in the web browser

\*\*Since an arrow function does not create its own execution context, defining a method using an arrow function will cause an issue. For example:

```js
function Car() {
  this.speed = 120;
}

Car.prototype.getSpeed = () => {
  return this.speed;
};

var car = new Car();
car.getSpeed(); // TypeError
```

---

Inside the `getSpeed()` method, the `this` value reference the global object, not the `Car` object. Therefore the `car.getSpeed()` invocation causes an error because the global object does not have the `speed` property.

</details>

### JavaScript arrow functions and `this` value

#### **In JavaScript, a new function defines its own `this` value. However, it is not the case for the arrow function. See the following example**

---

```js
function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(function () {
      console.log(this.speed); // undefined
    }, 1000);
  };
}

let car = new Car();
car.speedUp(50);
```

---

Inside the anonymous function of the `[setTimeout()](/javascript-bom/javascript-settimeout/)` function, the `this.speed` is `undefined`. The reason is that the `this` of the [anonymous function](/javascript-anonymous-functions/) shadows the `this` of the `speedUp()` method.

## To fix this, you assign the `this` value to a variable that doesn't shadow inside the anonymous function as follows

```js
function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    let self = this;
    setTimeout(function () {
      console.log(self.speed);
    }, 1000);
  };
}

let car = new Car();
car.speedUp(50); // 50;
```

---

## Unlike an anonymous function, an arrow function captures the `this` value of the enclosing context instead of creating its own `this` context. The following code should work as expected

```js
function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(() => console.log(this.speed), 1000);
  };
}

let car = new Car();
car.speedUp(50); // 50;
```

---

### JavaScript arrow functions and the arguments object

## An arrow function doesn't have the `arguments` object. For example

```js
function show() {
  return (x) => x + arguments[0];
}

let display = show(10, 20);
let result = display(5);
console.log(result); // 15
```

---

##### The arrow function inside the `showMe()` function references the `arguments` object. However, this `arguments` object belongs to the `show()` function, not the arrow function

Also, an arrow function doesn't have the `[new.target](/es6/javascript-new-target/)` keyword.

### JavaScript arrow functions and the prototype property

## When you define a [function](/javascript-function/) using a `function` keyword, the function has a property called `[prototype](/javascript-prototype/)`

```js
function dump(message) {
  console.log(message);
}
console.log(dump.hasOwnProperty("prototype")); // true
```

---

**However, arrow functions don't have the `prototype` property:**

---

```js
let dump = (message) => console.log(message);
console.log(dump.hasOwnProperty("prototype")); // false
```

---

It is a good practice to use arrow functions for [callbacks](/javascript-callback/) and [closures](/javascript-closure/) because the syntax of arrow functions is cleaner.

#### Summary

- Use the `(...args) => expression;` to define an arrow function.
- Use the `(...args) => { statements }` to define an arrow function that has multiple statements.
- An arrow function doesn't have its binding to `this` or `super`.
- An arrow function doesn't have `arguments` object, `new.target` keyword, and `prototype` property.Introduction to JavaScript arrow functions

</details>

---

ES6 arrow functions provide you with an alternative way to write a shorter syntax compared to the function expression.

**The following example defines a function expression that returns the sum of two numbers:**

---

```js
let add = function (x, y) {
  return x + y;
};

console.log(add(10, 20)); // 30
```

---

**The following example is equivalent to the above `add()` function expression but use an arrow function instead:**

---

```js
let add = (x, y) => x + y;

console.log(add(10, 20)); // 30;
```

---

##### In this example, the arrow function has one expression `x + y` so it returns the result of the expression

**However, if you use the block syntax, you need to specify the `return` keyword:**

---

```js
let add = (x, y) => {
  return x + y;
};
```

---

**The  `typeof` operator returns `function` indicating the type of arrow function.**

---

```js
console.log(typeof add); // function
```

---

**The arrow function is also an instance of the [Function type](javascript-function-type/) as shown in the following example:**

---

```js
console.log(add instanceof Function); // true
```

---

### JavaScript arrow functions with multiple parameters

**If an arrow function has two or more parameters, you use the following syntax:**

---

```js



(p1, p2, ..., pn) => expression;
```

---

**The following expression:**

---

```js



=> expression
```

---

## is equivalent to the following expression

```js



=> { return expression; }
```

---

## For example, to [sort an array](javascript-array-sort/) of numbers in the descending order, you use the `sort()` method of the array object as follows

```js
let numbers = [4, 2, 6];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); // [6,4,2]
```

---

**The code is more concise with the arrow function syntax:**

---

```js
let numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log(numbers); // [6,4,2]
```

---

### JavaScript arrow functions with a single parameter

**If an arrow function takes a single parameter, you use the following syntax:#####**

---

```js
(p1) => {
  statements;
};
```

---

## Note that you can omit the parentheses as follows

```js
(p) => {
  statements;
};
```

---

**The following example uses an arrow function as an argument of the `[map()](/javascript-array-map/)` method that transforms an array of strings into an array of the string's lengths.**

---

```js
let names = ["John", "Mac", "Peter"];
let lengths = names.map((name) => name.length);

console.log(lengths);
```

---

## Output

```js
[4, 3, 5];
```

---

> Code language: JSON / JSON with Comments (json)

### JavaScript arrow functions with no parameter

> If the arrow function has no parameter, you need to use parentheses, like this:

---

```js
() => {
  statements;
};
```

---

## For example

```js
let logDoc = () => console.log(window.document);
logDoc();
```

---

#### Line break between parameter definition and arrow

> JavaScript doesn't allow you to have a line break between the parameter definition and the arrow (`=>`) in an arrow function.

## For example, the following code causes a `SyntaxError`

```js



let multiply = (x,y)
=> x * y;
```

---

**However, the following code works perfectly fine:**

---

```js
let multiply = (x, y) => x * y;
```

---

> JavaScript allows you to have line breaks between parameters as shown in the following example:

---

```js
let multiply = (x, y) => x * y;
```

---

## Statements & expressions in the arrow function body

#### **In JavaScript, an expression evaluates to a value as shown in the following example**

---

```js
10 + 20;
```

---

## A statement does a specific task such as

```js
**If (x === y) {
  console.log("x equals y");
}
```

---

**If you use an expression in the body of an arrow function, you don't need to use the curly braces.**

---

```js
let square = (x) => x * x;
```

---

**However, if you use a statement, you must wrap it inside a pair of curly braces as in the following example:**

---

```js
let except = (msg) => {
  throw msg;
};
```

---

#### JavaScript arrow functions and object literal

#### Consider the following example

---

```js
let setColor = function (color) {
  return { value: color };
};

let backgroundColor = setColor("Red");
console.log(backgroundColor.value); // "Red"
```

---

##### The `setColor()` function expression returns an object that has the `value` property set to the `color` argument

**If you use the following syntax to return an object literal from an arrow function, you will get an error.**

---

```js
(p) => {
  object: literal;
};
```

---

## For example, the following code causes an error

```js
let setColor = (color) => {
  value: color;
};
```

---

**Since both block and object literal use curly brackets, the JavasScript engine cannot distinguish between a block and an object.**

## To fix this, you need to wrap the object literal in parentheses as follows

```js
let setColor = (color) => ({ value: color });
```

---

#### Arrow function vs. regular function

##### There are two main differences between an arrow function and a regular function

> _**1. First, in the arrow function, the `[this](/javascript-this/)`, `arguments`, `super`, `[new.target](/es6/javascript-new-target/)` are lexical. It means that the arrow function uses these variables (or constructs) from the enclosing lexical scope. 2. Second, an arrow function cannot be used as a function constructor. If you use the `new` keyword to create a new object from an arrow function, you will get an error.**_

### JavaScript arrow functions and `this` value

#### **In JavaScript, a new function defines its own `this` value. However, it is not the case for the arrow function. See the following example**

---

```js
function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(function () {
      console.log(this.speed); // undefined
    }, 1000);
  };
}

let car = new Car();
car.speedUp(50);
```

---

**Inside the anonymous function of the `[setTimeout()](/javascript-bom/javascript-settimeout/)` function, the `this.speed` is `undefined`. The reason is that the `this` of the [anonymous function](/javascript-anonymous-functions/) shadows the `this` of the `speedUp()` method.**

## To fix this, you assign the `this` value to a variable that doesn't shadow inside the anonymous function as follows

```js
function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    let self = this;
    setTimeout(function () {
      console.log(self.speed);
    }, 1000);
  };
}

let car = new Car();
car.speedUp(50); // 50;
```

---

## Unlike an anonymous function, an arrow function captures the `this` value of the enclosing context instead of creating its own `this` context. The following code should work as expected

```js
function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(() => console.log(this.speed), 1000);
  };
}

let car = new Car();
car.speedUp(50); // 50;
```

---

### JavaScript arrow functions and the arguments object

## An arrow function doesn't have the `arguments` object. For example

```js
function show() {
  return (x) => x + arguments[0];
}

let display = show(10, 20);
let result = display(5);
console.log(result); // 15
```

---

##### The arrow function inside the `showMe()` function references the `arguments` object. However, this `arguments` object belongs to the `show()` function, not the arrow function

Also, an arrow function doesn't have the `[new.target](/es6/javascript-new-target/)` keyword.

### JavaScript arrow functions and the prototype property

## When you define a [function](/javascript-function/) using a `function` keyword, the function has a property called `[prototype](/javascript-prototype/)`

```js
function dump(message) {
  console.log(message);
}
console.log(dump.hasOwnProperty("prototype")); // true
```

---

**However, arrow functions don't have the `prototype` property:**

---

```js
let dump = (message) => console.log(message);
console.log(dump.hasOwnProperty("prototype")); // false
```

---

> It is a good practice to use arrow functions for [callbacks](/javascript-callback/) and [closures](/javascript-closure/) because the syntax of arrow functions is cleaner.

---

## Summary

- **Use the `(...args) => expression;` to define an arrow function.**
- **Use the `(...args) => { statements }` to define an arrow function**that has multiple statements.\*\*
- **An arrow function doesn't have its binding to `this` or `super`.**
- **An arrow function doesn't have `arguments` object, `new.target` keyword, and `prototype` property.**
