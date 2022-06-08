// let name ={
//     firstname:"Shubham",
//     lastname:"srivastava",
//     printFullName:function(){
//         console.log(this.firstname +" "+this.lastname);
//     }
// }
// name.printFullName();;

// console.log("-------"); 

// let name2 ={
//     firstname:"Sachin",
//     lastname:"srivastava",
// }

// //function borrowing ;

// name.printFullName.call(name2); 


// there is another method to -


let name ={
    firstname:"Shubham",
    lastname:"srivastava",
    
}
let printFullName=function(hometown,state){
    console.log(this.firstname +" "+this.lastname+" from "+ hometown + " , "+state);
}
printFullName.call(name,"Noida","Uttar Pradesh");

console.log("-------"); 

let name2 ={
    firstname:"Sachin",
    lastname:"srivastava",
}

//function borrowing ;

printFullName.call(name2,"Tokoyo","Japan"); 

// But in apply method;
// You have to pass in array method after value1(name2)
printFullName.apply(name2,["Mumbai","Maharashtra"]);


// Bind method;
// It looks same as call method but a little diff is we are invoke it later eg:

let prinName = printFullName.bind(name2,"Lucknow","Uttar Pradesh");
(prinName())


