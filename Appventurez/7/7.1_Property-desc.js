
// // // let user = {
// // //   name: "John",
// // // };

// // // let descriptor = Object.getOwnPropertyDescriptor(user,'age');

// // // console.log( JSON.stringify(descriptor, null, 2 ) );




// // // let user = {};

// // // Object.defineProperty(user, "name", {
// // //   value: "John"
// // // });

// // // let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// // // console.log( JSON.stringify(descriptor, null, 2 ) );


// // let user = {
// //     name:"Shubham"
// //   };
  
// //   Object.defineProperty(user,"age",{
// //     value:24
// //   });
  
// //   let descriptor = Object.getOwnPropertyDescriptor(user, 'name','age'); //lit gives priority only first key
// //   // shubham
// //   console.log( JSON.stringify(descriptor, null, 2 ) );
  
// //   let user = {
// //     name:"Shubham"
// //   };
  
// //   Object.defineProperty(user,"age",{
// //     value:24
// //   });
  
// //   let descriptor = Object.getOwnPropertyDescriptor(user, 'age','name'); //  it gives priority only first key
// //   // 24
// //   console.log( JSON.stringify(descriptor, null, 2 ) );
  

// Non-enumerable
// Now let’s add a custom toString to user.

// Normally, a built-in toString for objects is non-enumerable, it does not show up in for..in. But if we add a toString of our own, then by default it shows up in for..in, like this:

// let user = {
//   name: "John",
//   toString() {
//     return this.name;
//   }
// };

// // By default, both our properties are listed:
// for (let key in user) console.log(key); // name, toString
// If we don’t like it, then we can set enumerable:false. Then it won’t appear in a for..in loop, just like the built-in one:

// let user = {
//   name: "John",
//   toString() {
//     return this.name;
//   }
// };

// Object.defineProperty(user, "toString", {
//   enumerable: false
// });

// // Now our toString disappears:
// for (let key in user) console.log(key); // name


// let user = {
//   name: "John",
//   toString() {
//     return this.name;
//   }
// };

// Object.defineProperty(user, "toString", {
//   enumerable: true
// });

// for (let key in user) console.log(key); // name toString


// Non-configurable
// The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.

// A non-configurable property can’t be deleted, its attributes can’t be modified.

// For instance, Math.PI is non-writable, non-enumerable and non-configurable:

// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// alert( JSON.stringify(descriptor, null, 2 ) );
// /*
// {
//   "value": 3.141592653589793,
//   "writable": false,
//   "enumerable": false,
//   "configurable": false
// }
// */


// So, a programmer is unable to change the value of Math.PI or overwrite it.

// Math.PI = 3; // Error, because it has writable: false

// // delete Math.PI won't work either
// We also can’t change Math.PI to be writable again:

// // Error, because of configurable: false
// Object.defineProperty(Math, "PI", { writable: true });