const fs = require('fs');



const bioData = {
    name: 'shubham', 
    age : 24,
    designation: 'Software Engineer',
};


const jsonData = JSON.stringify(bioData); // convert to json

// fs.writeFile('json1.json',jsonData, (err)=>{
//  console.log("done");
// })


fs.readFile('json1.json','utf-8',(err,data)=>{
//   console.log(data);
const orgData = JSON.parse(data); // convert to OBJ
console.log(orgData);
})