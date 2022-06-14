// // Rewrite using async/await
// // Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(console.log); // Error: 404


// // Now make to aysnc await method


const loadJson = async(url)=> {
  const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
}

loadJson('https://javascript.info/no-such-user.json')
  .catch((err)=>{
    console.log(err);
  }); // Error: 404


//   Notes:

// The function loadJson becomes async.

// All .then inside are replaced with await.

// We can return response.json() instead of awaiting for it, like this:

// if (response.status == 200) {
//   return response.json(); 
// }
// Then the outer code would have to await for that promise to resolve. In our case it doesn’t matter.

// The error thrown from loadJson is handled by .catch. We can’t use await loadJson(…) there, because we’re not in an async function.


console.log("-----------");



// Call async from non-async
// We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?

const wait = async()=> {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

// function f() {
//   // ...what should you write here?
//   // we need to call async wait() and wait to get 10
//   // remember, we can't use "await"
// }

const f = ()=>{
  wait().then(result => console.log(result));
}

f();