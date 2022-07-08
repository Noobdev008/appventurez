let obj = {
    firstName: 'Shubham',
    lastName: 'Srivastava',
    age: 25,
    eyeColor: 'black',
    sayHi: function () {
        return this.firstName + ' ' + this.lastName
    },
    object: { designation: 'Software Engineer', possting: 'Lucknow' },
    arr: [1, 2, 3, 4]
}
delete obj.firstName ;
console.log(obj);
delete obj.sayHi
console.log(obj);