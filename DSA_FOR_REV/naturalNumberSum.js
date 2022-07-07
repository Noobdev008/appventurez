const prompt = require('prompt-sync')({ sigint: true });

const number = +(prompt('Enter an Number: '));

const sumOfNaturalNumbers = (n)=>{
    if(n<=1){
        return n
    }
       return n+ sumOfNaturalNumbers(n-1);
    
}
console.log(sumOfNaturalNumbers(number));