const person = {
    name: 'Shubham',
    age: 27,
    isAdmin: true,
    sizes: {
        height: 182,
        width: 50,
    },
    sayHi: function () {
        console.log("Hello");
    },
}
let count = 0;
for(let key in person){
   count ++
}
console.log("key: " + count);