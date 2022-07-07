let string1 = "Hi my namE is Shubham"
let string2 = "hi my Name is shubham" /// true

// let string1 = "Hi my name is Shubham"
// let string2 = "Hi mY naMe is srivasava" // false


const caseInsensitive = (string1,string2) => {
   if(string1.toLowerCase() === string2.toLowerCase()){
    return true;
   }else{
    return false;
   }
}
console.log(caseInsensitive(string1,string2));