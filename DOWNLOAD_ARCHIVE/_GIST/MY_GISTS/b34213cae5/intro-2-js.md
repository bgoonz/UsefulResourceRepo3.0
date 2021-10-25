# Introduction

JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible---applications with which you can interact directly without doing a page reload for every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.

It is important to note that JavaScript has almost nothing to do with the programming language named Java. The similar name was inspired by marketing considerations rather than good judgment. When JavaScript was being introduced, the Java language was being heavily marketed and was gaining popularity. Someone thought it was a good idea to try to ride along on this success. Now we are stuck with the name.

# Variables

The latest ECMAScript(ES6) standard defines seven data types: Out of which six data types are Primitive(predefined).

- Numbers: 1, 6.5, 7 etc.
- String: `Hello NoobMaster69` etc.
- Boolean: Represent a logical entity and can have two values: true or false.
- Null: This type has only one value : null.
- Undefined: A variable that has not been assigned a value is undefined.
- Object: It is the most important data-type and forms the building blocks for modern JavaScript. We will learn about these data types in details in further articles.

# Variables in JavaScript are containers which hold reusable data. It is the basic unit of storage in a program

- The value stored in a variable can be changed during program execution.
- A variable is only a name given to a memory location, all the operations done on the variable effects that memory location.
- In JavaScript, all the variables must be declared before they can be used.

Before ES2015, JavaScript variables were solely declared using the var keyword followed by the name of the variable and semi-colon.

We can initialize the variables either at the time of declaration or also later when we want to use them. Below are some examples of declaring and initializing variables in JavaScript:

```js
/* declaring single variable */
let name;

/* declaring multiple variables */
let name, title, num;

/* initializng variables */
let name = `Lasha`;
name = `Lasha`;
```

After ES2015, we now have two new variable containers : let and const. Now we shall look at both of them one by one. The variable type Let shares lots of similarities with var but unlike var it has scope constraints. Let's make use of let variable:

```js
/* let variable */
let x; // undefined
let name = `Lasha`;

/* declaring multiple values */
let a = 1,
  b = 2,
  c = 3;

/* assigment */
let a = 3;
a = `Lasha`; // works same as var
```

# Constants

**Constants are block-scoped, much like variables defined using the let statement. The value of a constant can't be changed through reassignment, and it can't be redeclared.**

> Naming a const in JavaScript follow the same rule of naming a variable, except that the const keyword is always required, even for global constants.

```js
/* const variable */
const name = `Lasha`;
name = `Selly`; // will give us an error
```

# What is Scope?

Scope determines the visibility or accessibility of a variable or other resource in the area of your code.

There's only one Global scope in the JavaScript document. The area outside all the functions is consider the global scope and the variables defined inside the global scope can be accessed and altered in any other scopes.

```js
/* global scope */
let fruit = `apple`;
console.log(fruit); // apple

function getFruit() {
  /* fruit is accesable here */
  console.log(fruit);
}

getFruit(); // apple
```

Variables declared inside the functions become Local to the function and are considered in the corresponding local scope. Every Functions has its own scope. Same variable can be used in different functions because they are bound to the respective functions and are not mutual visible.

```js
function foo1() {
  /* local scope 1 */
  function foo2() {
    /* local scope 2 */
  }
}
/* global scope */
function foo3() {
  /* local scope 3 */
}
/* global scope */
```

Local scope can be divided into function scope and block scope. The concept of block scope is introduced in ES2015 together with the new ways to declare variables -- const and let.

# Objects

Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object.

```js
const myCar = new Object();
myCar.make = `Ford`;
myCar.model = `Mustang`;
myCar.year = 1969;
```

Unassigned properties of an object are undefined (and not null).

```js
myCar.color; /* undefined */
```

An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string. However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation. This notation is also very useful when property names are to be dynamically determined (when the property name is not determined until runtime).

Examples are as follows:

```js
/* four variables are created and assigned in a single go, separated by commas */
const myObj = new Object(),
  str = `myString`,
  rand = Math.random(),
  obj = new Object();

myObj.type = `Dot syntax`;
myObj[`date created`] = `String with space`;
myObj[str] = `String value`;
myObj[rand] = `Random Number`;
myObj[obj] = `Object`;
myObj[``] = `Even an empty string`;

console.log(myObj);
```

# **Arrays**

An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of anime series, for example), storing the animes in single variables could look like this:

```js
const anime1 = `One Piece`;
const anime2 = `Steins;Gate`;
const anime3 = `Berserk`;
```

However, what if you want to loop through the animes and find a specific one? And what if you had not 3 animes, but 300? The solution is an array! An array can hold many values under a single name, and you can access the values by referring to an index number.

```js
const animes = [`One Piece`, `Steins;Gate`, `Berserk`];
```

You access an array element by referring to the index number.This statement accesses the value of the first element in animes:

Note: Array indexes start with 0. [0] is the first element. [1] is the second element.

```js
const name1 = animes[0]; // One Piece
const name2 = animes[1]; // Steins;Gate
const name3 = animes[2]; // Berserk
```

The length property of an array returns the length of an array (the number of array elements).

```js
const fruits = [`Banana`, `Orange`, `Apple`, `Kiwi`];
fruits.length; // the length of fruits is 4
```

# **Comparison Operators**

In most of my JavaScript interviews for a Front-End Developer position, I have been asked this exact question. What is the difference between comparing variables using `==` and `===` operator?

We will see couple of example of both operator in this article, to understand difference between them much better.

Since JavaScript support both strict equality and type-converting equality, it's important to know which operator is used for which operation. As I said that, === takes type of variable in consideration, while == make type correction based upon values of variables, following are couple of more differences between `==` and `===` operator in JavaScript programming language :

`==` operator is known as type coercion operator and anytime if both values are same and compared using ==operator, type coercion happens. On the other hand === is known as strictly equality operator. It's much similar Java's equality operator (==), which gives compilation error if you compare two variables, whose types are not compatible to each other. In fact, you should always use `===` operator for comparing variables or just for any comparison.

When we compare two variables of different type e.g. a boolean with a string or a number with String using == operator, it automatically converts one type into another and return value based upon content equality. This will be much clear with following example of == and === operator in JavaScript :

```js
0 == false; // true, because false is equivalent of 0
0 === false; // false, because both operands are of different type
2 == `2`; // true, auto type coercion, string converted into number
2 === `2`; // false, since both operands are not of same type
```

# **What** is a Closure?

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function. The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

In JavaScript, closures are the primary mechanism used to enable data privacy. When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can't get at the data from an outside scope except through the object's privileged methods.

In JavaScript, any exposed method defined within the closure scope is privileged.

The easiest example would be :

```js
var passed = 3;

var addTo = function () {
  var inner = 2;
  return passed + inner;
};

console.log(addTo(3)); // 5
```

Here is the same function using ES2015 syntax:

```js
const passed = 3;

const addTo = () => {
  const inner = 2;
  return passed + inner;
};

console.log(addTo(3)); // 5
```
