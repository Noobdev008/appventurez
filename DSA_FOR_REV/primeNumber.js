const prompt = require('prompt-sync')({sigint: true});
const number = prompt("Please enter a number")
const primNumber =(n)=> {
    let i, flag = true; 
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
    if (flag == true)
        console.log(n + " is prime");
    else
        console.log(n + " is not prime");
}
primNumber(number)