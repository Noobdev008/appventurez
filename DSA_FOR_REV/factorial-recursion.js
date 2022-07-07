const prompt = require('prompt-sync')({ sigint: true });
const integer = prompt("Please enter a number: ")
const factorial = integer => {
    if (integer == 0) {
        return 1;
    }
    else {
        return integer * factorial(integer - 1);
    }

}
console.log('factorial ', factorial(integer));