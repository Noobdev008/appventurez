// The JavaScript for in statement loops through the properties of an Object:
const array1 = ['a', 'b', 'c'];

for (const element in array1) {
  console.log(element);
}

// expected output: "0"
// expected output: "1"
// expected output: "2"

const person = {fname:"John", lname:"Doe", age:25};


let text = "";
for (let x in person) {
  text += person[x]+" ";
}
console.log(text); //John Doe 25