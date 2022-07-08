// 1st method

let person = {
    firstName: 'Shubham',
    lastName: 'Sriavstava',
    age: 25,
    ssn: '9067153883',
    location:'USA'
};


let job = {
    jobTitle: 'Software Developer',
    location: 'India'
};

let employee = {
    ...person,
    ...job
};

console.log(employee);


//  2nd Method

let persons = {
    firstName: 'Shubham',
    lastName: 'Srivastava',
    age: 25,
    ssn: '123-456-2356'
};


let jobs = {
    jobTitle: 'JavaScript Developer',
    country: 'India'
};

let employees = Object.assign(person, job);
console.log(employees);