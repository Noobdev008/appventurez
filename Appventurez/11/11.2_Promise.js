// Re-resolve a promise?
// What’s the output of the code below?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then((resolve)=>{
    console.log(resolve);
});

//The output is: 1.

//The second call to resolve is ignored, because only the first call of 
//reject/resolve is taken into account. Further calls are ignored.

console.log("-----------");

// Delay with a promise
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise.
// That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

// function delay(ms) {
//   // your code
// }

//delay(3000).then(() => alert('runs after 3 seconds'));


function delay(ms) {
  // your code
  return new Promise(resolve=>setTimeout(resolve,ms))
}

delay(3000).then(() => console.log('runs after 3 seconds'));