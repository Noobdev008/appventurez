const prompt = require('prompt-sync')({ sigint: true });

const sign = prompt('Enter sign ( either +, -, * or / ): ');
const number1 = (prompt('Enter first number: '));
const number2 = (prompt('Enter second number: '));
let result;

const calulator = (number1, number2, sign) => {
    switch (sign) {
        case '+':
            result = +number1 + +number2;
            console.log(`${number1} + ${number2} = ${result}`);
            break;

        case '-':
            result = number1 - number2;
            console.log(`${number1} - ${number2} = ${result}`);
            break;

        case '*':
            result = number1 * number2;
            console.log(`${number1} * ${number2} = ${result}`);
            break;

        case '/':
            result = number1 / number2;
            console.log(`${number1} / ${number2} = ${result}`);
            break;

        default:
            console.log('Invalid operator');
            break;
    }
}
calulator(number1, number2, sign);