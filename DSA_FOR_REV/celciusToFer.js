const prompt=require('prompt-sync')({sigint:true})
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);