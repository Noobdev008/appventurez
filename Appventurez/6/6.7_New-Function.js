// It’s easier to understand by looking at an example. Here’s a function with two arguments:

let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) ); // 3
// And here there’s a function without arguments, with only the function body:

let sayHi = new Function('console.log("Hello")');

sayHi(); // Hello