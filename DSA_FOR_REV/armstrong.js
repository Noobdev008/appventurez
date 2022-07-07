const prompt = require('prompt-sync')({ sigint: true });
const number = prompt("Enter a positive integer: ");


const amstrongNumber = (number) => {
    let sum = 0;
    let length = number.length;
    let temp = number;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** length;
        temp = Math.floor(temp / 10);
    }

    if (sum == number) {
       return(`${number} is an Armstrong number`);
    }
    else {
       return(`${number} is not an Armstrong number.`);
    }
}

console.log(amstrongNumber(number));