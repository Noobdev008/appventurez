// const fs = require('fs');   // calling the fs file to use its property

// fs.writeFileSync('sync.txt', 'Synch file'); // creating txt file with synchnoronus method

// fs.writeFile('Async.txt','asynch file', (err)=>{
//    console.log(err)
// }) // here i am using asynchornous way with the help of callback funtion 

// the reason is using async way because in javascript it works single threaded synchronus pattern 
// but async does work multilple way means it does not wait to execute when one code is run then it will run.

// eg:-

// const data = fs.readFileSync('sync.txt','utf-8')   // synchronus method
// console.log(data);   // run first
// console.log('waiting data execution') // run after data execution  

// in this code it is waiting to data execution then execute   console.log('waiting data execution')

// but if i use asynchronus method the reult will differ 
// eg-

// const data  = fs.readFile('Async.txt','utf-8',(err,data)=>{
//     console.log(data)
//     console.log(err)
// })
// console.log("I will not wait")  

// On the above code console.log("I will not wait") run first then data code execute 
//because it is take time to execute the code.





