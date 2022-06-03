// Is array copied?

// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // the answer is 4
//That’s because arrays are objects. So both shoppingCart 
//and fruits are the references to the same array.

console.log("-------------")

// Array operations.

// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
// The array in the process:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll


let ans = ["Jazz", "Blues"];
ans.push("Rock-n-Roll");
ans[1] = "Classics"
// console.log(ans);
ans.shift("Jazz")
ans.unshift("Rap", "Reggae");
console.log(ans)

// Ok so above code works oppsoite of push and pop where push and pop works top of the stack while shift and unshit works lower of the stack.
//eg -: 
// ["A", "B"]
// if i push "C" then array will - ["A","B","C"]
// while if i do shift then array - ["B",C]
// same as pop and unshit works(vice-versa)



console.log("---------------");


// maximal subarray
// importance: 2
// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.
function getMaxSubSum(arr) {
    let maxSum = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            maxSum = Math.max(maxSum, sum)
        }
    }
    console.log(maxSum)
}

getMaxSubSum([-1, 2, 3, -9]); // 5
getMaxSubSum([-1, 2, 3, -9, 11]); // 11
getMaxSubSum([-2, -1, 1, 2]); // 3
getMaxSubSum([1, 2, 3]); // 6
getMaxSubSum([100, -9, 2, -3, 5]); // 100
