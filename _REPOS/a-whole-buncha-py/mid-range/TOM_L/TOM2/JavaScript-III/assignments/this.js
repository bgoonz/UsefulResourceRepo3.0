/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Windows Binding binds the this keyword to the global object. In the browser the global object is the window. Window binding happens when no other binding is attached
* 2. Implicit binding happens when dot notation is used to invoke the function. wthe object to the left of the dot becomes the context for this in the function.
* 3. binds to the instance of the object created when we use the new opperator on a constructor function.
* 4. Explicit binding of this occurs when the methods call, apply or bind are used on a function. The explicitly pass in a this to the method
*
* write out a code example of each explanation above
*/

// Principle 1
this.hello = "say hello to my little friend"
// code example for Window Binding
function sayHelloToTheWindow(hello) {
      console.log(this.hello);
}
    

// Principle 2
const player = {
  'name': 'Player1',
  'level': 10,
  'heal': function(item, ammount) {
    console.log( `${this.name} uses ${item} to heal ${ammount} health!`);
  }
}

// This keyword is BOUND upon invocation.
player.heal("potion", 10);


// Principle 3

// code example for New Binding

function Vec2(x, y) {
    this.x = x;
    this.y = y;

    this.add = (other) => {
        this.x += other.x;
        this.y += other.y;
        return this;
    }
    this.subtract = (other) => {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }
    this.multiply = (other) => {
        this.x *= other.x;
        this.y *= other.y;
        return this;
    }
    this.divide = (other) => {
        this.x /= other.x;
        this.y /= other.y;
        return this;
    }
    this.print = () => {
        console.log(`x: ${this.x} y: ${this.y}`);
        return this;
    }
}


const myVec2A = new Vec2(12, 12);
const myVec2B = new Vec2(10, 10);

myVec2A.print();

// chaining my add method repeatedly and adding some prints for good measure
myVec2A.add(myVec2B).add(myVec2A).add(myVec2B).print().add(myVec2A).print().add(myVec2B).print().add(myVec2A).print().add(myVec2B).add(myVec2A).add(myVec2B).print().add(myVec2A).print().add(myVec2B).add(myVec2A).add(myVec2B).print().add(myVec2A).print().multiply(myVec2A).print();



// Principle 4

// code example for Explicit Binding

const enemy = {
  'name': 'Bob',
  'health': 10
}

const skills = ['Chopping', 'Chopping', 'Cake Decorating'];

function shout(skill1, skill2, skill3) {
  console.log(`My name is: ${this.name} I have a particular set of skills: ${skill1} and ${skill2} and ${skill3}`.toUpperCase());
}
let holdOn = shout.bind(enemy, ...skills);
holdOn();
