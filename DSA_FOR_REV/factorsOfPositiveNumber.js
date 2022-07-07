const prompt = require('prompt-sync')({sigint: true});
const number =  prompt("Enter a positive number: ");

const positiveNumber = (number)=>{
    for(let i = 1; i <= number; i++) {
        if(number % i == 0) {
            console.log(i);
        }
    }
}

positiveNumber(number)