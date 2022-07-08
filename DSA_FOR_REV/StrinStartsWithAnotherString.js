
const string = 'hello world';

const toCheckString = 'he';

let result = string.lastIndexOf(toCheckString, 0) === 0;
if(result) {
    console.log('The string starts with "he".');
}
else {
    console.log(`The string does not starts with "he".`);
}