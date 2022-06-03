// What's the result of OR?

// What is the code below going to output?

console.log( null || 2 || undefined ); // The answer is 2, that’s the first truthy value.

// What's the result of OR'ed console.logs?

// What will the code below output?

alert( alert(1) || 2 || alert(3) ); //The answer: first 1, then 2.

// The call to alert does not return a value. Or, in other words, it returns undefined.

// The /first OR || evaluates its left operand alert(1). That shows the first message with 1.
// The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
// The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
// There will be no 3, because the evaluation does not reach alert(3).



// What is the result of AND?
// What is this code going to show?

console.log( 1 && null && 2 ); // The answer: null, because it’s the first falsy value from the list.



// What is the result of AND'ed console.logs?

// What will this code show?

alert( alert(1) && alert(2) ); // The answer: 1, and then undefined.

// The call to alert returns undefined.

// Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.



// The result of OR AND OR

// What will the result be?

console.log( null || 2 && 3 || 4 ); //The answer: 3.

// The precedence of AND && is higher than ||, so it executes first.

// The result of 2 && 3 = 3, so the expression becomes:

// null || 3 || 4
// Now the result is the first truthy value: 3.



// Check the range between


// A question about "if"

// Which of these console.logs are going to execute?

// What will the results of the expressions be inside if(...)?



// The result of -1 || 0 = -1, truthy
if (-1 || 0) console.log( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) console.log( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) console.log( 'third' );