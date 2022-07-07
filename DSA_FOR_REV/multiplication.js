const prompt = require('prompt-sync')({ sigint: true });

const number = (prompt('Enter an Number: '));

const table = (number) => {
    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
}
table(number)