// sing "this" in object literal

// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log(user.ref.name); // What's the result?

// it will throw an error 
// But if I modify this above code like - 

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user1 = makeUser();

console.log(user1.ref().name);

// then the answer will John becuase now this time "this"
//refers to its parent object


console.log(" ----------------");


// Create a calculator
// Create an object calculator with three methods:

// read() prompts for two values and saves them as
//  object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  // ... your code ...
  a:5,
  b:6,
  sum(){
      return this.a +this.b
  },
  mul(){
      return this.a * this.b
  }
};

// calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );