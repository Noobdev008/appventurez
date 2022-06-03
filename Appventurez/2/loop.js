// Last loop value
// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  console.log( i-- );
}

// Every loop iteration decreases i by 1. The check while(i) stops the loop when i = 0.

// Hence, the steps of the loop form the following sequence (“loop unrolled”):

// let i = 3;

// console.log(i--); // shows 3, decreases i to 2

// console.log(i--) // shows 2, decreases i to 1

// console.log(i--) // shows 1, decreases i to 0

// done, while(i) check stops the loop


console.log("---------------------");


// Which values does the while loop show?

// For every loop iteration, write down which value it outputs and then compare it with the solution.

// Both loops alert the same values, or not?

// The prefix form ++i:

let j = 0;
while (++j < 5) console.log( j );  // 4

// The first value is i = 1, because ++i first increments i and then returns the new value. So the first comparison is 1 < 5 and the alert shows 1.

// Then follow 2, 3, 4… – the values show up one after another. The comparison always uses the incremented value, because ++ is before the variable.

// Finally, i = 4 is incremented to 5, the comparison while(5 < 5) fails, and the loop stops. So 5 is not shown.


// The postfix form i++
let  k= 0;
while (k++ < 5) console.log( k );//5

// The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).

// But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1.

// Then follow 2, 3, 4…

// Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.

// The value i = 5 is the last one, because on the next step while(5 < 5) is false.


console.log("---------------")


// Which values get shown by the "for" loop?
// For each loop write down which values it is going to show. Then compare with the answer.

// Both loops alert same values or not?

// The postfix form:

for (let i = 0; i < 5; i++) console.log( i );

// The prefix form:

for (let i = 0; i < 5; ++i) console.log( i );

// That can be easily deducted from the algorithm of for:

// Execute once i = 0 before everything (begin).
// Check the condition i < 5
// If true – execute the loop body alert(i), and then i++
// The increment i++ is separated from the condition check (2). That’s just another statement.

// The value returned by the increment is not used here, so there’s no difference between i++ and ++i.

console.log("--------------")

// Output prime numbers

// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

let lowerNumber = 0; 
let higherNumber = 10
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
