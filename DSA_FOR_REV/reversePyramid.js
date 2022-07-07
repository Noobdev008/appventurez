const prompt  = require('prompt-sync')({sigint: true});
const number = +prompt("Enter the number: ");


const pyramid = (number)=>{
    let res =""
    for (let i = 0; i < number; i++) {
        // printing spaces
        for (let j = 0; j < i; j++) {
          res += " ";
        }
        // printing star
        for (let k = 0; k < 2 * (number-i) - 1; k++) {
          res += "*";
        }
        res += "\n";
      }
      return res;
}
console.log(pyramid(number));