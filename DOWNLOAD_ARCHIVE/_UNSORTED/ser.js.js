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