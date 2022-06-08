// We’ll use window here, assuming that our environment is a browser. If your script may run in other environments, it’s better to use globalThis instead.

// All properties of the global object can be accessed directly:

// alert("Hello");
// // is the same as
// window.alert("Hello");
// In a browser, global functions and variables declared with var (not let/const!) become the property of the global object:

// var gVar = 5;

// alert(window.gVar); // 5 (became a property of the global object)

// If we used let instead, such thing wouldn’t happen:

// let gLet = 5;

// alert(window.gLet); // undefined (doesn't become a property of the global object)
// If a value is so important that you’d like to make it available globally, write it directly as a property:

// // make current user information global, to let all scripts access it
// window.currentUser = {
//   name: "John"
// };

// // somewhere else in code
// alert(currentUser.name);  // John

// // or, if we have a local variable with the name "currentUser"
// // get it from window explicitly (safe!)
// alert(window.currentUser.name); // John