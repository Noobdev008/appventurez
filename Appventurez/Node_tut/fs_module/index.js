// here are many core modules in Node.js. We will see Node.js File System Modules. 
// So, what exactly Node.js as a File Server actually means? 
// The Node.js file system module allows you to work with the file system on your computer.

// To include the File System module, use the require() method:
// var fs = require('fs');

// A common use for the File System module:

// Read files
// Create files
// Update files
// Rename files

const fs = require("fs")

//creating a new file 

fs.writeFileSync("read.txt", "Hey this is my first code")  // node index.js in terminal 
// then it automatically create new file read.txt and inside that file will see that message
// if you want update previous text so put same code with new messaage like 
//eg : fs.writeFileSync("read.txt", "Hey this is my first code with new organization")  // node index.js in terminal  


// if you want add somethig not updateing so you can use append 
// eg :

fs.appendFileSync("read.txt"," Hi user you are the right path") // node index.js
// in read txt now append with Hi user you are the right path.

