// Person Class
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

// Instructor Class inherits from Person Class
class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.speciality = attr.speciality;
    this.favLanguage = attr.favLanguage;
    this.catchphrase = attr.catchphrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  updateGrade(student) {
    if (Math.floor(Math.random() * 2) === 0) {
      student.grade += 10;
    } else {
      student.grade -= 10;
    }
    return `${student.name}'s grade is now ${student.grade}`;
  }
}

// Student Class inherits from person class
class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = attr.grade;
    this.hasGraduated = false;
  }
  graduate(caller) {
    if (!this.hasGraduated && this.grade > 70) {
      this.hasGraduated = true;
      console.log(
        `Well Done, ${this.name}! You have graduated from Lambda School!!!`
      );
    } else {
      caller.updateGrade(this);
    }
  }

  listsSubjects() {
    this.favSubjects.forEach((subject) => {
      console.log(subject);
    });
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

// ProjectManager class extends Instructor class
class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradeClassName = attr.gradeClassName;
    this.favInstructor = attr.faveInstructor;
  }

  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    );
  }

  debugCode(student, subject) {
    console.log(`${name} debugs ${student.name}'s code on ${subject}`);
  }
}

// starting the tests

// student to test on
const tom = new Student({
  name: "Tom Tarpey",
  location: "Prestatyn",
  age: 39,
  previousBackground: "Network Security",
  className: "CS13",
  favSubjects: ["C++", "Assembly", "JuJitSu"],
  grade: 70,
});

const bambam = new Student({
  name: "Bam Bam",
  location: "Bedrock",
  age: 39,
  previousBackground: "Construction",
  className: "CS13",
  favSubjects: ["Rock Climbing", "JavaScript", "Saying Bam Bam!"],
  grade: 30,
});

// instructor to test on
const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`,
});

const josh = new Instructor({
  name: "Josh Knell",
  location: "The Internet",
  age: 39,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `I have a particular set of skills!`,
});

// project manager to test on
const barney = new ProjectManager({
  name: "Barney Rubble",
  location: "Bedrock",
  age: 26,
  gradClassName: "CS13",
  favInstructor: "Fred",
});

const charletta = new ProjectManager({
  name: "Charletta Bullard",
  location: "Lambda",
  age: 26,
  gradClassName: "CS13",
  favInstructor: "Josh",
});

fred.speak(); // --> Hello my name is Fred, I am from Bedrock
tom.listsSubjects(); // --> C++ Assembly JuJitSu
fred.demo("The way of the porcupine III"); // --> Today we are learning about The way of the porcupine III
barney.standUp("Food Tek with video Toasters"); // --> Barney Rubble announces to Food Tek with video Toasters, @channel standy times!​​​​​
console.log(tom.grade); // --> 50
fred.updateGrade(tom);
console.log(tom.grade); // --> 40 or 60
tom.graduate(fred);
bambam.graduate(charletta);
console.log(charletta.name); // --> Charletta Bullard
tom.graduate(josh);
console.log(josh.name); // --> Josh Knell
