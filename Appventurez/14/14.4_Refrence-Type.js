// Syntax check
// importance: 2
// What is the result of this code?

// let user = {
//   name: "John",
//   go: function() { console.log(this.name) }
// }

// (user.go)();

// it will give error

// If we insert the semicolon, all is fine:

let user = {
  name: "John",
  go: function() { alert(this.name) }
};

(user.go)() // John


console.log("---------");


// xplain the value of "this"
// importance: 3
// In the code below we intend to call obj.go() method 4 times in a row.

// But calls (1) and (2) works differently from (3) and (4). Why?

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

// Here’s the explanations.

// That’s a regular object method call.

// The same, parentheses do not change the order of operations here, the dot is first anyway.

// Here we have a more complex call (expression)(). The call works as if it were split into two lines:

f = obj.go; // calculate the expression
f();        // call what we have
// Here f() is executed as a function, without this.

// The similar thing as (3), to the left of the parentheses () we have an expression.

// To explain the behavior of (3) and (4) we need to recall that property accessors (dot or square brackets) return a value of the Reference Type.

// Any operation on it except a method call (like assignment = or ||) turns it into an ordinary value, which does not carry the information allowing to set this.