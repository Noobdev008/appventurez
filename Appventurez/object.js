// Hello, object

// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.


let obj = {};
obj.name = "John";
obj.surname = "Smith";
obj.name = "Pete";
delete obj.name;
console.log(obj)

console.log("--------------");

// Check for emptiness

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

function isEmpty(schedule) {
    for (let key in schedule) {
        return false;
    }
    return true;
}


console.log("--------------");

// Sum object properties

// We have an object storing salaries of our team:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
// Write the code to sum all salaries and store in the variable sum.
//  Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let sum = 0;
for (let key in salaries) {
    sum += salaries[key]    // 
}
console.log(sum) // 390



console.log("-----------------");


// Multiply numeric property values by 2
// Create a function multiplyNumeric(obj)
//  that multiplies all numeric property values of obj by 2.

// For instance:

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything.
//  It should modify the object in-place.
function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] === "number") {
            menu[key] *= 2
        }
    }
    console.log(menu)
}


