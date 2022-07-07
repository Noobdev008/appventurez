const prompt = require('prompt-sync')({sigint: true});

const number = prompt("Please enter a number: ");

var fibonacci = (n)=> {
    if(n <= 2) {
        return 1;
    } else {
        return fibonacci(n - 1) +fibonacci(n - 2);
    }
};
console.log(fibonacci(number));