const myName = "Packt";
// myName = 10;
const age = 20; // number
const existsFlag = true; // boolean
const language = "JavaScript"; // string
let favoriteLanguage;
const langs = ["JavaScript", "Ruby", "Python"];
favoriteLanguage = langs[0];
function printName({ name }) {
  console.log(name);
}
const john = { name: "John", age: 21 };
const mary = { name: "Mary", age: 21, phone: "123-45678" };
printName(john);
printName(mary);
const MyObject = /** @class */ (() => {
  class MyObject {
    compareTo(b) {
      if (this.age === b.age) {
        return 0;
      }
      return this.age > b.age ? 1 : -1;
    }
  }

  return MyObject;
})();
function compareTwoObjects(a, b) {
  console.log(a.compareTo(b));
  console.log(b.compareTo(a));
}
