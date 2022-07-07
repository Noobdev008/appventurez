let number = 25;

const sqaureRoot = (number)=>{
    for (var i = 0; i * i <= number; i++) {
        if (i * i === number)
            return i;
   }
   return number;
}
console.log(sqaureRoot(number))