const prompt = require('prompt-sync')({sigint: true});

const string  = prompt("Enter the sentence: ");

// Hi this is my first code 
// output -- code first hi is my this

const sortStrings = (string)=>{
    let res =  string.toLowerCase().split(' ').sort();
    return res
}
console.log(sortStrings(string));