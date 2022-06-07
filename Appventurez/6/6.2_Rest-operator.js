// Rest parameters ...
// A function can be called with any number of arguments, no matter how it is defined.

// Like here:

// function sum(a, b) {
//   return a + b;
// }

// alert( sum(1, 2, 3, 4, 5) );
// There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.

// The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.

// For instance, to gather all arguments into array args:

function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6


console.log("------------------");


// Spread syntax
// We’ve just seen how to get an array from the list of parameters.

// But sometimes we need to do exactly the reverse.

// For instance, there’s a built-in function Math.max that returns the greatest number from a list:

console.log( Math.max(3, 5, 1) ); // 5
// Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?

// Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:

let arr1 = [3, 5, 1];

console.log( Math.max(arr1) ); // NaN
// And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), because we may be unsure how many there are. As our script executes, there could be a lot, or there could be none. And that would get ugly.

// Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.

// When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

// For Math.max:

let arr = [3, 5, 1];

console.log( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)
// We also can pass multiple iterables this way:

let arrr1 = [1, -2, 3, 4];
let arrr2 = [8, 3, -8, 1];

console.log( Math.max(...arrr1, ...arrr2) ); // 8
// We can even combine the spread syntax with normal values:

let arrrr1 = [1, -2, 3, 4];
let arrrr2 = [8, 3, -8, 1];

console.log( Math.max(1, ...arrrr1, 2, ...arrrr2, 25) ); // 25