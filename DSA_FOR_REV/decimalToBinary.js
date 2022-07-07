const prompt = require('prompt-sync')({sigint: true});
const number =  +prompt("Enter a positive number: ");

const decimalToBinary = (number)=>{
    return number.toString(2)
}
console.log(decimalToBinary(number));