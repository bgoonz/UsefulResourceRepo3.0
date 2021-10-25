/*==================== JS-I ====================*/

console.log('********** Exercise 1 of 4 **********');
const unimaginativeArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the "zeroeth"
// value in the unimaginitiveArray, and thereafter every
// third value of the unimaginativeArray, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.
// What is "zeroeth"? Has the word "first" become
// ambiguous now that I am a computer scientist? (Hint: yes).

for (let i = 0; i < unimaginativeArray.length; i += 3) {
  console.log(unimaginativeArray[i]);
}

console.log('\n********** Exercise 2 of 4 **********');
const nameArray = [ 'Jacquelynn', 'Csaba', 'Ellen', 'Moises', 'Cole', 'Jeff', 'Dre\'Sean' ];
// Write a console.log() that displays the last value in
// nameArray. Use the `.length` property of array's
// to access the last value. What's going on with that
// slash in Dre'Sean's name?

console.log(nameArray[nameArray.length - 1]);

console.log('\n********** Exercise 3 of 4 **********');
const adjectiveArray = [ 'awesome', 'fantastic', 'amazing', 'wonderful', 'fabulous', 'incredible', 'marvelous' ];
// Using both nameArray and adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Use the string "is"
// to combine the name with the adjective. For example:
// "Jacquelynn is awesome"
// "Csaba is fantastic" et cetera...

for (let i = 0; i < nameArray.length; i++) {
  console.log(nameArray[i], "is", adjectiveArray[i]);
}

console.log('\n********** Exercise 4 of 4 **********');
// Write a "for" loop that console.log()'s every third
// number in unimaginativeArray but initialize the
// iterator so it doesn't console.log() the zero.

for (let i = 3; i < unimaginativeArray.length; i += 3) {
  console.log(unimaginativeArray[i]);
}


/* SELF-STUDY QUESTION
1. What do you think is going on with those slashes in the strings?
2. What does the \n do in the Exercise titles?
3. What does the \ do in Dre'Sean's name?

Search the internet for "JS String" or "MDN String" and write a
brief answer below. MDN is the acronym for the Mozilla Developer
Network. They've got great documentation for JavaScript!

Write your answers in here:
1. Escape notation
per: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
2. \n makes a "new line"

3. Within a string which has opening and closing single quotes, the escape slash let's us add a single quote within the string.

 */

/*==================== JS-II ====================*/
let arcadeGames = [
  {
    'id': 1,
    'title': 'Arkanoid',
    'year': 1986,
    'manufacturer': 'Taito',
    'genre': 'breakout',
    'max_players': 2,
    'url': 'https://en.wikipedia.org/wiki/Arkanoid',
  },
  {
    'id': 2,
    'title': 'Asteroids',
    'year': 1979,
    'manufacturer': 'Atari',
    'genre': 'multi-directional shooter',
    'max_players': 2,
    'url': 'https://en.wikipedia.org/wiki/Asteroids_(video_game)',
  },
  {
    'id': 3,
    'title': 'Defender',
    'year': 1981,
    'manufacturer': 'Williams',
    'genre': 'scrolling shooter',
    'max_players': 2,
    'url': 'https://en.wikipedia.org/wiki/Defender_(video_game)',
  },
  {
    'id': 4,
    'title': 'Rush\'n\'Attack',
    'year': 1985,
    'manufacturer': 'Konami',
    'genre': 'run and gun',
    'max_players': 2,
    'url': 'https://en.wikipedia.org/wiki/Rush%27n_Attack',
  },
  {
    'id': 5,
    'title': 'Sinistar',
    'year': 1982,
    'manufacturer': 'Williams',
    'genre': 'scrolling shooter',
    'max_players': 2,
    'url': 'https://en.wikipedia.org/wiki/Sinistar',
  },
  {
    'id': 6,
    'title': 'Skate or Die!',
    'year': 1988,
    'manufacturer': 'Electronic Arts',
    'genre': 'skateboarding',
    'max_players': 1,
    'url': 'https://en.wikipedia.org/wiki/Skate_or_Die!',
  },
];

// Don't modify this function
function titleMfrYearString (arr, index) {
  return `${arr[index].title} was made by ${arr[index].manufacturer} in ${arr[index].year}`;
}

function whoMadeWhatWhen(arr, mfrStr, cb) {
  // Your code goes here
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].manufacturer === mfrStr) {
      results.push(cb(arr, i));
    }
  }
  if (results.length === 0) {
    return `We don't have anything by ${mfrStr} in our inventory`;
  }
  return results;
}

console.log('********** titleMfrYearString **********');
console.log(titleMfrYearString(arcadeGames, 0)); // <--- 'Arkanoid was made by Taito in 1986'
console.log(titleMfrYearString(arcadeGames, 1)); // <--- 'Asteroids was made by Atari in 1979'
console.log(titleMfrYearString(arcadeGames, 2)); // <--- 'Defender was made by Williams in 1981'
console.log('********** whoMadeWhatWhen **********');
console.log(whoMadeWhatWhen(arcadeGames, 'Williams', titleMfrYearString)); // <--- [ 'Defender was made by Williams in 1981', 'Sinistar was made by Williams in 1982' ]
console.log(whoMadeWhatWhen(arcadeGames, 'EA', titleMfrYearString)); // <--- "We don't have anything by EA in our inventory"
console.log(whoMadeWhatWhen(arcadeGames, 'Konami', titleMfrYearString)); // <--- [ 'Rush\'n\'Attack was made by Konami in 1985' ]


/*==================== JS-III ====================*/
const pets = [
  {
    'name': 'Tinkerbell',
    'species': 'cat',
    'age': 2
  },
  {
    'name': 'Lucy',
    'species': 'dog',
    'age': 12
  },
  {
    'name': 'Chloe',
    'species': 'cat',
    'age': 18
  },
  {
    'name': 'Mojo',
    'species': 'dog',
    'age': 6
  },
  {
    'name': 'Olivia',
    'species': 'parakeet',
    'age': 4
  },
  {
    'name': 'Shadow',
    'species': 'cat',
    'age': 8
  },
  {
    'name': 'Oreo',
    'species': 'cat',
    'age': 5
  },
  {
    'name': 'Molly',
    'species': 'dog',
    'age': 4
  },
  {
    'name': 'Freddie Prinze Jr.',
    'species': 'parakeet',
    'age': 9
  }
];

// ES5
function sumPetYears(arr, kind, multiply) {
  const filtered = arr.filter(function(value, index, array) {
      return array[index].species === kind; // same as next line!
      // return value.species === kind;
    });
  // console.log(filtered);
  const mapped = filtered.map(function(val) {
      return val.age * multiply;
    });
  // console.log(mapped);
  const reduced = mapped.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
  // console.log(reduced);
  return `The combined ${kind}s' ages: ${reduced}`;
  // return "The combined " + kind + "s' ages: " + reduced;
  // return 'The combined ' + kind + 's\' ages: ' + reduced;
}

// // ES5 "Dot chaining" Array methods
// function sumPetYears(arr, kind, multiply) {
//   const filterMapReduce = arr
//     .filter(function(value, index, array) {
//       return array[index].species === kind; // same as next line!
//       // return value.species === kind;
//     })
//     .map(function(val) {
//       return val.age * multiply;
//     })
//     .reduce(function(accumulator, currentValue) {
//       return accumulator + currentValue;
//     });
//     return `The combined ${kind}s' ages: ${filterMapReduce}`;
// }

// // ES6 "Dot chaining" Array methods
// function sumPetYears(arr, kind, multiply) {
//   const filterMapReduce = arr
//     .filter((value) => value.species === kind)
//     .map((val) => val.age * multiply)
//     .reduce((acc, curVal) => acc + curVal);
//   return `The combined ${kind}s' ages: ${filterMapReduce}`;
// }


/*==================== JS-IV ====================*/
function Parent(attributes) {
  this.gender = attributes.gender;
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
}

Parent.prototype.yabbaDabba = function () {
  return 'Yabba dabba doo!';
};

Parent.prototype.speak = function () {
  return `Hello, my name is ${this.name}`;
};

const fred = new Parent({
  gender: 'Male',
  age: 35,
  name: 'Fred',
  homeTown: 'Bedrock'
});

const wilma = new Parent({
  gender: 'Female',
  age: 37,
  name: 'Wilma',
  homeTown: 'Bedrock'
});

console.log("***** Parents *****");
console.log("1.", fred);
console.log("2.", fred.speak());
console.log("3.", wilma);
console.log("4.", wilma.speak());

function Child(childAttributes) {
  Parent.call(this, childAttributes); // binding this to Parent
  this.isChild = true; // this will be a special attribute to Child
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.checkIfChild = function() {
  return `My name is ${this.name}.\nAm I a Child?  ${pebbles instanceof Child}.\nAm I a Parent? ${pebbles instanceof Parent}.`;
};

const pebbles = new Child({
  gender: 'Female',
  age: 3,
  name: 'Pebbles',
  homeTown: 'Bedrock',
});

console.log("***** Child *****");
console.log("5.", pebbles);
console.log("6.", pebbles.speak());
console.log("7.", pebbles.checkIfChild());
console.log("8.", pebbles.yabbaDabba());



/*
As is, none of the tests pass :(

Run the script. You should get this error message:
```
ReferenceError: prototype is not defined
    at eval:8:1 <-------------------------- NOTE the line and column #'s
    at eval                                 something is amiss on line 8
    at new Promise                                              column 1
```

FIXES

1. line:8 change "protype" to "Parent.prototype"

Run the script again and note the line and column in the updated error msg.

2. line:12 change "protype" to "Parent.prototype"

Run the Test suite - the "Parent" test will now pass!

Run the script again - you'll see some of the console.logs are getting evaluated.
Note the new error message line:col location, notice that we are now in
the Child function section of our script - let's fix the syntax for the Child prototypes:

3. line:31 change "protype" to "Child.prototype"
4. line:38 change "protype" to "Child.prototype"
5. line:38 also change "Parent.protype" to "Parent.prototype"

Run the script again. The console.log()s will print the variables as
"undefined" values, and you'll see empty objects {}. You should also
see in the console:

TypeError: Parent.crawl is not a function
    at new Child:27:10
    at eval:39:15
    at eval
    at new Promise

6. line 27: change "Parent.crawl" to "Parent.call"

Run the script again and you will get a different error:

TypeError: Cannot read property 'gender' of undefined
    at String.Parent:2:23
    at new Child:27:10
    at eval:39:15
    at eval

7. line:27 add "this" as first parameter: Parent.call(this, childAttributes); // binding to Parent

Run the test suite and you will pass the "Child" test!
Run the script again you will see:

TypeError: pebbles.checkIfChild is not a function
    at eval:44:27
    at eval
    at new Promise

8. move line 38 above what's on line 31, so it is now line 31 and the next block starts on line 33

Now running the script results in no errors!

***** Parents *****
1. Parent {}
[ 'Hello, my name is', 'undefined' ]
2. undefined
3. Parent {}
[ 'Hello, my name is', 'undefined' ]
4. undefined
***** Child *****
5. Parent {}
[ 'Hello, my name is', 'undefined' ]
6. undefined
7. undefined
Yabba dabba doo!
8. undefined
=> undefined

Now, how to populate the console log statements with values instead of
"undefined" and empty objects {}? We've got a couple things to do in order
to resolve "this" ;)

9. lines 2-5 in the constructor, prepend the variables with "this."
Run the script as you add each one to see the keys populate the console logs.
For example, the first console log statement now looks like this:

***** Parents *****
1. Parent {
  gender: undefined,
  age: undefined,
  name: undefined,
  homeTown: undefined }

Now that the objects are structured, let's populate them with data. Looks like
we have to fix the way we declare fred, wilma and pebbles. We'll change their
lists of array items into objects with key:value pairs that match our
constructor attributes.

10. line:16:
const fred = new Parent({
  gender: 'Male',
  age: 35,
  name: 'Fred',
  homeTown: 'Bedrock'
});

Run the script, and you'll see Fred's values populating the console.log()
statements. Now instead of "undefined" we get Fred's info!:

***** Parents *****
1. Parent { gender: 'Male', age: 35, name: 'Fred', homeTown: 'Bedrock' }

...You are also now passing the "this_is_this" test!! :D

11. line:23 (was line:18):
const wilma = new Parent({
  gender: 'Female',
  age: 37,
  name: 'Wilma',
  homeTown: 'Bedrock'
});

Run the script, and you'll see Wilma's values populating the console.log()
statements instead of undefined! Run the test suite and you're now passing "Wilma_who"!

12. line:50
const pebbles = new Child({
  gender: 'Female',
  age: 3,
  name: 'Pebbles',
  homeTown: 'Bedrock',
});

Run the script, and Pebble's attributes will display. But we're still getting
a lot of undefined values in our console logs. Let's fix up the speak() function:

13. line:13 ${this.name}

Run the script - now the names appear, but the strings don't look quite right.

14. line:13 don't console.log it, function should return something
15. line:13 also, return a string, not an array of strings

Now the test suite will pass the "speak" and "Pebbles_first_words" tests!

There's more to life than just passing tests tho. We're still getting some
undefined values in our console logs. Let's fix them!

16. line:9 make yabbaDabba() return something !

Couple more things to fix:

17. line:38 "this.isChild = childAttributes.isChild"

Now we have another error!

ReferenceError: isChild is not defined
    at Child.Parent.checkIfChild:44:3
    at eval:59:27
    at eval
    at new Promise

18. line:44 "if(this.isChild)"

...and now we see in the log of "pebbles" that "isChild: undefined". It should just be true:

19. line:38 "this.isChild = true"

But now Pebbles' console logs aren't quite lining up right? Let's fix that:

20. line:45 prepend "this." to "${name}"
"console.log(`My name is ${this.name}.`)""

21. line:43 with the Child.prototype.checkIfChild declaration, we can also lose the
"if (conditional)" and just make a return.

Child.prototype.checkIfChild = function() {
  return `My name is ${this.name}.`;
  // \nAm I a Child?  ${pebbles instanceof Child}.\nAm I a Parent? ${pebbles instanceof Parent}.`;
};

...and notice that now the console log of "My name is..." lines up nicely with
the number 7. Also, what's going on with those commented out lines?

Let's add them to the return:

Child.prototype.checkIfChild = function() {
  return `My name is ${this.name}.\nAm I a Child?  ${pebbles instanceof Child}.\nAm I a Parent? ${pebbles instanceof Parent}.`;
};

Now run the script - make sense?

Run the test suite and you should be passing all the tests too :)

*/
