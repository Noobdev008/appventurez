const prompt  = require('prompt-sync')({sigint: true});
const number1 = prompt("Please enter a number1 ");
const number2 = prompt("Please enter a number2 ");
const lcm = (n1, n2) => {

    let largest = Math.max(n1, n2);
    let samllest = Math.min(n1, n2);
    
    //Loop till you find a number by adding the largest number which is divisble by the smallest number
    let i = largest;
    while(i % samllest !== 0){
      i += largest;
    }
    return i;
  }
  console.log(lcm(number1,number2))