// Arrow functions have no “this”
// As we remember from the chapter Object methods, "this", arrow functions do not have this. If this is accessed, it is taken from the outside.

// For instance, we can use it to iterate inside an object method:

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(
//       student => alert(this.title + ': ' + student)
//     );
//   }
// };

// group.showList();
// Here in forEach, the arrow function is used, so this.title in it is exactly the same as in the outer method showList. That is: group.title.

// If we used a “regular” function, there would be an error:

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(function(student) {
//       // Error: Cannot read property 'title' of undefined
//       alert(this.title + ': ' + student);
//     });
//   }
// };

// group.showList();
// The error occurs because forEach runs functions with this=undefined by default, so the attempt to access undefined.title is made.


// Arrows have no “arguments”
// Arrow functions also have no arguments variable.

// That’s great for decorators, when we need to forward a call with the current this and arguments.

// For instance, defer(f, ms) gets a function and returns a wrapper around it that delays the call by ms milliseconds:

// function defer(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }

// function sayHi(who) {
//   alert('Hello, ' + who);
// }

// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("John"); // Hello, John after 2 seconds
// The same without an arrow function would look like:

// function defer(f, ms) {
//   return function(...args) {
//     let ctx = this;
//     setTimeout(function() {
//       return f.apply(ctx, args);
//     }, ms);
//   };
// }
// Here we had to create additional variables args and ctx so that the function inside setTimeout could take them.