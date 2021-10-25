/* Problem statement - we would like to display numbers 1 to 5 at once sequentially. But we want to delay the output and have each number display 1 second apart from each other consecutively.
The below solution may come to mind first. But whats the output of the below code, whats wrong with it and fix it */
// for (var i = 1; i <= 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000 * i);
// }
/* A) The problem with the above code is, numbers are each outputting to console 1 second after another consecutively, but they are all 6s. So we now have 6 6 6 6 6 as the end result.
The reason for this is because the setTimeout function creates a function (the closure) that has access to its outer scope, which is the for loop that contains the index i. After 1 second go by, the function is executed and it prints out the value of i, which at the end of the loop is at 6 because it cycles through 0, 1, 2, 3, 4, 5, 6 and the loop finally stops at 6 .
B) The problem resides in the variable i we're passing into setTimeout(). In this case, we're simply passing the reference to the variable i, and not the actual value at the moment inside each loop. Therefore, by the time the setTimeout() function is executed (after 1, 2, 3, 4, and 5 seconds in this case), the for statement has already been executed and incremented i to the final value of 6.
In other words, we are not passing value of i to the callback function of setTimeout(), instead what we are telling the callback function is too look for the variable i when it is executed at a later time. When the callback functions run, the variable i will be set to 6, since the callbacks will run after the loop completes... and that is why get the value 6.
C) Explanation why the time interval is taking 1 second for consoling out the last value of 6 i.e. printing "6" five times with 1 second of time interval and NOT 6 seconds - Because, the setTimeout() function is only executed once (while setInterval() is for repeat execution ). And the i outside the curly braces (which is the second argument of the setInterval function ) takes the first value of i which is 1 second and get executed once and then stops.
*/
/* SOLUTION -
To print the successive values of i with an interval of 1 second, we need to pass into setTimeout() the actual value of i at the moment of each loop execution in the for statement.  */
funcToExecute = (x) => () => {
  console.log(x);
};
for (var i = 1; i <= 5; i++) {
  setTimeout(funcToExecute(i), i * 500);
}
/* More Explanation on why the delay is happening in the correct solution and not in the original solution -
In JavaScript you only have 2 ways of passing an argument....pass by value or pass by reference.
In the incorrect solution above in the loop, i is being passed by reference. So the loop is done by the time first console.log runs and and i is already at 6. To pass by reference in JavaScript, the argument has to be object.property. However in the loop case above, this is a exception where a variable is being passed as a reference to the value instead of the value itself.
Now, other than the loop exception.... if you pass a variable as a arg into a function(x).... you are passing by value. Thus, passing the variable i in the function(x) passes by value.
*/
/***********************************************************************
Let's practice writing closures by creating a method called `dynamicMultiply(num)`.
The dynamicMultiply function will return a new function that will allow us to
create new separate custom multiply functions.
Look below to see how this function is invoked:
const doubler = dynamicMultiply(2); // returns a functions
doubler(5); // returns 10
const tripler = dynamicMultiply(3);
tripler(5); // returns 15
const multiplyByFive = dynamicMultiply(5);
multiplyByFive(5); // returns 25
***********************************************************************/
function dynamicMultiply(num) {
  let multiplier = num;
  return (factor) => multiplier * factor;
}
/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add 
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".
Look below to see how this function is invoked:
let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"
Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"
***********************************************************************/
function sandwichMaker() {
  let order = "One sandwich with tomato";
  return (food) => {
    order = order.slice(0, order.length) + " and " + food;
    return order;
  };
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = sandwichMaker;
/*
Closures
The inner function can access the variables of the enclosing function due to closures in JavaScript. In other words, the inner function preserves the scope chain of the enclosing function at the time the enclosing function was executed, and thus can access the enclosing function's variables.
The closure has three scope chains:
it has access to its own scope — variables defined between its curly brackets
it has access to the outer function's variables
it has access to the global variables
 */
var text = "outside";
function logText() {
  console.log(text); // ans: 'undefined'
  var text = "inside";
  console.log(text); // ans:'inside'
}
logText();
/* When I run the above code, the first < console.log(text) > will print 'undefined' instead of 'outside' - Here's Why - Because, I have the variable 'text' declared and assigned both inside the function and outside the function -
https://medium.com/backticks-tildes/understanding-hoisting-and-scoping-in-javascript-39ea7b41e31
Variable Shadowing -
In JavaScript, variables with the same name can be specified at multiple layers of nested scope. In such case local variables gain priority over global variables. If you declare a local variable and a global variable with the same name, the local variable will take precedence when you use it inside a function. This type of behavior is called shadowing. Simply put, the inner variable shadows the outer. This is how the Javascript interpreter finds a particular variable; it searches for the variable at the innermost scope being executed at the time, and continues until the first match is found, even if there are other variables with the same name in the outer scope.
So in above, it takes the 'text' declared inside the function, but then only variable declaration is hoisted and NOT variable-assignment. So here, I am trying to print the 'outside' variable before assigning a value to it. So it prints undefined.
*/
var c = 15;
function outer() {
  console.log(c);
  // the above will print 'undefined' instead of '15'
  // because, just like the above example of 'Variable Shadowing', variable declaration is hoisted but not variable assignment,
  // And variable declared inside the function-scope will take precedence over the one declared outside
  var b = 10;
  var c = 25;
  function inner() {
    var a = 20;
    console.log(a + b + c); // => but this will correctly print 55, because at this point I have the correct reference to all the variable values
  }
  return inner();
}
outer();
/*
Final output from outer()
undefined
55
1 > https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4
Function outer() finishes execution, and all variables within the scope of outer() now no longer exist.
This last part is important to understand. Once a function completes its execution, any variables that were defined inside the function scope cease to exist.
The lifespan of a variable defined inside of a function is the lifespan of the function execution.
What this means is that in console.log(a+b), the variable b exists only during the execution of the the outer() function. Once the outer function has finished execution, the variable b no longer exists.
 */
