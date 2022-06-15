// Eval-calculator
// importance: 4
// Create a calculator that prompts for an arithmetic expression and returns its result.

// There’s no need to check the expression for correctness in this task. Just evaluate and return the result.



// Let’s use eval to calculate the maths expression:

let expr = ('2*3+2');

console.log( eval(expr) );
// The user can input any text or code though.

// To make things safe, and limit it to arithmetics only, 
// we can check the expr using a regular expression, so that it only may contain digits and operators.