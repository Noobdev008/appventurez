const prompt = require('prompt-sync')({sigint: true});
const integer =  prompt("Please enter a number: ")
const factorialOf = integer => {
    let factorial = 1;
  
    for(let i = 1; i <= integer; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  console.log('factorial ', factorialOf(integer));