// To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).

// When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
// Onward, for..of works only with that returned object.
// When for..of wants the next value, it calls next() on that object.
// The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.


// let range =  {
//     form:1,
//     to:5,
// }

// range[Symbol.iterator] = function(){
//     return {
//         current:this.form,
//         last:this.to,

//         next(){
//             if(this.current<=this.last){
//                 return {done:false , value: this.current++}
//             }else{
//                 return {done:true}
//             }
//         }

//     }
// }

// for(let num of range){
//     console.log(num)
// }



let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
         this.from;
        return this;
    },

    next() {
        if ( this.from<= this.to) {
            return { done: false, value: this.from++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
}


console.log("-----------");

// String is iterable
// Arrays and strings are most widely used built-in iterables.

// For a string, for..of loops over its characters:

for (let char of "test") {
  // triggers 4 times: once for each character

  console.log( char ); // t, then e, then s, then t
}

console.log("---------------");

let range1 = {
      0: 1,
      1: 2,
      2:3,
      3:4,
      4:5,
      length: 5
    };
    let arr = Array.from(range1, num=>num*num);
    console.log(arr); // 1,4,9,16,25 (array toString conversion works)