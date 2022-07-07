const prompt = require('prompt-sync')({ sigint: true });

const num1 = prompt("Please enter a num1: ");
const num2 = prompt("Please enter a num2: ");
const greatestCommonDivisior=(num1, num2)=> {
    if (num1 == 0) {
        return num2;
    }
    if (num2 == 0) {
        return num1;
    }

    return greatestCommonDivisior(num1%num2, num2);
}
console.log(`GCD of ${num1} and ${num2} is ${greatestCommonDivisior(num1, num2)}`);
