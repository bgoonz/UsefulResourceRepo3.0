<a href="/categories/coding/" class="category-link">Coding</a>

# Overview of JavaScript ES6 features (a.k.a ECMAScript 6 and ES2015+)

<span title="Last time this post was updated"> Last updated October 25th 2016 </span> <span class="m-x-2" title="Pageviews"> 60.7k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/Overview-of-JavaScript-ES6-features-a-k-a-ECMAScript-6-and-ES2015/">0</span>](#disqus_thread) </span>

- <a href="/tags/javascript-es6/" class="tag-list-link">javascript es6</a><span class="tag-list-count">1</span>

![Overview of JavaScript ES6 features (a.k.a ECMAScript 6 and ES2015+)](/images/es6-core-features-overview-large.png)

JavaScript has changed quite a bit in the last years. These are 12 new features that you can start using today!

## <a href="#JavaScript-History" class="headerlink" title="JavaScript History"></a>JavaScript History

The new additions to the language are called ECMAScript 6. It is also referred as ES6 or ES2015+.

Since JavaScript conception on 1995, it has been evolving slowly. New additions happened every few years. ECMAScript came to be in 1997 to guide the path of JavaScript. It has been releasing versions such as ES3, ES5, ES6 and so on.

![](/images/history-javascript-evolution-es6.png "History of JavaScript Evolution")

As you can see, there are gaps of 10 and 6 years between the ES3, ES5, and ES6. The new model is to make small incremental changes every year. Instead of doing massive changes at once like happened with ES6.

## <a href="#Browsers-Support" class="headerlink" title="Browsers Support"></a>Browsers Support

All modern browser and environments support ES6 already!

![](/images/es6-javascript-support.png "ES6 Support")

<span class="small">source: <https://kangax.github.io/compat-table/es6/></span>

Chrome, MS Edge, Firefox, Safari, Node and many others have already built-in support for most of the features of JavaScript ES6. So, everything that you are going to learn in this tutorial you can start using it right now.

Let’s get started with ECMAScript 6!

## <a href="#Core-ES6-Features" class="headerlink" title="Core ES6 Features"></a>Core ES6 Features

You can test all these code snippets on your browser console!

![](/images/javascript-es6-classes-on-browser-console.png "Testing Javascript ES6 classes on browser console")

So don’t take my word and test every ES5 and ES6 example. Let’s dig in 💪

### <a href="#Block-scope-variables" class="headerlink" title="Block scope variables"></a>Block scope variables

With ES6, we went from declaring variables with `var` to use `let`/`const`.

What was wrong with `var`?

The issue with `var` is the variable leaks into other code block such as `for` loops or `if` blocks.

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11</code></pre></td><td><pre><code>var x = &#39;outer&#39;;
function test(inner) {
  if (inner) {
    var x = &#39;inner&#39;; // scope whole function
    return x;
  }
  return x; // gets redefined because line 4 declaration is hoisted
}

test(false); // undefined 😱
test(true); // inner</code></pre></td></tr></tbody></table>

For `test(false)` you would expect to return `outer`, BUT NO, you get `undefined`.

Why?

Because even though the if-block is not executed, the expression `var x` in line 4 is hoisted.

> var **hoisting**:

- `var` is function scoped. It is availble in the whole function even before being declared.
- Declarations are Hoisted. So you can use a variable before it has been declared.
- Initializations are NOT hoisted. If you are using `var` ALWAYS declare your variables at the top.
- After applying the rules of hoisting we can understand better what’s happening:
  ES5
  <table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
  2
  3
  4
  5
  6
  7
  8
  9</code></pre></td><td><pre><code>var x = &#39;outer&#39;;
  function test(inner) {
    var x; // HOISTED DECLARATION
    if (inner) {
      x = &#39;inner&#39;; // INITIALIZATION NOT HOISTED
      return x;
    }
    return x;
  }</code></pre></td></tr></tbody></table>

ECMAScript 2015 comes to the rescue:

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11</code></pre></td><td><pre><code>let x = &#39;outer&#39;;
function test(inner) {
  if (inner) {
    let x = &#39;inner&#39;;
    return x;
  }
  return x; // gets result from line 1 as expected
}

test(false); // outer
test(true); // inner</code></pre></td></tr></tbody></table>

Changing `var` for `let` makes things work as expected. If the `if` block is not called the variable `x` doesn’t get hoisted out of the block.

> Let **hoisting** and “temporal dead zone”

- In ES6, `let` will hoist the variable to the top of the block (NOT at the top of function like ES5).
- However, referencing the variable in the block before the variable declaration results in a `ReferenceError`.
- `let` is blocked scoped. You cannot use it before it is declared.
- “Temporal dead zone” is the zone from the start of the block until the variable is declared.

**IIFE**

Let’s show an example before explaining IIFE. Take a look here:

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>{
  var private = 1;
}

console.log(private); // 1</code></pre></td></tr></tbody></table>

As you can see, `private` leaks out. You need to use IIFE (immediately-invoked function expression) to contain it:

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>(function(){
  var private2 = 1;
})();

console.log(private2); // Uncaught ReferenceError</code></pre></td></tr></tbody></table>

If you take a look at jQuery/lodash or other open source projects you will notice they have IIFE to avoid polluting the global environment and just defining on global such as `_`, `$` or `jQuery`.

On ES6 is much cleaner, We also don’t need to use IIFE anymore when we can just use blocks and `let`:

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>{
  let private3 = 1;
}

console.log(private3); // Uncaught ReferenceError</code></pre></td></tr></tbody></table>

**Const**

You can also use `const` if you don’t want a variable to change at all.

![](/images/javascript-es6-const-variables-example.png "const variable example")

> Bottom line: ditch `var` for `let` and `const`.

- Use `const` for all your references; avoid using `var`.
- If you must reassign references, use `let` instead of `const`.

### <a href="#Template-Literals" class="headerlink" title="Template Literals"></a>Template Literals

We don’t have to do more nesting concatenations when we have template literals. Take a look:

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>var first = &#39;Adrian&#39;;
var last = &#39;Mejia&#39;;
console.log(&#39;Your name is &#39; + first + &#39; &#39; + last + &#39;.&#39;);</code></pre></td></tr></tbody></table>

Now you can use backtick (\`) and string interpolation `${}`:

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>const first = &#39;Adrian&#39;;
const last = &#39;Mejia&#39;;
console.log(`Your name is ${first} ${last}.`);</code></pre></td></tr></tbody></table>

### <a href="#Multi-line-strings" class="headerlink" title="Multi-line strings"></a>Multi-line strings

We don’t have to concatenate strings + `\n` anymore like this:

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>var template = &#39;&lt;li *ngFor=&quot;let todo of todos&quot; [ngClass]=&quot;{completed: todo.isDone}&quot; &gt;\n&#39; +
&#39;  &lt;div class=&quot;view&quot;&gt;\n&#39; +
&#39;    &lt;input class=&quot;toggle&quot; type=&quot;checkbox&quot; [checked]=&quot;todo.isDone&quot;&gt;\n&#39; +
&#39;    &lt;label&gt;&lt;/label&gt;\n&#39; +
&#39;    &lt;button class=&quot;destroy&quot;&gt;&lt;/button&gt;\n&#39; +
&#39;  &lt;/div&gt;\n&#39; +
&#39;  &lt;input class=&quot;edit&quot; value=&quot;&quot;&gt;\n&#39; +
&#39;&lt;/li&gt;&#39;;
console.log(template);</code></pre></td></tr></tbody></table>

On ES6 we can use the backtick again to solve this:

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>const template = `&lt;li *ngFor=&quot;let todo of todos&quot; [ngClass]=&quot;{completed: todo.isDone}&quot; &gt;
  &lt;div class=&quot;view&quot;&gt;
    &lt;input class=&quot;toggle&quot; type=&quot;checkbox&quot; [checked]=&quot;todo.isDone&quot;&gt;
    &lt;label&gt;&lt;/label&gt;
    &lt;button class=&quot;destroy&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;input class=&quot;edit&quot; value=&quot;&quot;&gt;
&lt;/li&gt;`;
console.log(template);</code></pre></td></tr></tbody></table>

Both pieces of code will have exactly the same result.

### <a href="#Destructuring-Assignment" class="headerlink" title="Destructuring Assignment"></a>Destructuring Assignment

ES6 desctructing is very useful and consise. Follow this examples:

**Getting elements from an arrays**

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>var array = [1, 2, 3, 4];

var first = array[0];
var third = array[2];

console.log(first, third); // 1 3</code></pre></td></tr></tbody></table>

Same as:

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>const array = [1, 2, 3, 4];

const [first, ,third] = array;

console.log(first, third); // 1 3</code></pre></td></tr></tbody></table>

**Swapping values**

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>var a = 1;
var b = 2;

var tmp = a;
a = b;
b = tmp;

console.log(a, b); // 2 1</code></pre></td></tr></tbody></table>

same as

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b); // 2 1</code></pre></td></tr></tbody></table>

**Destructuring for multiple return values**

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>function margin() {
  var left=1, right=2, top=3, bottom=4;
  return { left: left, right: right, top: top, bottom: bottom };
}

var data = margin();
var left = data.left;
var bottom = data.bottom;

console.log(left, bottom); // 1 4</code></pre></td></tr></tbody></table>

In line 3, you could also return it in an array like this (and save some typing):

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>return [left, right, top, bottom];</code></pre></td></tr></tbody></table>

but then, the caller needs to think about the order of return data.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>var left = data[0];
var bottom = data[3];</code></pre></td></tr></tbody></table>

With ES6, the caller selects only the data they need (line 6):

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>function margin() {
  const left=1, right=2, top=3, bottom=4;
  return { left, right, top, bottom };
}

const { left, bottom } = margin();

console.log(left, bottom); // 1 4</code></pre></td></tr></tbody></table>

_Notice:_ Line 3, we have some other ES6 features going on. We can compact `{ left: left }` to just `{ left }`. Look how much concise it is compare to the ES5 version. Isn’t that cool?

**Destructuring for parameters matching**

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>var user = {firstName: &#39;Adrian&#39;, lastName: &#39;Mejia&#39;};

function getFullName(user) {
var firstName = user.firstName;
var lastName = user.lastName;

return firstName + &#39; &#39; + lastName;
}

console.log(getFullName(user)); // </code></pre></td></tr></tbody></table>

Same as (but more concise):

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>const user = {firstName: &#39;Adrian&#39;, lastName: &#39;Mejia&#39;};

function getFullName({ firstName, lastName }) {
return `${firstName} ${lastName}`;
}

console.log(getFullName(user)); // </code></pre></td></tr></tbody></table>

**Deep Matching**

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>function settings() {
  return { display: { color: &#39;red&#39; }, keyboard: { layout: &#39;querty&#39;} };
}

var tmp = settings();
var displayColor = tmp.display.color;
var keyboardLayout = tmp.keyboard.layout;

console.log(displayColor, keyboardLayout); // red querty</code></pre></td></tr></tbody></table>

Same as (but more concise):

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>function settings() {
  return { display: { color: &#39;red&#39; }, keyboard: { layout: &#39;querty&#39;} };
}

const { display: { color: displayColor }, keyboard: { layout: keyboardLayout }} = settings();

console.log(displayColor, keyboardLayout); // red querty</code></pre></td></tr></tbody></table>

This is also called object destructing.

As you can see, destructing is very useful and encourages good coding styles.

> Best practices:

- Use array destructing to get elements out or swap variables. It saves you from creating temporary references.
- Don’t use array destructuring for multiple return values, instead use object destructuring

### <a href="#Classes-and-Objects" class="headerlink" title="Classes and Objects"></a>Classes and Objects

With ECMAScript 6, We went from “constructor functions” 🔨 to “classes” 🍸.

> In JavaScript every single object has a prototype, which is another object. All JavaScript objects inherit their methods and properties from their prototype.

In ES5, we did Object Oriented programming (OOP) using constructor functions to create objects as follows:

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12</code></pre></td><td><pre><code>var Animal = (function () {
  function MyConstructor(name) {
    this.name = name;
  }
  MyConstructor.prototype.speak = function speak() {
    console.log(this.name + &#39; makes a noise.&#39;);
  };
  return MyConstructor;
})();

var animal = new Animal(&#39;animal&#39;);
animal.speak(); // animal makes a noise.</code></pre></td></tr></tbody></table>

In ES6, we have some syntax sugar. We can do the same with less boiler plate and new keywords such as `class` and `constructor`. Also, notice how clearly we define methods `constructor.prototype.speak = function ()` vs `speak()`:

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11</code></pre></td><td><pre><code>class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + &#39; makes a noise.&#39;);
  }
}

const animal = new Animal(&#39;animal&#39;);
animal.speak(); // animal makes a noise.</code></pre></td></tr></tbody></table>

As we saw, both styles (ES5/6) produces the same results behind the scenes and are used in the same way.

> Best practices:

- Always use `class` syntax and avoid manipulating the `prototype` directly. Why? because it makes the code more concise and easier to understand.
- Avoid having an empty constructor. Classes have a default constructor if one is not specified.

### <a href="#Inheritance" class="headerlink" title="Inheritance"></a>Inheritance

Building on the previous `Animal` class. Let’s say we want to extend it and define a `Lion` class

In ES5, It’s a little more involved with prototypal inheritance.

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19</code></pre></td><td><pre><code>var Lion = (function () {
  function MyConstructor(name){
    Animal.call(this, name);
  }

// prototypal inheritance
MyConstructor.prototype = Object.create(Animal.prototype);
MyConstructor.prototype.constructor = Animal;

MyConstructor.prototype.speak = function speak() {
Animal.prototype.speak.call(this);
console.log(this.name + &#39; roars 🦁&#39;);
};
return MyConstructor;
})();

var lion = new Lion(&#39;Simba&#39;);
lion.speak(); // Simba makes a noise.
// Simba roars.</code></pre></td></tr></tbody></table>

I won’t go over all details but notice:

- Line 3, we explicitly call `Animal` constructor with the parameters.
- Line 7-8, we assigned the `Lion` prototype to `Animal`‘s prototype.
- Line 11, we call the `speak` method from the parent class `Animal`.

In ES6, we have a new keywords `extends` and `super` <img src="/images/superman_shield.svg" alt="superman shield" width="25" height="25" />.

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>class Lion extends Animal {
  speak() {
    super.speak();
    console.log(this.name + &#39; roars 🦁&#39;);
  }
}

const lion = new Lion(&#39;Simba&#39;);
lion.speak(); // Simba makes a noise.
// Simba roars.</code></pre></td></tr></tbody></table>

Looks how legible this ES6 code looks compared with ES5 and they do exactly the same. Win!

> Best practices:

- Use the built-in way for inherintance with `extends`.

### <a href="#Native-Promises" class="headerlink" title="Native Promises"></a>Native Promises

We went from callback hell 👹 to promises 🙏

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14</code></pre></td><td><pre><code>function printAfterTimeout(string, timeout, done){
  setTimeout(function(){
    done(string);
  }, timeout);
}

printAfterTimeout(&#39;Hello &#39;, 2e3, function(result){
console.log(result);

// nested callback
printAfterTimeout(result + &#39;Reader&#39;, 2e3, function(result){
console.log(result);
});
});</code></pre></td></tr></tbody></table>

We have one function that receives a callback to execute when is `done`. We have to execute it twice one after another. That’s why we called the 2nd time `printAfterTimeout` in the callback.

This can get messy pretty quickly if you need a 3rd or 4th callback. Let’s see how we can do it with promises:

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15</code></pre></td><td><pre><code>function printAfterTimeout(string, timeout){
  return new Promise((resolve, reject) =&gt; {
    setTimeout(function(){
      resolve(string);
    }, timeout);
  });
}

printAfterTimeout(&#39;Hello &#39;, 2e3).then((result) =&gt; {
console.log(result);
return printAfterTimeout(result + &#39;Reader&#39;, 2e3);

}).then((result) =&gt; {
console.log(result);
});</code></pre></td></tr></tbody></table>

As you can see, with promises we can use `then` to do something after another function is done. No more need to keep nesting functions.

### <a href="#Arrow-functions" class="headerlink" title="Arrow functions"></a>Arrow functions

ES6 didn’t remove the function expressions but it added a new one called arrow functions.

In ES5, we have some issues with `this`:

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>var _this = this; // need to hold a reference

$(&#39;.btn&#39;).click(function(event){
\_this.sendData(); // reference outer this
});

$(&#39;.input&#39;).on(&#39;change&#39;,function(event){
this.sendData(); // reference outer this
}.bind(this)); // bind to outer this</code></pre></td></tr></tbody></table>

You need to use a temporary `this` to reference inside a function or use `bind`. In ES6, you can use the arrow function!

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>// this will reference the outer one
$(&#39;.btn&#39;).click((event) =&gt;  this.sendData());

// implicit returns
const ids = [291, 288, 984];
const messages = ids.map(value =&gt; `ID is ${value}`);</code></pre></td></tr></tbody></table>

### <a href="#For…of" class="headerlink" title="For…of"></a>For…of

We went from `for` to `forEach` and then to `for...of`:

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11</code></pre></td><td><pre><code>// for
var array = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;];
for (var i = 0; i &lt; array.length; i++) {
  var element = array[i];
  console.log(element);
}

// forEach
array.forEach(function (element) {
console.log(element);
});</code></pre></td></tr></tbody></table>

The ES6 for…of also allow us to do iterations.

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>// for ...of
const array = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;];
for (const element of array) {
    console.log(element);
}</code></pre></td></tr></tbody></table>

### <a href="#Default-parameters" class="headerlink" title="Default parameters"></a>Default parameters

We went from checking if the variable was defined to assign a value to `default parameters`. Have you done something like this before?

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11</code></pre></td><td><pre><code>function point(x, y, isFlag){
  x = x || 0;
  y = y || -1;
  isFlag = isFlag || true;
  console.log(x,y, isFlag);
}

point(0, 0) // 0 -1 true 😱
point(0, 0, false) // 0 -1 true 😱😱
point(1) // 1 -1 true
point() // 0 -1 true</code></pre></td></tr></tbody></table>

Probably yes, it’s a common pattern to check is the variable has a value or assign a default. Yet, notice there are some issues:

- Line 8, we pass `0, 0` and get `0, -1`
- Line 9, we pass `false` but get `true`.

If you have a boolean as a default parameter or set the value to zero, it doesn’t work. Do you know why??? I’ll tell you after the ES6 example ;)

With ES6, Now you can do better with less code!

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>function point(x = 0, y = -1, isFlag = true){
  console.log(x,y, isFlag);
}

point(0, 0) // 0 0 true
point(0, 0, false) // 0 0 false
point(1) // 1 -1 true
point() // 0 -1 true</code></pre></td></tr></tbody></table>

Notice line 5 and 6 we get the expected results. The ES5 example didn’t work. We have to check for `undefined` first since `false`, `null`, `undefined` and `0` are falsy values. We can get away with numbers:

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11</code></pre></td><td><pre><code>function point(x, y, isFlag){
  x = x || 0;
  y = typeof(y) === &#39;undefined&#39; ? -1 : y;
  isFlag = typeof(isFlag) === &#39;undefined&#39; ? true : isFlag;
  console.log(x,y, isFlag);
}

point(0, 0) // 0 0 true
point(0, 0, false) // 0 0 false
point(1) // 1 -1 true
point() // 0 -1 true</code></pre></td></tr></tbody></table>

Now it works as expected when we check for `undefined`.

### <a href="#Rest-parameters" class="headerlink" title="Rest parameters"></a>Rest parameters

We went from arguments to rest parameters and spread operator.

On ES5, it’s clumpsy to get an arbitrary number of arguments:

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>function printf(format) {
  var params = [].slice.call(arguments, 1);
  console.log(&#39;params: &#39;, params);
  console.log(&#39;format: &#39;, format);
}

printf(&#39;%s %d %.2f&#39;, &#39;adrian&#39;, 321, Math.PI);</code></pre></td></tr></tbody></table>

We can do the same using the rest operator `...`.

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>function printf(format, ...params) {
  console.log(&#39;params: &#39;, params);
  console.log(&#39;format: &#39;, format);
}

printf(&#39;%s %d %.2f&#39;, &#39;adrian&#39;, 321, Math.PI);</code></pre></td></tr></tbody></table>

### <a href="#Spread-operator" class="headerlink" title="Spread operator"></a>Spread operator

We went from `apply()` to the spread operator. Again we have `...` to the rescue:

> Reminder: we use `apply()` to convert an array into a list of arguments. For instance, `Math.max()` takes a list of parameters, but if we have an array we can use `apply` to make it work.

![](/images/javascript-math-apply-arrays.png "JavaScript Math apply for arrays")

As we saw in earlier, we can use `apply` to pass arrays as list of arguments:

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>Math.max.apply(Math, [2,100,1,6,43]) // 100</code></pre></td></tr></tbody></table>

In ES6, you can use the spread operator:

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>Math.max(...[2,100,1,6,43]) // 100</code></pre></td></tr></tbody></table>

Also, we went from `concat` arrays to use spread operator:

ES5

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>var array1 = [2,100,1,6,43];
var array2 = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;];
var array3 = [false, true, null, undefined];

console.log(array1.concat(array2, array3));</code></pre></td></tr></tbody></table>

In ES6, you can flatten nested arrays using the spread operator:

ES6

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>const array1 = [2,100,1,6,43];
const array2 = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;];
const array3 = [false, true, null, undefined];

console.log([...array1, ...array2, ...array3]);</code></pre></td></tr></tbody></table>

## <a href="#Conclusion" class="headerlink" title="Conclusion"></a>Conclusion

JavaScript has gone through a lot of changes. This article covers most of the core features that every JavaScript developer should know. Also, we cover some best practices to make your code more concise and easier to reason about.

If you think there are some other MUST KNOW feature let me know in the comments below and I will update this article.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2016-10-19-Overview-of-JavaScript-ES6-features-a-k-a-ECMAScript-6-and-ES2015.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/" class="article-nav-newer"><strong><em></em> newer</strong></a>

How you can change the world by learning Data Structures and Algorithms

<a href="/Angular-2-Tutorial-Create-a-CRUD-App-with-Angular-CLI-and-TypeScript/" class="article-nav-older"><strong>older <em></em></strong></a>

Angular Tutorial: Create a CRUD App with Angular CLI and TypeScript

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#JavaScript-History" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">JavaScript History</span></a>
2.  <a href="#Browsers-Support" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Browsers Support</span></a>
3.  <a href="#Core-ES6-Features" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Core ES6 Features</span></a>
    1.  <a href="#Block-scope-variables" class="toc-link"><span class="toc-number">3.1.</span> <span class="toc-text">Block scope variables</span></a>
    2.  <a href="#Template-Literals" class="toc-link"><span class="toc-number">3.2.</span> <span class="toc-text">Template Literals</span></a>
    3.  <a href="#Multi-line-strings" class="toc-link"><span class="toc-number">3.3.</span> <span class="toc-text">Multi-line strings</span></a>
    4.  <a href="#Destructuring-Assignment" class="toc-link"><span class="toc-number">3.4.</span> <span class="toc-text">Destructuring Assignment</span></a>
    5.  <a href="#Classes-and-Objects" class="toc-link"><span class="toc-number">3.5.</span> <span class="toc-text">Classes and Objects</span></a>
    6.  <a href="#Inheritance" class="toc-link"><span class="toc-number">3.6.</span> <span class="toc-text">Inheritance</span></a>
    7.  <a href="#Native-Promises" class="toc-link"><span class="toc-number">3.7.</span> <span class="toc-text">Native Promises</span></a>
    8.  <a href="#Arrow-functions" class="toc-link"><span class="toc-number">3.8.</span> <span class="toc-text">Arrow functions</span></a>
    9.  <a href="#For%E2%80%A6of" class="toc-link"><span class="toc-number">3.9.</span> <span class="toc-text">For…of</span></a>
    10. <a href="#Default-parameters" class="toc-link"><span class="toc-number">3.10.</span> <span class="toc-text">Default parameters</span></a>
    11. <a href="#Rest-parameters" class="toc-link"><span class="toc-number">3.11.</span> <span class="toc-text">Rest parameters</span></a>
    12. <a href="#Spread-operator" class="toc-link"><span class="toc-number">3.12.</span> <span class="toc-text">Spread operator</span></a>
4.  <a href="#Conclusion" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Conclusion</span></a>
