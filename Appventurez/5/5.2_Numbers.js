// Why 6.35.toFixed(1) == 6.3?
// According to the documentation Math.roun
// d and toFixed both round to the nearest number: 0..4 lead down 
// while 5..9 lead up.

// console.log( 1.35.toFixed(1) ); // 1.4
// In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

// console.log( 6.35.toFixed(1) ); // 6.3


// so if we do num.fixed(20) you can see the result 
//  for example 
console.log(1.35.toFixed(20)) /// 1.3500000000000082
console.log(6.35.toFixed(20))///  6.3499999999964473

// hence proved 6.35 will not  6.4. It will 6.3 


console.log("----------------")


//  An occasional infinite loop
// importance: 4
// This loop is infinite. It never ends. Why?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }


/// now above code if i go to add 0.2 it will never be 10 why? 
// here is the answer
let i = 0;

while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) {
        console.log(i)
    }; // 9.99999999999996 and the 10.199999999999996
}
// None of them is exactly 10.

// Such things happen because of the precision losses 
// when adding fractions like 0.2.

// Conclusion: evade equality checks when working with decimal fractions.


console.log("---------------------")

// A random number from min to max
// The built-in function Math.random()
// creates a random value from 0 to 1 (not including 1).

// Write the function random(min, max)
// to generate a random floating-point number from min to max (not including max).

// Examples of its work:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525



function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));


console.log("--------------------")


// A random integer from min to max

// Create a function randomInteger(min, max) that generates 
// a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5


function randomInteger(min, max) {
    let ans =  min + Math.random() * (max - min);
    return Math.floor(ans)

}


console.log( randomInteger(1, 5) );
console.log( randomInteger(1, 5) ); 
console.log( randomInteger(1, 5) );