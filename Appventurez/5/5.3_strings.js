// Uppercase the first character
// importance: 5
// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

// ucFirst("john") == "John";

function ucFirst(str){
    if(!str){
        return str
    }
    return str[0].toUpperCase() +str.slice(1) /// str[0]  = j and convert into J and now slice does "ohn" and add with J
}
console.log(ucFirst("john")) // John


console.log("------------");

// Check for spam
// importance: 5
// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case-insensitive:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

//To make the search case-insensitive, let’s bring the string to lower case and then search:
function checkSpam(str){
    let lower =  str.toLowerCase()
    if(!str){
        return str
    }
    return lower.includes('viagra') || lower.includes('xxx')
}
console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))


console.log("-----------")

// Extract the money
// importance: 4
// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract
// the numeric value from such string and return it.

// The example:

// console.log( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str){
    str = str.slice(1) // here slice the 120 part 
    return +str;  // and plus(+) sign convrt into Number
}
console.log(extractCurrencyValue('$120')===120) // true


console.log("==========");

// str.indexOf
// The first method is str.indexOf(substr, pos).

// It looks for the substr in str, starting from the given position pos, 
// and returns the position where the match was found or -1 if nothing can be found.

let str = 'Widget with id';

console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

console.log( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

let str1 = "Widget with id";

if (str1.indexOf("Widget")) {
    console.log("We found it"); // doesn't work!
}
// The console.log in the example above doesn’t show because str.indexOf("Widget") 
// returns 0 (meaning that it found the match at the starting position). 
// Right, but if considers 0 to be false.
let str2 = "Widget with id";

if (str2.indexOf("Widget") != -1) {
    console.log("We found it"); // works now!
}

