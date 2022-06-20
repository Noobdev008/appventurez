// // JSON stands for JavaScript Object Notation


// // JSON is a text format for storing and transporting data

// // JSON is "self-describing" and easy to understand

// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data-interchange format
// JSON is plain text written in JavaScript object notation
// JSON is used to send data between computers
// JSON is language independent *


const bioData = {
    name: 'shubham', 
    age : 24,
    designation: 'Software Engineer',
}

const jsonData = JSON.stringify(bioData); // convert to JSON
console.log(jsonData); //{"name":"shubham","age":24,"designation":"Software Engineer"}

console.log(jsonData.designation); // undefined;

const objData = JSON.parse(jsonData); // convert to Object
console.log(objData); //{ name: 'shubham', age: 24, designation: 'Software Engineer' }

console.log(objData.designation); // Software Engineer;