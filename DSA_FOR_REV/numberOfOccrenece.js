const prompt = require('prompt-sync')({ sigint: true });
//1st method
const string = prompt("Enter your name: ");

const numberOfOccrenece = (string) => {
    let obj = {}
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (obj[char] === undefined) {
            obj[char] = 1
        } else {
            obj[char] += 1
        }
    }
    return obj
}
console.log(numberOfOccrenece(string));

// another method to find occurrences in whole sentence


const countOccurences = (string, word) => {
    return string.split(word).length - 1;
}
var text = "We went down to the stall, then down to the river.";
var count = countOccurences(text, "down");
console.log(count);