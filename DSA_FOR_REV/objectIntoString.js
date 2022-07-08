// program to convert an object to a string

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

const result = JSON.stringify(person);

console.log(result);
console.log(typeof result);