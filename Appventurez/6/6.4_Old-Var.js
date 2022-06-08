

// (function() {   // by iifa 

//   var message = "Hello";

//   console.log(message); // Hello

// })();


// (function b() {   // by iifa 

//   var message = "Hello";

//   console.log(message); // Hello

// })();

// function b() {   // by iifa 

//   var message = "Hello";

//   console.log(message); // unexpected error

// }();


// Ways to create IIFE

(function() {
  console.log("Parentheses around the function");
})();

(function() {
  console.log("Parentheses around the whole thing");
}());

!function() {
  console.log("Bitwise NOT operator starts the expression");
}();

+function() {
  console.log("Unary plus starts the expression");
}();