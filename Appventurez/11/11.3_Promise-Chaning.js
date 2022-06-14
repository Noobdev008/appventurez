// When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.

// A classic newbie error: technically we can also add many .then to a single promise. This is not chaining.

// For example:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  console.log(result); // 1
  return result * 2;
});

promise.then(function(result) {
  console.log(result); // 1
  return result * 2;
});

promise.then(function(result) {
  console.log(result); // 1
  return result * 2;
});
// All .then on the same promise get the same result – the result of that promise. So in the code above all console.log show the same: 1.

// But this is not promise chaining 

// The promise chaining is -:



new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
  
    console.log(result); // 1
  
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) { // (**)
  
    console.log(result); // 2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) {
  
    console.log(result); // 4
  
  });
//   Here the first .then shows 1 and returns new Promise(…) in the line (*). After one second it resolves, and the result (the argument of resolve, here it’s result * 2) is passed on to the handler of the second .then. That handler is in the line (**), it shows 2 and does the same thing.
  
//   So the output is the same as in the previous example: 1 → 2 → 4, but now with 1 second delay between console.log calls.
  
//   Returning promises allows us to build chains of asynchronous actions.

console.log("--------");


// Promise: then versus catch
// Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

promise.then(f1).catch(f2);
// Versus:

promise.then(f1, f2);


// solution
// The short answer is: no, they are not equal:

// The difference is that if an error happens in f1, then it is handled by .catch here:

promise
  .then(f1)
  .catch(f2);

// …But not here:

promise
  .then(f1, f2);
  
