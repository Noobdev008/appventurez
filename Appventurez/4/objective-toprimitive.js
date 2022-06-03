// Symbol.toPrimitive
// Let’s start from the first method. There’s a built-in symbol named Symbol.toPrimitive that should be used to name the conversion method, like this:

// obj[Symbol.toPrimitive] = function(hint) {
//   // here goes the code to convert this object to a primitive
//   // it must return a primitive value
//   // hint = one of "string", "number", "default"
// };
// If the method Symbol.toPrimitive exists, it’s used for all hints, and no more methods are needed.

// For instance, here user object implements it:

// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     alert(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };

// // conversions demo:
// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500); // hint: default -> 1500
// As we can see from the code, user becomes a self-descriptive string or a money amount,
// depending on the conversion. The single method user[Symbol.toPrimitive] handles all conversion cases.


//toString ana valueOf

// By default, a plain object has following toString and valueOf methods:

// The toString method returns a string "[object Object]".
// The valueOf method returns the object itself.

// let user = {name: "John"};

// alert(user); // [object Object]
// alert(user.valueOf() === user); // true


// For instance, here user does the same as above using a combination of toString and valueOf instead of Symbol.toPrimitive:

// let user = {
//   name: "John",
//   money: 1000,

//   // for hint="string"
//   toString() {
//     return `{name: "${this.name}"}`;
//   },

//   // for hint="number" or "default"
//   valueOf() {
//     return this.money;
//   }

// };

// alert(user); // toString -> {name: "John"}
// alert(+user); // valueOf -> 1000
// alert(user + 500); // valueOf -> 1500
// As we can see, the behavior is the same as the previous example with Symbol.toPrimitive.