// 1 method
let a = 3
let b = 4

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);


console.log('----------');

// 2nd method destructring method

let c=6;
let d = 9;
 [c,d] = [d,c]
console.log(c);
console.log(d);