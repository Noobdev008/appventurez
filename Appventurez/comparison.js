// Comparison
// What will be the result for these expressions?

console.log("--------------------")

console.log(5 > 4);
// here answer will true just because 5 is greater than 4  
console.log("--------------------")

console.log("apple" > "pineapple"); // here the answer will false just because string length of pineapple is more than the apple

// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
// In other words, strings are compared letter-by-letter.

//The algorithm to compare two strings is simple:

// Compare the first character of both strings.
// If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// Repeat until the end of either string.
// If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

console.log("--------------------")

console.log("2" > "12"); // answer will true beacuse  dictionary comparison, first char "2" is greater than the first char "1" 



console.log("--------------------")
console.log(undefined == null) // answer will true just beacause null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.
console.log("--------------------")


console.log(undefined === null) // here we are checking strick equality so triple equal(===) now check type of too so here answer will false
console.log("--------------------")
console.log(null == "\n0\n") // null only equals undefined. so here answer will false
console.log("--------------------")
console.log(null === +"\n0\n") // here same as above will reslut false also Strict equality of different types.
console.log("--------------------")