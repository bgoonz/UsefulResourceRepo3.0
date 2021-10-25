/*
Design a Phone Directory which supports the following operations:
1. get => Provide a number which is not assigned to anyone
2. check => Check if a number is available or not
3. release => recycle or release a number

Questions I have which aren't really covered:
- how does a number get assigned to be available or not?
    It doesn't say, but I'm guessing from the examples given that all numbers are available until retrieved by get()
- get()-ing a number makes it unavailable


Approach:
PhoneDirectory: create a hash where the key is the number (0 - maxNum) and the value is either 0 or 1
0 (false) will indicate that a number is NOT available, so 1 (true) will indicate it IS available

get(): iterate through the keys of the hash, and if a key is available (equal to 1), then return it.
set it to unavailable (0)

check(): check to see if the value stored for that key is 1 or 0

release(): set the value for that key equal to 1
*/

var PhoneDirectory = function(maxNumbers) {
  this.directory = {};

  for (let i = 0; i < maxNumbers; i++) {
    this.directory[i] = 1
  }
}

PhoneDirectory.prototype.get = function() {
  for (let key in this.directory) {
    if (this.directory[key] === 1) {
      this.directory[key] = 0
      return key;
    }
  }
  return -1
}

PhoneDirectory.prototype.check = function(number) {
  return this.directory[number] === 1 ? true : false
}

PhoneDirectory.prototype.release = function(number) {
  this.directory[number] = 0
}

let directory = new PhoneDirectory(5);
console.log(directory.get());
console.log(directory);
console.log(directory.check(0));
