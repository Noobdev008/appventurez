// const promt = require('promt-sync')({sigint:true});

// const string = "malayalam"
const string = "shubham"
const palindrome = (string)=>{
    let res = ""
     for(let i=string.length-1; i>=0; i--){
        res += string[i]
     }
    //  return res
     if(string==res){
        return "Palindrome";
     }else{
        return "Not Palindrome";
     }
}
console.log(palindrome(string));