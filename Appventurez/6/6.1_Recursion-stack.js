// Sum all numbers till the given one
// importance: 5
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050


function sum(n){
    if(n==1){
        return n;
    }else{
        return n+sum(n-1)
    }
}
console.log(sum(100)) //5050


console.log("----------");

// Calculate factorial
// importance: 4
// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// We can write a definition of factorial like this:

// n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n){
    if(n==1 ||  n==0){
      return 1;
    }else{
        return n*factorial(n-1)
    }
}
console.log(factorial(6)) 

console.log("----------------");

// Fibonacci numbers
// importance: 5
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:

// function fib(n) { /* your code */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

function fib(n){
    if(n<=1){
        return n;
    }else{
        return fib(n-1)+fib(n-2)
    }
}
console.log(fib(3)) //2
console.log(fib(7)) // 13



console.log("------------");

// Output a single-linked list
// importance: 5
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function print(obj){
//     console.log(obj.value);
//     if(obj.next){
//         print(obj.next)
//     }
// }
// print(list)

console.log("-------------");




// Output a single-linked list in the reverse order
// importance: 5
// Output a single-linked list from the previous task Output a single-linked list in the reverse order.

// Make two solutions: using a loop and using a recursion.



// Using a recursion

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printReverseList(list) {
  
    if (list.next) {
      printReverseList(list.next);
    }
  
    console.log(list.value);
  }
  
  printReverseList(list);

// using loop


function printReverseListLoop(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }
  }
  
  printReverseListLoop(list);