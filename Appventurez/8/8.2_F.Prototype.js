// Changing "prototype"
// importance: 5
// In the code below we create new Rabbit, and then try to modify its prototype.

// In the start, we have this code:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit1 = new Rabbit();

console.log( rabbit1.eats ); // true
// We added one more string (emphasized). What will console.log show now?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit2 = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit2.eats ); // ? => true
// …And if the code is like this (replaced one line)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit3 = new Rabbit();

Rabbit.prototype.eats = false;

console.log( rabbit3.eats ); // ? => false
// And like this (replaced one line)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit4 = new Rabbit();

delete rabbit4.eats;

console.log( rabbit4.eats ); // ? => true
// The last variant:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit5 = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit5.eats ); //  => undefined



console.log("-----------");

// Create an object with the same constructor
// importance: 5
// Imagine, we have an arbitrary object obj, created by a constructor function – we don’t know which one, but we’d like to create a new object using it.

// Can we do it like that?

// let obj2 = new obj.constructor();



function User(name){
    this.name = name
}

let obj = new User("shubham");
let obj2 =  new obj.constructor("Barkha");
console.log(obj2) //  User {name: 'Barkha'};
console.log(obj2.name) // Barkha