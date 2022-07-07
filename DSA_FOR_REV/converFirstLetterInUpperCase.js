const prompt = require('prompt-sync')({ sigint: true });
const string = prompt("Enter your name: ");

const capitalizeFirstLetter = ([first, ...rest]) =>first.toLocaleUpperCase() + rest.join('')


console.log(capitalizeFirstLetter(string));
