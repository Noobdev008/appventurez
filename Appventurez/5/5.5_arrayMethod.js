// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words
//  like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';


function camelize(str) {
    return str
        .split("-")
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join("")
}
console.log(camelize("background-color"))
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));



console.log("-----------")

// Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

let arr = [5, 3, 8, 1];
const filterRange = (arr, a, b) => {
    return arr.filter(item => (a <= item && item <= b))

}
let filtered = filterRange(arr, 1, 4)    // here 1 and 4 showing range 
console.log(filtered) // 3,1


console.log("----------------");

// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

let arr1 = [5, 3, 8, 1];

// filterRangeInPlace(arr1, 1, 4); // removed the numbers except from 1 to 4

// alert( arr1 ); // [3, 1]

const filterRangeInPlace = (arr1, a, b) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < a || arr1[i] > b) {
            arr1.splice(i, 1)
            i--
        }
    }
    return arr1
}
console.log(filterRangeInPlace(arr1, 1, 4));


console.log("--------------");


// Sort in decreasing order
// importance: 4
let arr2 = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

// alert( arr2 ); // 8, 5, 2, 1, -10

const decreasing = (arr2) => {
    return arr2.sort((a, b) => b - a)
}
console.log(decreasing(arr2))



console.log("------------");

// copy and sort array
// importance: 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let str = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(str);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( str ); // HTML, JavaScript, CSS (no changes)

const copySorted = (str) => {
    return str.sort()
}
console.log(copySorted(str))

console.log("-----------------");

// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

// let names = /* ... your code */

// alrt( names ); // John, Pete, 

let names = users.map(item => item.name)
console.log(names)


console.log("--------------");

// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let user = [john1, pete1, mary1];

// let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith


const usersMapped = (user) => {
    return user.map(item => ({
        fullname: ` ${item.name} ${item.surname}`,
        id: item.id
    }
    )

    )
}
console.log(usersMapped(user))

console.log("-----------------")








// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

let johny = { name: "John", age: 25 };
let petee = { name: "Pete", age: 30 };
let maryy = { name: "Mary", age: 28 };

let arr3 = [ petee, johny, maryy ];

// sortByAge(arr);

// now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

const sortByAge = (arr3) =>{
   return arr3.sort((a,b)=> a.age-b.age)
}
console.log(sortByAge(arr3))


console.log("-----------------")
// Get average age
// importance: 4
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

let jjohn = { name: "John", age: 25 };
let peete = { name: "Pete", age: 30 };
let mmary = { name: "Mary", age: 29 };

let arr4 = [ jjohn, peete, mmary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

const getAverageAge = (arr4)=>{
    return arr4.reduce((sum,user)=> sum+user.age,0)/arr4.length
}
console.log(getAverageAge(arr4))

console.log("---------------");

// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O
