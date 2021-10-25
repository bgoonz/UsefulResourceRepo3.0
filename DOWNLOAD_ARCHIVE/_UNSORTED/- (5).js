class User {
  constructor(options) {
    // set a username and password property on the user object that is created
    password = options.password;
    username = options.username;
  }
  // create a method on the User class called `checkPassword`
  // this method should take in a string and compare it to the object's password property
  // return `true` if they match, otherwise return `false`
  User.prototype.checkPassword = (passedPwd) => {
    if(password === passedPwd) {
      return true;
    }
  return false;
  }
}