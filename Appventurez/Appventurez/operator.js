// //  The postfix and prefix forms
// What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // 2
console.log(c);
//  the prefix form ++counter increments counter and returns the new value, 2. So, the console shows 2.
let d = b++; // 1
console.log(d)
// he postfix form counter++ also increments counter but returns the old value (prior to increment). So, the console shows 1.

 
console.log("-------------------------")

//  What are the values of a and x after the code below?
let z = 2;

let x = 1 + (z *= 2);  //  5

console.log(x);





