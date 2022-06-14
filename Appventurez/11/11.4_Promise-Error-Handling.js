// Error in setTimeout
// What do you think? Will the .catch trigger? Explain your answer.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch((err)=>{
    console.log(err)
});

// Answer is "No";
//Why? 

// an "implicit try..catch" around the function code. So all synchronous errors are handled.
// But here the error is generated not while the executor is running, but later. 
// So the promise can’t handle it.