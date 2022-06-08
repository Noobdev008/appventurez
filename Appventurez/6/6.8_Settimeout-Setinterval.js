// Output every second
// importance: 5
// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using nested setTimeout.

const printNumbers =(from, to) =>{
    let current = from;

    let timerId = setInterval(() => {
        console.log(current)
        if (current == to) {
            clearInterval(timerId)
        }
        current++
    }, 1000);
   
}
// printNumbers(5,10)

const printNumbers1 = (from,to)=>{
    let curr = from;
    setTimeout(function go(){
      console.log(curr);
      if(curr<to){
          setTimeout(go,1000)
      }
      curr++
    },1000)
}
printNumbers1(10,15)


console.log("----------------");


// What will setTimeout show?
// importance: 5
// In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

// When will the scheduled function run?

// After the loop.
// Before the loop.
// In the beginning of the loop.


let i = 0;

setTimeout(() => alert(i), 100); // ? =>Any setTimeout will run only after the current code has finished.
                                   // The i will be the last one: 100000000.

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}