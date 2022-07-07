const prompt = require('prompt-sync')({ sigint: true });
const lower = prompt("Enter a positive lower integer: ");
const upper = prompt("Enter a positive upper integer: ");


const amstrongNumber = (lower, upper) => {
    for (let i = lower; i <= upper; i++) {
        let numberOfDigits = i.toString().length;
        let sum = 0;
        let temp = i;
        while (temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            temp = Math.floor(temp / 10);
        }

        if (sum == i) {
            console.log(i);
        }else{
            console.log("Please enter the valid Number")
            return;
        }
    }
}

amstrongNumber(lower,upper)