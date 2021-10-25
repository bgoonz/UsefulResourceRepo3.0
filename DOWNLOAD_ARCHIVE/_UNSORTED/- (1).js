const getUserConstructor = () => {
  // create a constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor
  class User {
    constructor(username, name, email, password) {
      this.username = username;
      this.name = name;
      this.email = email;
      this.password = password;
      sayHi() {
        return 'Hello my name is ${this.name}';
      }
    }
  } return new User;
};