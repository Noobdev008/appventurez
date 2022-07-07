const prompt = require('prompt-sync')({sigint: true});
const a = (prompt("Enter first number: "));
const b = (prompt("Enter second number: "));
const c = (prompt("Enter third number: "));
let largest;

if(a >= b && a >= c) {
    largest = a;
}
else if (b >= a && b >= c) {
    largest = b;
}
else {
    largest = c;
}

// display the result
console.log("The largest number is " + largest);