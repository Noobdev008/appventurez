//  The “class” syntax
// The basic syntax is:

// class MyClass {
//   // class methods
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }


// Example -: 
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name)
    }
}
let user = new User("shubam")
console.log(user) //  User {name:shubam}
console.log(user.name) // shubham


console.log("--------------")


//Sometimes people say that class is a “syntactic sugar” 
//(syntax that is designed to make things easier to read, but doesn’t introduce anything new), 
//because we could actually declare the same thing without using the class keyword at all:

// rewriting class User in pure functions

// 1. Create constructor function
function User1(name) {
    this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
User1.prototype.sayHi = function () {
    console.log(this.name);
};

// Usage:
let user1 = new User1("Shubham");
user1.sayHi();//Shubahm


console.log("------------");

// Rewrite to class
// importance: 5
// The Clock class (see the sandbox) is written in functional style.
//  Rewrite it in the “class” syntax.



class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();


