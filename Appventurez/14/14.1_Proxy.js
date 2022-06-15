// Error on reading non-existent property
// Usually, an attempt to read a non-existent property returns undefined.

// Create a proxy that throws an error for an attempt to read of a non-existent property instead.

// That can help to detect programming mistakes early.

// Write a function wrap(target) that takes an object target and return a proxy that adds this functionality aspect.

// That’s how it should work:

// let user = {
//   name: "John"
// };

// function wrap(target) {
//   return new Proxy(target, {
//       /* your code */
//   });
// }

// user = wrap(user);

// console.log(user.name); // John
// console.log(user.age); // ReferenceError: Property doesn't exist: "age"

let user = {
    name: "John"
  };
  
  function wrap(target) {
    return new Proxy(target, {
      get(target, prop, receiver) {
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        } else {
          throw new ReferenceError(`Property doesn't exist: "${prop}"`)
        }
      }
    });
  }
  
  user = wrap(user);
  
  console.log(user.name); // John
  console.log(user.age); // ReferenceError: Property doesn't exist: "age"

  console.log("------------");


//   Accessing array[-1]
// In some programming languages, we can access array elements using negative indexes, counted from the end.

// Like this:

// let array = [1, 2, 3];

// array[-1]; // 3, the last element
// array[-2]; // 2, one step from the end
// array[-3]; // 1, two steps from the end
// In other words, array[-N] is the same as array[array.length - N].

// Create a proxy to implement that behavior.

// That’s how it should work:

// let array = [1, 2, 3];

// array = new Proxy(array, {
//   /* your code */
// });

// console.log( array[-1] ); // 3
// console.log( array[-2] ); // 2

// // Other array functionality should be kept "as is"


let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      // even if we access it like arr[1]
      // prop is a string, so need to convert it to number
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop, receiver);
  }
});


console.log(array[-1]); // 3
console.log(array[-2]); // 2

console.log("----------------");



// Observable
// Create a function makeObservable(target) that “makes the object observable” by returning a proxy.

// Here’s how it should work:

// function makeObservable(target) {
//   /* your code */
// }

// let user = {};
// user = makeObservable(user);

// user.observe((key, value) => {
//   console.log(`SET ${key}=${value}`);
// });

// user.name = "John"; // console.logs: SET name=John
// In other words, an object returned by makeObservable is just like the original one, but also has the method observe(handler) that sets handler function to be called on any property change.

// Whenever a property changes, handler(key, value) is called with the name and value of the property.

// P.S. In this task, please only take care about writing to a property. Other operations can be implemented in a similar way.



// The solution consists of two parts:

// Whenever .observe(handler) is called, we need to remember the handler somewhere, to be able to call it later. We can store handlers right in the object, using our symbol as the property key.
// We need a proxy with set trap to call handlers in case of any change.
let handlers = Symbol('handlers');

function makeObservable(target) {
  // 1. Initialize handlers store
  target[handlers] = [];

  // Store the handler function in array for future calls
  target.observe = function(handler) {
    this[handlers].push(handler);
  };

  // 2. Create a proxy to handle changes
  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); // forward the operation to object
      if (success) { // if there were no error while setting the property
        // call all handlers
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}

let user1 = {};

user1 = makeObservable(user1);

user1.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user1.name = "John";