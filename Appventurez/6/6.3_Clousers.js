// Does a function pickup latest changes?
// importance: 5
// The function sayHi uses an external variable name. When the function runs, which value is it going to use?

let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"? 

// The answer is: Pete.

// A function gets outer variables as they are now, it uses the most recent values.

// Old variable values are not saved anywhere. When a function wants a variable, 
// it takes the current value from its own Lexical Environment or the outer one.



console.log("----------------");


// Which variables are available?
// importance: 5
// The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.

// Will it have access to the outer variables from its creation place, or the invocation place, or both?

function makeWorker() {
    let name1 = "Pete";

    return function () {
        console.log(); (name1);
    };
}

let name1 = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?

//The answer is: Pete.

// The work() function in the code below gets name from the place of its origin
//  through the outer lexical environment


console.log("-----------")


// Are counters independent?
// importance: 5
// Here we make two counters: counter and counter2 using the same makeCounter function.
// 
// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // ?  => 0
console.log(counter2()); // ?  => 1

// The answer: 0,1.

// Functions counter and counter2 are created by different invocations of makeCounter.

// So they have independent outer Lexical Environments, each one has its own count.

console.log("----hi----");

// Counter object
// importance: 5
// Here a counter object is made with the help of the constructor function.

// Will it work? What will it show?

function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counterr = new Counter();

console.log(counterr.up()); // ? => 1
console.log(counterr.up()); // ? =>2
console.log(counterr.down()); // ? =>1


console.log("------------");

// Function in if
// Look at the code. What will be the result of the call at the last line?

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi();
//The result is an error.

// The function sayHi is declared inside the if, so it only lives inside it. There is no sayHi outside.

console.log("---------");

// Sum with closures
// importance: 4
// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

// sum(1)(2) = 3
// sum(5)(-1) = 4


function sum(a) {
    return function sum(b) {
        return (a + b)
    }

}
console.log(sum(1)(2)) //3
console.log(sum(5)(-1))  //4

console.log("--------------");

// Is variable visible?
// importance: 4
// What will be the result of this code?

let x = 1;
try{
function func() {
    console.log(x); // ? =>  ReferenceError: Cannot access 'x' before initialization

    let x = 2;
}
func();
}catch{
    console.log("err")
}



console.log("--------------");

// Filter through function
// importance: 5
// We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

// Make a set of “ready to use” filters:

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.
// The usage must be like this:

// arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
// arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
// For instance:

// /* .. your code for inBetween and inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.filter(inArray([1, 2, 10]))); // 1,2

console.log("-------------");

// Sort by field
// importance: 5
// We’ve got an array of objects to sort:

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
console.log(byField(users))


