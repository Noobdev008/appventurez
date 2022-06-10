let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // ? (1) => true

delete rabbit.jumps;

console.log(rabbit.jumps); // ? (2) => null

delete animal.jumps;

console.log(rabbit.jumps); // ? (3) => undefined


console.log("----------------");

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__:head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table,
};

let pockets = {
    money: 2000,
    __proto__:bed,
};

console.log(bed.glasses) //1
console.log( pockets.pen ); // 3
console.log( table.money ); // undefined

// In modern engines, performance-wise, there’s 
// no difference whether we take a property from an object or its prototype
// 
// . They remember where the property was found and reuse it in the next request.

// For instance, for pockets.glasses they remember where they found glasses (in head), 
// and next time will search right there. They are also smart enough to update internal
//  caches if something changes, so that optimization is safe.


console.log("----------------");

let animall = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbitt = {
    __proto__: animall
  };
  
//   console.log(rabbitt.eat())
rabbitt.eat();


console.log("--------------")

// Why are both hamsters full?
// importance: 5
// We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach.push(food);
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster
//   };
  
//   let lazy = {
//     __proto__: hamster
//   };
  
//   // This one found the food
//   speedy.eat("apple");
//   console.log( speedy.stomach ); // apple
  
//   // This one also has it, why? fix please.
//   console.log( lazy.stomach ); // apple




  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  // Speedy one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // Lazy one's stomach is empty
  console.log( lazy.stomach ); // <nothing>