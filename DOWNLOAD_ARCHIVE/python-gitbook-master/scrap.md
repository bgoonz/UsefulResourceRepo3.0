The V8 JavaScript Engine
========================

###### TABLE OF CONTENTS

V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.

V8 provides the runtime environment in which JavaScript executes. The DOM, and the other Web Platform APIs are provided by the browser.

The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.

The Node.js ecosystem is huge and thanks to V8 which also powers desktop apps, with projects like Electron.

[](https://nodejs.dev/learn/the-v8-javascript-engine#other-js-engines)Other JS engines
--------------------------------------------------------------------------------------

Other browsers have their own JavaScript engine:

-   Firefox has [**SpiderMonkey**](https://spidermonkey.dev/)
-   Safari has [**JavaScriptCore**](https://developer.apple.com/documentation/javascriptcore) (also called Nitro)
-   Edge was originally based on [**Chakra**](https://github.com/Microsoft/ChakraCore) but has more recently been [rebuilt using Chromium](https://support.microsoft.com/en-us/help/4501095/download-the-new-microsoft-edge-based-on-chromium) and the V8 engine.

and many others exist as well.

All those engines implement the [ECMA ES-262 standard](https://www.ecma-international.org/publications/standards/Ecma-262.htm), also called ECMAScript, the standard used by JavaScript.

[](https://nodejs.dev/learn/the-v8-javascript-engine#the-quest-for-performance)The quest for performance
--------------------------------------------------------------------------------------------------------

V8 is written in C++, and it's continuously improved. It is portable and runs on Mac, Windows, Linux and several other systems.

In this V8 introduction, we will ignore the implementation details of V8: they can be found on more authoritative sites (e.g. the [V8 official site](https://v8.dev/)), and they change over time, often radically.

V8 is always evolving, just like the other JavaScript engines around, to speed up the Web and the Node.js ecosystem.

On the web, there is a race for performance that's been going on for years, and we (as users and developers) benefit a lot from this competition because we get faster and more optimized machines year after year.

[](https://nodejs.dev/learn/the-v8-javascript-engine#compilation)Compilation
----------------------------------------------------------------------------

JavaScript is generally considered an interpreted language, but modern JavaScript engines no longer just interpret JavaScript, they compile it.

This has been happening since 2009, when the SpiderMonkey JavaScript compiler was added to Firefox 3.5, and everyone followed this idea.

JavaScript is internally compiled by V8 with **just-in-time** (JIT) **compilation** to speed up the execution.

This might seem counter-intuitive, but since the introduction of Google Maps in 2004, JavaScript has evolved from a language that was generally executing a few dozens of lines of code to complete applications with thousands to hundreds of thousands of lines running in the browser.

Our applications can now run for hours inside a browser, rather than being just a few form validation rules or simple scripts.

In this *new world*, compiling JavaScript makes perfect sense because while it might take a little bit more to have the JavaScript *ready*, once done it's going to be much more performant than purely interpreted code.


---

Run Node.js scripts from the command line
=========================================

The usual way to run a Node.js program is to run the `node` globally available command (once you install Node.js) and pass the name of the file you want to execute.

If your main Node.js application file is `app.js`, you can call it by typing:

```bash
node app.js
```
Above, you are explicitly telling the shell to run your script with `node`. You can also embed this information into your JavaScript file with a "shebang" line. The "shebang" is the first line in the file, and tells the OS which interpreter to use for running the script. Below is the first line of JavaScript:

```bash
#!/usr/bin/node
```
Above, we are explicitly giving the absolute path of interpreter. Not all operating systems have `node` in the bin folder, but all should have `env`. You can tell the OS to run `env` with node as parameter:

```bash
#!/usr/bin/env node
```
// your code

To use a shebang, your file should have executable permission. You can give `app.js` the executable permission by running:

```bash
chmod u+x app.js
```
While running the command, make sure you are in the same directory which contains the `app.js` file.


---

How to exit from a Node.js program
==================================

There are various ways to terminate a Node.js application.

When running a program in the console you can close it with `ctrl-C`, but what we want to discuss here is programmatically exiting.

Let's start with the most drastic one, and see why you're better off *not* using it.

The `process` core module provides a handy method that allows you to programmatically exit from a Node.js program: `process.exit()`.

When Node.js runs this line, the process is immediately forced to terminate.

This means that any callback that's pending, any network request still being sent, any filesystem access, or processes writing to `stdout` or `stderr` - all is going to be ungracefully terminated right away.

If this is fine for you, you can pass an integer that signals the operating system the exit code:


```js


process.exit(1)

```

By default the exit code is `0`, which means success. Different exit codes have different meaning, which you might want to use in your own system to have the program communicate to other programs.

You can read more on exit codes at <https://nodejs.org/api/process.html#process_exit_codes>

You can also set the `process.exitCode` property:


```js


process.exitCode  =  1

```

and when the program ends, Node.js will return that exit code.

A program will gracefully exit when all the processing is done.

Many times with Node.js we start servers, like this HTTP server:


```js


const express =  require('express')

const app =  express()

app.get('/',  (req, res)  =>  {

 res.send('Hi!')

})

app.listen(3000,  ()  =>  console.log('Server ready'))

```

> Express is a framework that uses the http module under the hood, app.listen() returns an instance of http. You would use https.createServer if you needed to serve your app using HTTPS, as app.listen only uses the http module.

This program is never going to end. If you call `process.exit()`, any currently pending or running request is going to be aborted. This is *not nice*.

In this case you need to send the command a SIGTERM signal, and handle that with the process signal handler:

> Note: `process` does not require a "require", it's automatically available.


```js


const express =  require('express')

const app =  express()

app.get('/',  (req, res)  =>  {

 res.send('Hi!')

})

const server = app.listen(3000,  ()  =>  console.log('Server ready'))

process.on('SIGTERM',  ()  =>  {

 server.close(()  =>  {

  console.log('Process terminated')

  })

})

```

> What are signals? Signals are a POSIX intercommunication system: a notification sent to a process in order to notify it of an event that occurred.

`SIGKILL` is the signal that tells a process to immediately terminate, and would ideally act like `process.exit()`.

`SIGTERM` is the signal that tells a process to gracefully terminate. It is the signal that's sent from process managers like `upstart` or `supervisord` and many others.

You can send this signal from inside the program, in another function:


```js


process.kill(process.pid,  'SIGTERM')

```

Or from another Node.js running program, or any other app running in your system that knows the PID of the process you want to terminate.

---

How to read environment variables from Node.js
==============================================

The `process` core module of Node.js provides the `env` property which hosts all the environment variables that were set at the moment the process was started.

The below code runs `app.js` and set `USER_ID` and `USER_KEY`.

```bash
USER_ID=239482  USER_KEY=foobar node app.js
```
That will pass the user `USER_ID` as **239482** and the `USER_KEY` as **foobar**. This is suitable for testing, however for production, you will probably be configuring some bash scripts to export variables.

> Note: `process` does not require a "require", it's automatically available.

Here is an example that accesses the `USER_ID` and `USER_KEY` environment variables, which we set in above code.


```js


process.env.USER_ID  // "239482"

process.env.USER_KEY  // "foobar"

```

In the same way you can access any custom environment variable you set.

If you have multiple environment variables in your node project, you can also create an `.env` file in the root directory of your project, and then use the [dotenv](https://www.npmjs.com/package/dotenv) package to load them during runtime.

```bash
# .env file

USER_ID="239482"

USER_KEY="foobar"

NODE_ENV="development"
```
In your js file


```js


require('dotenv').config();

process.env.USER_ID  // "239482"

process.env.USER_KEY  // "foobar"

process.env.NODE_ENV  // "development"

```


> You can also run your js file with `node -r dotenv/config index.js` command if you don't want to import the package in your code.

---

How to use the Node.js REPL
===========================

###### TABLE OF CONTENTS

The `node` command is the one we use to run our Node.js scripts:

```bash
node script.js
```
If we omit the filename, we use it in REPL mode:

```bash
node
```
> Note: REPL also known as Read Evaluate Print Loop is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution.

If you try it now in your terminal, this is what happens:

```bash
❯ node
```
>

the command stays in idle mode and waits for us to enter something.

> Tip: if you are unsure how to open your terminal, google "How to open terminal on \<your-operating-system>".

The REPL is waiting for us to enter some JavaScript code, to be more precise.

Start simple and enter

CONSOLEcopy

> console.log('test')

test

undefined

>

The first value, `test`, is the output we told the console to print, then we get `undefined` which is the return value of running `console.log()`.

We can now enter a new line of JavaScript.

[](https://nodejs.dev/learn/how-to-use-the-nodejs-repl#use-the-tab-to-autocomplete)Use the tab to autocomplete
--------------------------------------------------------------------------------------------------------------

The cool thing about the REPL is that it's interactive.

As you write your code, if you press the `tab` key the REPL will try to autocomplete what you wrote to match a variable you already defined or a predefined one.

[](https://nodejs.dev/learn/how-to-use-the-nodejs-repl#exploring-javascript-objects)Exploring JavaScript objects
----------------------------------------------------------------------------------------------------------------

Try entering the name of a JavaScript class, like `Number`, add a dot and press `tab`.

The REPL will print all the properties and methods you can access on that class:

[![Pressing tab reveals object properties](https://nodejs.dev/static/2b60eb9487f93b672da38e391d2e5e56/fcda8/tab.png "Pressing tab reveals object properties")](https://nodejs.dev/static/2b60eb9487f93b672da38e391d2e5e56/6937a/tab.png)

[](https://nodejs.dev/learn/how-to-use-the-nodejs-repl#explore-global-objects)Explore global objects
----------------------------------------------------------------------------------------------------

You can inspect the globals you have access to by typing `global.` and pressing `tab`:

[![Globals](https://nodejs.dev/static/c2bef52ca393ecb33846c54af34927a1/fcda8/globals.png "Globals")](https://nodejs.dev/static/c2bef52ca393ecb33846c54af34927a1/6937a/globals.png)

[](https://nodejs.dev/learn/how-to-use-the-nodejs-repl#the-_-special-variable)The _ special variable
----------------------------------------------------------------------------------------------------

If after some code you type `_`, that is going to print the result of the last operation.

[](https://nodejs.dev/learn/how-to-use-the-nodejs-repl#dot-commands)Dot commands
--------------------------------------------------------------------------------

The REPL has some special commands, all starting with a dot `.`. They are

-   `.help`: shows the dot commands help
-   `.editor`: enables editor mode, to write multiline JavaScript code with ease. Once you are in this mode, enter ctrl-D to run the code you wrote.
-   `.break`: when inputting a multi-line expression, entering the .break command will abort further input. Same as pressing ctrl-C.
-   `.clear`: resets the REPL context to an empty object and clears any multi-line expression currently being input.
-   `.load`: loads a JavaScript file, relative to the current working directory
-   `.save`: saves all you entered in the REPL session to a file (specify the filename)
-   `.exit`: exits the repl (same as pressing ctrl-C two times)

The REPL knows when you are typing a multi-line statement without the need to invoke `.editor`.

For example if you start typing an iteration like this:


```js


[1,  2,  3].forEach(num  =>  {


```

and you press `enter`, the REPL will go to a new line that starts with 3 dots, indicating you can now continue to work on that block.


```js


...  console.log(num)

...  })

```

If you type `.break` at the end of a line, the multiline mode will stop and the statement will not be executed.

---

Node.js, accept arguments from the command line
===============================================

You can pass any number of arguments when invoking a Node.js application using

```bash
node app.js
```
Arguments can be standalone or have a key and a value.

For example:

```bash
node app.js joe
```
or

```bash
node app.js name=joe
```
This changes how you will retrieve this value in the Node.js code.

The way you retrieve it is using the `process` object built into Node.js.

It exposes an `argv` property, which is an array that contains all the command line invocation arguments.

The first element is the full path of the `node` command.

The second element is the full path of the file being executed.

All the additional arguments are present from the third position going forward.

You can iterate over all the arguments (including the node path and the file path) using a loop:


```js


process.argv.forEach((val, index)  =>  {

  console.log(`${index}: ${val}`)

})

```

You can get only the additional arguments by creating a new array that excludes the first 2 params:


```js


const args = process.argv.slice(2)

```

If you have one argument without an index name, like this:

```bash
node app.js joe
```
you can access it using


```js


const args = process.argv.slice(2)

args[0]

```

In this case:

```bash
node app.js name=joe
```
`args[0]` is `name=joe`, and you need to parse it. The best way to do so is by using the [`minimist`](https://www.npmjs.com/package/minimist) library, which helps dealing with arguments:


```js


const args =  require('minimist')(process.argv.slice(2))

args['name']  //joe

```

Install the required `minimist` package using `npm` (lesson about the package manager comes [later on](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager)).

```bash
npm  install minimist
```
This time you need to use double dashes before each argument name:

```bash
node app.js --name=joe
```

---

Output to the command line using Node.js
========================================

###### TABLE OF CONTENTS

[](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs#basic-output-using-the-console-module)Basic output using the console module
-----------------------------------------------------------------------------------------------------------------------------------------------

Node.js provides a [`console` module](https://nodejs.org/api/console.html) which provides tons of very useful ways to interact with the command line.

It is basically the same as the `console` object you find in the browser.

The most basic and most used method is `console.log()`, which prints the string you pass to it to the console.

If you pass an object, it will render it as a string.

You can pass multiple variables to `console.log`, for example:


```js


const x =  'x'

const y =  'y'

console.log(x, y)

```

and Node.js will print both.

We can also format pretty phrases by passing variables and a format specifier.

For example:


```js


console.log('My %s has %d years',  'cat',  2)

```

-   `%s` format a variable as a string
-   `%d` format a variable as a number
-   `%i` format a variable as its integer part only
-   `%o` format a variable as an object

Example:


```js


console.log('%o',  Number)

```

[](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs#clear-the-console)Clear the console
-------------------------------------------------------------------------------------------------------

`console.clear()` clears the console (the behavior might depend on the console used)

[](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs#counting-elements)Counting elements
-------------------------------------------------------------------------------------------------------

`console.count()` is a handy method.

Take this code:

What happens is that `console.count()` will count the number of times a string is printed, and print the count next to it:

You can just count apples and oranges:


```js


const oranges =  ['orange',  'orange']

const apples =  ['just one apple']

oranges.forEach(fruit  =>  {

  console.count(fruit)

})

apples.forEach(fruit  =>  {

  console.count(fruit)

})

```

[](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs#reset-counting)Reset counting
-------------------------------------------------------------------------------------------------

The console.countReset() method resets counter used with console.count().

We will use the apples and orange example to demonstrate this.


```js


const oranges =  ['orange',  'orange']

const apples =  ['just one apple']

oranges.forEach(fruit  =>  {

  console.count(fruit)

})

apples.forEach(fruit  =>  {

  console.count(fruit)

})

console.countReset('orange')

oranges.forEach(fruit  =>  {

  console.count(fruit)

})

```

Notice how the call to `console.countReset('orange')` resets the value counter to zero.

[](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs#print-the-stack-trace)Print the stack trace
---------------------------------------------------------------------------------------------------------------

There might be cases where it's useful to print the call stack trace of a function, maybe to answer the question *how did you reach that part of the code?*

You can do so using `console.trace()`:


```js


const  function2  =  ()  =>  console.trace()

const  function1  =  ()  =>  function2()

function1()

```

This will print the stack trace. This is what's printed if we try this in the Node.js REPL:

```bash
Trace
```

```text
 at function2 (repl:1:33)

 at function1 (repl:1:25)

 at repl:1:1

 at ContextifyScript.Script.runInThisContext (vm.js:44:33)

 at REPLServer.defaultEval (repl.js:239:29)

 at bound (domain.js:301:14)

 at REPLServer.runBound [as eval]  (domain.js:314:12)

 at REPLServer.onLine (repl.js:440:10)

 at emitOne (events.js:120:20)

 at REPLServer.emit (events.js:210:7)
```
[](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs#calculate-the-time-spent)Calculate the time spent
---------------------------------------------------------------------------------------------------------------------

You can easily calculate how much time a function takes to run, using `time()` and `timeEnd()`


```js


const  doSomething  =  ()  =>  console.log('test')

const  measureDoingSomething  =  ()  =>  {

  console.time('doSomething()')

  //do something, and measure the time it takes

  doSomething()

  console.timeEnd('doSomething()')

}

measureDoingSomething()

```

[](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs#stdout-and-stderr)stdout and stderr
-------------------------------------------------------------------------------------------------------

As we saw console.log is great for printing messages in the Console. This is what's called the standard output, or `stdout`.

`console.error` prints to the `stderr` stream.

It will not appear in the console, but it will appear in the error log.

[](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs#color-the-output)Color the output
-----------------------------------------------------------------------------------------------------

You can color the output of your text in the console by using [escape sequences](https://gist.github.com/iamnewton/8754917). An escape sequence is a set of characters that identifies a color.

Example:


```js


console.log('\x1b[33m%s\x1b[0m',  'hi!')

```

You can try that in the Node.js REPL, and it will print `hi!` in yellow.

However, this is the low-level way to do this. The simplest way to go about coloring the console output is by using a library. [Chalk](https://github.com/chalk/chalk) is such a library, and in addition to coloring it also helps with other styling facilities, like making text bold, italic or underlined.

You install it with `npm install chalk`, then you can use it:


```js


const chalk =  require('chalk')

console.log(chalk.yellow('hi!'))

```

Using `chalk.yellow` is much more convenient than trying to remember the escape codes, and the code is much more readable.

Check the project link posted above for more usage examples.

[](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs#create-a-progress-bar)Create a progress bar
---------------------------------------------------------------------------------------------------------------

[Progress](https://www.npmjs.com/package/progress) is an awesome package to create a progress bar in the console. Install it using `npm install progress`

This snippet creates a 10-step progress bar, and every 100ms one step is completed. When the bar completes we clear the interval:


```js


const  ProgressBar  =  require('progress')

const bar =  new  ProgressBar(':bar',  { total:  10  })

const timer =  setInterval(()  =>  {

 bar.tick()

  if  (bar.complete)  {

  clearInterval(timer)

  }

},  100)

```

---

Accept input from the command line in Node.js
=============================================

How to make a Node.js CLI program interactive?

Node.js since version 7 provides the [`readline` module](https://nodejs.org/api/readline.html) to perform exactly this: get input from a readable stream such as the `process.stdin` stream, which during the execution of a Node.js program is the terminal input, one line at a time.


```js


const readline =  require('readline').createInterface({

 input: process.stdin,

 output: process.stdout

})

readline.question(`What's your name?`,  name  =>  {

  console.log(`Hi ${name}!`)

 readline.close()

})

```

This piece of code asks the username, and once the text is entered and the user presses enter, we send a greeting.

The `question()` method shows the first parameter (a question) and waits for the user input. It calls the callback function once enter is pressed.

In this callback function, we close the readline interface.

`readline` offers several other methods, and I'll let you check them out on the package documentation linked above.

If you need to require a password, it's best not to echo it back, but instead show a `*` symbol.

The simplest way is to use the [`readline-sync` package](https://www.npmjs.com/package/readline-sync) which is very similar in terms of the API and handles this out of the box.

A more complete and abstract solution is provided by the [Inquirer.js package](https://github.com/SBoudrias/Inquirer.js).

You can install it using `npm install inquirer`, and then you can replicate the above code like this:


```js


const inquirer =  require('inquirer')

var questions =  [

  {

 type:  'input',

 name:  'name',

 message:  "What's your name?"

  }

]

inquirer.prompt(questions).then(answers  =>  {

  console.log(`Hi ${answers['name']}!`)

})

```

Inquirer.js lets you do many things like asking multiple choices, having radio buttons, confirmations, and more.

It's worth knowing all the alternatives, especially the built-in ones provided by Node.js, but if you plan to take CLI input to the next level, Inquirer.js is an optimal choice.

---

Expose functionality from a Node.js file using exports
======================================================

Node.js has a built-in module system.

A Node.js file can import functionality exposed by other Node.js files.

When you want to import something you use


```js


const library =  require('./library')

```

to import the functionality exposed in the `library.js` file that resides in the current file folder.

In this file, functionality must be exposed before it can be imported by other files.

Any other object or variable defined in the file by default is private and not exposed to the outer world.

This is what the `module.exports` API offered by the [`module` system](https://nodejs.org/api/modules.html) allows us to do.

When you assign an object or a function as a new `exports` property, that is the thing that's being exposed, and as such, it can be imported in other parts of your app, or in other apps as well.

You can do so in 2 ways.

The first is to assign an object to `module.exports`, which is an object provided out of the box by the module system, and this will make your file export *just that object*:


```js


// car.js

const car =  {

 brand:  'Ford',

 model:  'Fiesta'

}

module.exports  = car

```


```js


// index.js

const car =  require('./car')

```

The second way is to add the exported object as a property of `exports`. This way allows you to export multiple objects, functions or data:


```js


const car =  {

 brand:  'Ford',

 model:  'Fiesta'

}

exports.car  = car

```

or directly


```js


exports.car  =  {

 brand:  'Ford',

 model:  'Fiesta'

}

```

And in the other file, you'll use it by referencing a property of your import:


```js


const items =  require('./items')

const car = items.car

```

or


```js


const car =  require('./items').car

```

What's the difference between `module.exports` and `exports`?

The first exposes the object it points to. The latter exposes *the properties* of the object it points to.

---

An introduction to the npm package manager
==========================================

###### TABLE OF CONTENTS

[](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager#introduction-to-npm)Introduction to npm
--------------------------------------------------------------------------------------------------------------

`npm` is the standard package manager for Node.js.

In January 2017 over 350000 packages were reported being listed in the npm registry, making it the biggest single language code repository on Earth, and you can be sure there is a package for (almost!) everything.

It started as a way to download and manage dependencies of Node.js packages, but it has since become a tool used also in frontend JavaScript.

There are many things that `npm` does.

> [**Yarn**](https://yarnpkg.com/en/) and [**pnpm**](https://pnpm.js.org/) are alternatives to npm cli. You can check them out as well.

[](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager#downloads)Downloads
------------------------------------------------------------------------------------------

`npm` manages downloads of dependencies of your project.

### [](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager#installing-all-dependencies)Installing all dependencies

If a project has a `package.json` file, by running

```bash
npm  install
```
it will install everything the project needs, in the `node_modules` folder, creating it if it's not existing already.

### [](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager#installing-a-single-package)Installing a single package

You can also install a specific package by running

```bash
npm  install  <package-name>
```
Furthermore, since npm 5, this command adds `<package-name>` to the `package.json` file *dependencies*. Before version 5, you needed to add the flag `--save`.

Often you'll see more flags added to this command:

-   `--save-dev` installs and adds the entry to the `package.json` file *devDependencies*
-   `--no-save` installs but does not add the entry to the `package.json` file *dependencies*
-   `--save-optional` installs and adds the entry to the `package.json` file *optionalDependencies*
-   `--no-optional` will prevent optional dependencies from being installed

Shorthands of the flags can also be used:

-   -S: --save
-   -D: --save-dev
-   -O: --save-optional

The difference between *devDependencies* and *dependencies* is that the former contains development tools, like a testing library, while the latter is bundled with the app in production.

As for the *optionalDependencies* the difference is that build failure of the dependency will not cause installation to fail. But it is your program's responsibility to handle the lack of the dependency. Read more about [optional dependencies](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#optionaldependencies).

### [](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager#updating-packages)Updating packages

Updating is also made easy, by running

CONSOLEcopy

npm update

`npm` will check all packages for a newer version that satisfies your versioning constraints.

You can specify a single package to update as well:

CONSOLEcopy

npm update <package-name>

[](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager#versioning)Versioning
--------------------------------------------------------------------------------------------

In addition to plain downloads, `npm` also manages **versioning**, so you can specify any specific version of a package, or require a version higher or lower than what you need.

Many times you'll find that a library is only compatible with a major release of another library.

Or a bug in the latest release of a lib, still unfixed, is causing an issue.

Specifying an explicit version of a library also helps to keep everyone on the same exact version of a package, so that the whole team runs the same version until the `package.json` file is updated.

In all those cases, versioning helps a lot, and `npm` follows the semantic versioning (semver) standard.

[](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager#running-tasks)Running Tasks
--------------------------------------------------------------------------------------------------

The package.json file supports a format for specifying command line tasks that can be run by using

CONSOLEcopy

npm run <task-name>

For example:


```js
on

{

  "scripts":  {

  "start-dev":  "node lib/server-development",

  "start":  "node lib/server-production"

  }

}

```

It's very common to use this feature to run Webpack:


```js
on

{

  "scripts":  {

  "watch":  "webpack --watch --progress --colors --config webpack.conf.js",

  "dev":  "webpack --progress --colors --config webpack.conf.js",

  "prod":  "NODE_ENV=production webpack -p --config webpack.conf.js",

  }

}

```

So instead of typing those long commands, which are easy to forget or mistype, you can run

CONSOLEcopy

$ npm run watch

$ npm run dev

$ npm run prod

---

Where does npm install the packages?
====================================

When you install a package using `npm` you can perform 2 types of installation:

-   a local install
-   a global install

By default, when you type an `npm install` command, like:

```bash
npm  install lodash
```
the package is installed in the current file tree, under the `node_modules` subfolder.

As this happens, `npm` also adds the `lodash` entry in the `dependencies` property of the `package.json` file present in the current folder.

A global installation is performed using the `-g` flag:

```bash
npm  install -g lodash
```
When this happens, npm won't install the package under the local folder, but instead, it will use a global location.

Where, exactly?

The `npm root -g` command will tell you where that exact location is on your machine.

On macOS or Linux this location could be `/usr/local/lib/node_modules`. On Windows it could be `C:\Users\YOU\AppData\Roaming\npm\node_modules`

If you use `nvm` to manage Node.js versions, however, that location would differ.

I, for example, use `nvm` and my packages location was shown as `/Users/joe/.nvm/versions/node/v8.9.0/lib/node_modules`.

---

How to use or execute a package installed using npm
===================================================

When you install a package into your `node_modules` folder using `npm` , or also globally, how do you use it in your Node.js code?

Say you install `lodash`, the popular JavaScript utility library, using

```bash
npm  install lodash
```
This is going to install the package in the local `node_modules` folder.

To use it in your code, you just need to import it into your program using `require`:


```js


const _ =  require('lodash')

```

What if your package is an executable?

In this case, it will put the executable file under the `node_modules/.bin/` folder.

One easy way to demonstrate this is [cowsay](https://www.npmjs.com/package/cowsay).

The cowsay package provides a command line program that can be executed to make a cow say something (and other animals as well 🦊).

When you install the package using `npm install cowsay`, it will install itself and a few dependencies in the `node_modules` folder:

[![The node_modules folder content](https://nodejs.dev/static/b245c50f5080dae16a2525fae0ba2c91/fcda8/node_modules-content.png "The node_modules folder content")](https://nodejs.dev/static/b245c50f5080dae16a2525fae0ba2c91/d2c2a/node_modules-content.png)

There is a hidden `.bin` folder, which contains symbolic links to the cowsay binaries:

[![The binary files](https://nodejs.dev/static/99830aefa055e247397de544ad7b7744/fcda8/binary-files.png "The binary files")](https://nodejs.dev/static/99830aefa055e247397de544ad7b7744/d2c2a/binary-files.png)

How do you execute those?

You can of course type `./node_modules/.bin/cowsay` to run it, and it works, but `npx`, included in the recent versions of `npm` (since 5.2), is a much better option. You just run:

```bash
npx cowsay
```
and `npx` will find the package location.

[![Cow says something](https://nodejs.dev/static/ad4f3d3a7464bb0f8a2845fe8e6588c2/fcda8/cow-say.png "Cow says something")](https://nodejs.dev/static/ad4f3d3a7464bb0f8a2845fe8e6588c2/d2c2a/cow-say.png)

---

The package.json guide
======================

###### TABLE OF CONTENTS

If you work with JavaScript, or you've ever interacted with a JavaScript project, Node.js or a frontend project, you surely met the `package.json` file.

What's that for? What should you know about it, and what are some of the cool things you can do with it?

The `package.json` file is kind of a manifest for your project. It can do a lot of things, completely unrelated. It's a central repository of configuration for tools, for example. It's also where `npm` and `yarn` store the names and versions for all the installed packages.

[](https://nodejs.dev/learn/the-package-json-guide#the-file-structure)The file structure
----------------------------------------------------------------------------------------

Here's an example package.json file:

```json

{}
```
It's empty! There are no fixed requirements of what should be in a `package.json` file, for an application. The only requirement is that it respects the JSON format, otherwise it cannot be read by programs that try to access its properties programmatically.

If you're building a Node.js package that you want to distribute over `npm` things change radically, and you must have a set of properties that will help other people use it. We'll see more about this later on.

This is another package.json:

```json

{

  "name":  "test-project"

}
```
It defines a `name` property, which tells the name of the app, or package, that's contained in the same folder where this file lives.

Here's a much more complex example, which was extracted from a sample Vue.js application:

```json

{

  "name":  "test-project",

  "version":  "1.0.0",

  "description":  "A Vue.js project",

  "main":  "src/main.js",

  "private":  true,

  "scripts":  {

  "dev":  "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",

  "start":  "npm run dev",

  "unit":  "jest --config test/unit/jest.conf.js --coverage",

  "test":  "npm run unit",

  "lint":  "eslint --ext .js,.vue src test/unit",

  "build":  "node build/build.js"

  },

  "dependencies":  {

  "vue":  "^2.5.2"

  },

  "devDependencies":  {

  "autoprefixer":  "^7.1.2",

  "babel-core":  "^6.22.1",

  "babel-eslint":  "^8.2.1",

  "babel-helper-vue-jsx-merge-props":  "^2.0.3",

  "babel-jest":  "^21.0.2",

  "babel-loader":  "^7.1.1",

  "babel-plugin-dynamic-import-node":  "^1.2.0",

  "babel-plugin-syntax-jsx":  "^6.18.0",

  "babel-plugin-transform-es2015-modules-commonjs":  "^6.26.0",

  "babel-plugin-transform-runtime":  "^6.22.0",

  "babel-plugin-transform-vue-jsx":  "^3.5.0",

  "babel-preset-env":  "^1.3.2",

  "babel-preset-stage-2":  "^6.22.0",

  "chalk":  "^2.0.1",

  "copy-webpack-plugin":  "^4.0.1",

  "css-loader":  "^0.28.0",

  "eslint":  "^4.15.0",

  "eslint-config-airbnb-base":  "^11.3.0",

  "eslint-friendly-formatter":  "^3.0.0",

  "eslint-import-resolver-webpack":  "^0.8.3",

  "eslint-loader":  "^1.7.1",

  "eslint-plugin-import":  "^2.7.0",

  "eslint-plugin-vue":  "^4.0.0",

  "extract-text-webpack-plugin":  "^3.0.0",

  "file-loader":  "^1.1.4",

  "friendly-errors-webpack-plugin":  "^1.6.1",

  "html-webpack-plugin":  "^2.30.1",

  "jest":  "^22.0.4",

  "jest-serializer-vue":  "^0.3.0",

  "node-notifier":  "^5.1.2",

  "optimize-css-assets-webpack-plugin":  "^3.2.0",

  "ora":  "^1.2.0",

  "portfinder":  "^1.0.13",

  "postcss-import":  "^11.0.0",

  "postcss-loader":  "^2.0.8",

  "postcss-url":  "^7.2.1",

  "rimraf":  "^2.6.0",

  "semver":  "^5.3.0",

  "shelljs":  "^0.7.6",

  "uglifyjs-webpack-plugin":  "^1.1.1",

  "url-loader":  "^0.5.8",

  "vue-jest":  "^1.0.2",

  "vue-loader":  "^13.3.0",

  "vue-style-loader":  "^3.0.1",

  "vue-template-compiler":  "^2.5.2",

  "webpack":  "^3.6.0",

  "webpack-bundle-analyzer":  "^2.9.0",

  "webpack-dev-server":  "^2.9.1",

  "webpack-merge":  "^4.1.0"

  },

  "engines":  {

  "node":  ">= 6.0.0",

  "npm":  ">= 3.0.0"

  },

  "browserslist":  ["> 1%",  "last 2 versions",  "not ie <= 8"]

}
```
there are *lots* of things going on here:

-   `version` indicates the current version
-   `name` sets the application/package name
-   `description` is a brief description of the app/package
-   `main` sets the entry point for the application
-   `private` if set to `true` prevents the app/package to be accidentally published on `npm`
-   `scripts` defines a set of node scripts you can run
-   `dependencies` sets a list of `npm` packages installed as dependencies
-   `devDependencies` sets a list of `npm` packages installed as development dependencies
-   `engines` sets which versions of Node.js this package/app works on
-   `browserslist` is used to tell which browsers (and their versions) you want to support

All those properties are used by either `npm` or other tools that we can use.

[](https://nodejs.dev/learn/the-package-json-guide#properties-breakdown)Properties breakdown
--------------------------------------------------------------------------------------------

This section describes the properties you can use in detail. We refer to "package" but the same thing applies to local applications which you do not use as packages.

Most of those properties are only used on <https://www.npmjs.com/>, others by scripts that interact with your code, like `npm` or others.

### [](https://nodejs.dev/learn/the-package-json-guide#name)name

Sets the package name.

Example:

```json

"name":  "test-project"
```
The name must be less than 214 characters, must not have spaces, it can only contain lowercase letters, hyphens (`-`) or underscores (`_`).

This is because when a package is published on `npm`, it gets its own URL based on this property.

If you published this package publicly on GitHub, a good value for this property is the GitHub repository name.

### [](https://nodejs.dev/learn/the-package-json-guide#author)author

Lists the package author name

Example:

```json

{

  "author":  "Joe <joe@whatever.com> (https://whatever.com)"

}
```
Can also be used with this format:

```json

{

  "author":  {

  "name":  "Joe",

  "email":  "joe@whatever.com",

  "url":  "https://whatever.com"

  }

}
```
### [](https://nodejs.dev/learn/the-package-json-guide#contributors)contributors

As well as the author, the project can have one or more contributors. This property is an array that lists them.

Example:

```json

{

  "contributors":  ["Joe <joe@whatever.com> (https://whatever.com)"]

}
```
Can also be used with this format:

```json

{

  "contributors":  [

  {

  "name":  "Joe",

  "email":  "joe@whatever.com",

  "url":  "https://whatever.com"

  }

  ]

}
```
### [](https://nodejs.dev/learn/the-package-json-guide#bugs)bugs

Links to the package issue tracker, most likely a GitHub issues page

Example:

```json

{

  "bugs":  "https://github.com/whatever/package/issues"

}
```
### [](https://nodejs.dev/learn/the-package-json-guide#homepage)homepage

Sets the package homepage

Example:

```json

{

  "homepage":  "https://whatever.com/package"

}
```
### [](https://nodejs.dev/learn/the-package-json-guide#version)version

Indicates the current version of the package.

Example:

```json

"version":  "1.0.0"
```
This property follows the semantic versioning (semver) notation for versions, which means the version is always expressed with 3 numbers: `x.x.x`.

The first number is the major version, the second the minor version and the third is the patch version.

There is a meaning in these numbers: a release that only fixes bugs is a patch release, a release that introduces backward-compatible changes is a minor release, a major release can have breaking changes.

### [](https://nodejs.dev/learn/the-package-json-guide#license)license

Indicates the license of the package.

Example:

```json

"license":  "MIT"
```
### [](https://nodejs.dev/learn/the-package-json-guide#keywords)keywords

This property contains an array of keywords that associate with what your package does.

Example:

```json

"keywords":  [

  "email",

  "machine learning",

  "ai"

]

This helps people find your package when navigating similar packages, or when browsing the <https://www.npmjs.com/> website.

### [](https://nodejs.dev/learn/the-package-json-guide#description)description

This property contains a brief description of the package

Example:

```json

"description":  "A package to work with strings"
```
This is especially useful if you decide to publish your package to `npm` so that people can find out what the package is about.

### [](https://nodejs.dev/learn/the-package-json-guide#repository)repository

This property specifies where this package repository is located.

Example:

```json

"repository":  "github:whatever/testing",
```
Notice the `github` prefix. There are other popular services baked in:

```json

"repository":  "gitlab:whatever/testing",
```
```json

"repository":  "bitbucket:whatever/testing",
```
You can explicitly set the version control system:

```json

"repository":  {

  "type":  "git",

  "url":  "https://github.com/whatever/testing.git"

}

You can use different version control systems:

```json

"repository":  {

  "type":  "svn",

  "url":  "..."

}

### [](https://nodejs.dev/learn/the-package-json-guide#main)main

Sets the entry point for the package.

When you import this package in an application, that's where the application will search for the module exports.

Example:

```json

"main":  "src/main.js"
```
### [](https://nodejs.dev/learn/the-package-json-guide#private)private

if set to `true` prevents the app/package to be accidentally published on `npm`

Example:

```json

"private":  true
```
### [](https://nodejs.dev/learn/the-package-json-guide#scripts)scripts

Defines a set of node scripts you can run

Example:

```json

"scripts":  {

  "dev":  "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",

  "start":  "npm run dev",

  "unit":  "jest --config test/unit/jest.conf.js --coverage",

  "test":  "npm run unit",

  "lint":  "eslint --ext .js,.vue src test/unit",

  "build":  "node build/build.js"

}
```
These scripts are command line applications. You can run them by calling `npm run XXXX` or `yarn XXXX`, where `XXXX` is the command name. Example: `npm run dev`.

You can use any name you want for a command, and scripts can do literally anything you want.

### [](https://nodejs.dev/learn/the-package-json-guide#dependencies)dependencies

Sets a list of `npm` packages installed as dependencies.

When you install a package using npm or yarn:

```bash

npm  install  <PACKAGENAME>

yarn  add  <PACKAGENAME>
```
that package is automatically inserted in this list.

Example:

```json

"dependencies":  {

  "vue":  "^2.5.2"

}

### [](https://nodejs.dev/learn/the-package-json-guide#devdependencies)devDependencies

Sets a list of `npm` packages installed as development dependencies.

They differ from `dependencies` because they are meant to be installed only on a development machine, not needed to run the code in production.

When you install a package using npm or yarn:

```bash

npm  install --save-dev <PACKAGENAME>

yarn  add --dev <PACKAGENAME>
```
that package is automatically inserted in this list.

Example:

```json

"devDependencies":  {

  "autoprefixer":  "^7.1.2",

  "babel-core":  "^6.22.1"

}
```
### [](https://nodejs.dev/learn/the-package-json-guide#engines)engines

Sets which versions of Node.js and other commands this package/app work on

Example:

```json

"engines":  {

  "node":  ">= 6.0.0",

  "npm":  ">= 3.0.0",

  "yarn":  "^0.13.0"

}
```
### [](https://nodejs.dev/learn/the-package-json-guide#browserslist)browserslist

Is used to tell which browsers (and their versions) you want to support. It's referenced by Babel, Autoprefixer, and other tools, to only add the polyfills and fallbacks needed to the browsers you target.

Example:

```json

"browserslist":  [

  "> 1%",

  "last 2 versions",

  "not ie <= 8"

]
```
This configuration means you want to support the last 2 major versions of all browsers with at least 1% of usage (from the [CanIUse.com](https://caniuse.com/) stats), except IE8 and lower.

([see more](https://www.npmjs.com/package/browserslist))

### [](https://nodejs.dev/learn/the-package-json-guide#command-specific-properties)Command-specific properties

The `package.json` file can also host command-specific configuration, for example for Babel, ESLint, and more.

Each has a specific property, like `eslintConfig`, `babel` and others. Those are command-specific, and you can find how to use those in the respective command/project documentation.

[](https://nodejs.dev/learn/the-package-json-guide#package-versions)Package versions
------------------------------------------------------------------------------------

You have seen in the description above version numbers like these: `~3.0.0` or `^0.13.0`. What do they mean, and which other version specifiers can you use?

That symbol specifies which updates your package accepts, from that dependency.

Given that using semver (semantic versioning) all versions have 3 digits, the first being the major release, the second the minor release and the third is the patch release, you have these "[Rules](https://nodejs.dev/learn/semantic-versioning-using-npm/)".

You can combine most of the versions in ranges, like this: `1.0.0 || >=1.1.0 <1.2.0`, to either use 1.0.0 or one release from 1.1.0 up, but lower than 1.2.0.

---

Find the installed version of an npm package
============================================

To see the version of all installed npm packages, including their dependencies:

BASHcopy

npm list

For example:

BASHcopy

❯ npm list

/Users/joe/dev/node/cowsay

└─┬ cowsay@1.3.1

 ├── get-stdin@5.0.1

 ├─┬ optimist@0.6.1

 │ ├── minimist@0.0.10

 │ └── wordwrap@0.0.3

 ├─┬ string-width@2.1.1

 │ ├── is-fullwidth-code-point@2.0.0

 │ └─┬ strip-ansi@4.0.0

 │   └── ansi-regex@3.0.0

 └── strip-eof@1.0.0

You can also just open the `package-lock.json` file, but this involves some visual scanning.

`npm list -g` is the same, but for globally installed packages.

To get only your top-level packages (basically, the ones you told npm to install and you listed in the `package.json`), run `npm list --depth=0`:

BASHcopy

❯ npm list --depth=0

/Users/joe/dev/node/cowsay

└── cowsay@1.3.1

You can get the version of a specific package by specifying its name:

BASHcopy

❯ npm list cowsay

/Users/joe/dev/node/cowsay

└── cowsay@1.3.1

This also works for dependencies of packages you installed:

BASHcopy

❯ npm list minimist

/Users/joe/dev/node/cowsay

└─┬ cowsay@1.3.1

 └─┬ optimist@0.6.1

 └── minimist@0.0.10

If you want to see what's the latest available version of the package on the npm repository, run `npm view [package_name] version`:

BASHcopy

❯ npm view cowsay version

1.3.1

---

Find the installed version of an npm package
============================================

To see the version of all installed npm packages, including their dependencies:

BASHcopy

npm list

For example:

BASHcopy

❯ npm list

/Users/joe/dev/node/cowsay

└─┬ cowsay@1.3.1

 ├── get-stdin@5.0.1

 ├─┬ optimist@0.6.1

 │ ├── minimist@0.0.10

 │ └── wordwrap@0.0.3

 ├─┬ string-width@2.1.1

 │ ├── is-fullwidth-code-point@2.0.0

 │ └─┬ strip-ansi@4.0.0

 │   └── ansi-regex@3.0.0

 └── strip-eof@1.0.0

You can also just open the `package-lock.json` file, but this involves some visual scanning.

`npm list -g` is the same, but for globally installed packages.

To get only your top-level packages (basically, the ones you told npm to install and you listed in the `package.json`), run `npm list --depth=0`:

BASHcopy

❯ npm list --depth=0

/Users/joe/dev/node/cowsay

└── cowsay@1.3.1

You can get the version of a specific package by specifying its name:

BASHcopy

❯ npm list cowsay

/Users/joe/dev/node/cowsay

└── cowsay@1.3.1

This also works for dependencies of packages you installed:

BASHcopy

❯ npm list minimist

/Users/joe/dev/node/cowsay

└─┬ cowsay@1.3.1

 └─┬ optimist@0.6.1

 └── minimist@0.0.10

If you want to see what's the latest available version of the package on the npm repository, run `npm view [package_name] version`:

BASHcopy

❯ npm view cowsay version

1.3.1

---


Install an older version of an npm package
==========================================

You can install an old version of an npm package using the `@` syntax:

BASHcopy

npm  install  <package>@<version>

Example:

BASHcopy

npm  install cowsay

installs version 1.3.1 (at the time of writing).

Install version 1.2.0 with:

BASHcopy

npm  install cowsay@1.2.0

The same can be done with global packages:

BASHcopy

npm  install -g webpack@4.16.4

You might also be interested in listing all the previous versions of a package. You can do it with `npm view <package> versions`:

BASHcopy

❯ npm view cowsay versions

[  '1.0.0',

  '1.0.1',

  '1.0.2',

  '1.0.3',

  '1.1.0',

  '1.1.1',

  '1.1.2',

  '1.1.3',

  '1.1.4',

  '1.1.5',

  '1.1.6',

  '1.1.7',

  '1.1.8',

  '1.1.9',

  '1.2.0',

  '1.2.1',

  '1.3.0',

  '1.3.1'  ]



---

Update all the Node.js dependencies to their latest version
===========================================================

When you install a package using `npm install <packagename>`, the latest available version of the package is downloaded and put in the `node_modules` folder, and a corresponding entry is added to the `package.json` and `package-lock.json` files that are present in your current folder.

npm calculates the dependencies and installs the latest available version of those as well.

Let's say you install [`cowsay`](https://www.npmjs.com/package/cowsay), a cool command line tool that lets you make a cow say *things*.

When you `npm install cowsay`, this entry is added to the `package.json` file:

JSONcopy

{

  "dependencies":  {

  "cowsay":  "^1.3.1"

  }

}

and this is an extract of `package-lock.json`, where we removed the nested dependencies for clarity:

JSONcopy

{

  "requires":  true,

  "lockfileVersion":  1,

  "dependencies":  {

  "cowsay":  {

  "version":  "1.3.1",

  "resolved":  "https://registry.npmjs.org/cowsay/-/cowsay-1.3.1.tgz",

  "integrity":  "sha512-3PVFe6FePVtPj1HTeLin9v8WyLl+VmM1l1H/5P+BTTDkMAjufp+0F9eLjzRnOHzVAYeIYFF5po5NjRrgefnRMQ==",

  "requires":  {

  "get-stdin":  "^5.0.1",

  "optimist":  "~0.6.1",

  "string-width":  "~2.1.1",

  "strip-eof":  "^1.0.0"

  }

  }

  }

}

Now those 2 files tell us that we installed version `1.3.1` of cowsay, and our rule for updates is `^1.3.1`, which for the npm versioning rules means that npm can update to patch and minor releases: `1.3.2`, `1.4.0` and so on.

If there is a new minor or patch release and we type `npm update`, the installed version is updated, and the `package-lock.json` file diligently filled with the new version.

Since npm version 5.0.0, `npm update` will update the `package.json` with the updated version. Use `npm update --no-save` to not update `package.json`.

To discover new releases of the packages, you run `npm outdated`.

Here's the list of a few outdated packages in one repository that wasn't updated for quite a while:

[![outdated packages](https://nodejs.dev/static/e967736f8d105e64c22d80ce7a42f52a/fcda8/outdated-packages.png "outdated packages")](https://nodejs.dev/static/e967736f8d105e64c22d80ce7a42f52a/ee455/outdated-packages.png)

Some of those updates are major releases. Running `npm update` won't update the version of those. Major releases are never updated in this way because they (by definition) introduce breaking changes, and `npm` wants to save you trouble.

To update all packages to a new major version, install the `npm-check-updates` package globally:

BASHcopy

npm  install -g npm-check-updates

then run it:

BASHcopy

ncu -u

this will upgrade all the version hints in the `package.json` file, to `dependencies` and `devDependencies`, so npm can install the new major version.

You are now ready to run the update:

BASHcopy

npm update

If you just downloaded the project without the `node_modules` dependencies and you want to install the shiny new versions first, just run

BASHcopy

npm  install

---

Semantic Versioning using npm
=============================

If there's one great thing in Node.js packages, it's that they all agreed on using Semantic Versioning for their version numbering.

The Semantic Versioning concept is simple: all versions have 3 digits: `x.y.z`.

-   the first digit is the major version
-   the second digit is the minor version
-   the third digit is the patch version

When you make a new release, you don't just up a number as you please, but you have rules:

-   you up the major version when you make incompatible API changes
-   you up the minor version when you add functionality in a backward-compatible manner
-   you up the patch version when you make backward-compatible bug fixes

The convention is adopted all across programming languages, and it is very important that every `npm` package adheres to it, because the whole system depends on that.

Why is that so important?

Because `npm` set some rules we can use in the `package.json` file to choose which versions it can update our packages to, when we run `npm update`.

The rules use those symbols:

-   `^`
-   `~`
-   `>`
-   `>=`
-   `<`
-   `<=`
-   `=`
-   `-`
-   `||`

Let's see those rules in detail:

-   `^`: It will only do updates that do not change the leftmost non-zero number i.e there can be changes in minor version or patch version but not in major version. If you write `^13.1.0`, when running `npm update`, it can update to `13.2.0`, `13.3.0` even `13.3.1`, `13.3.2` and so on, but not to `14.0.0` or above.
-   `~`: if you write `~0.13.0` when running `npm update` it can update to patch releases: `0.13.1` is ok, but `0.14.0` is not.
-   `>`: you accept any version higher than the one you specify
-   `>=`: you accept any version equal to or higher than the one you specify
-   `<=`: you accept any version equal or lower to the one you specify
-   `<`: you accept any version lower than the one you specify
-   `=`: you accept that exact version
-   `-`: you accept a range of versions. Example: `2.1.0 - 2.6.2`
-   `||`: you combine sets. Example: `< 2.1 || > 2.6`

You can combine some of those notations, for example use `1.0.0 || >=1.1.0 <1.2.0` to either use 1.0.0 or one release from 1.1.0 up, but lower than 1.2.0.

There are other rules, too:

-   no symbol: you accept only that specific version you specify (`1.2.1`)
-   `latest`: you want to use the latest version available

---



---



---



---



---



---





---



---



---



---



---



---



---



---




---



---



---



---



---



---



---



---




---



---



---



---



---



---



---



---







---



---



---



---



---



---



---



---





---



---



---



---



---



---



---



---








