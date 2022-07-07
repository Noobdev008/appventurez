// ASCII(American Standard Code for Information Interchange)



// charCodeAt()
// The charCodeAt() function defined on string prototype returns the Unicode value i.e. 
// UTF-16 code at the specified index. It returns a value in the range 0 to 216 - 1 i.e. 65535. 
// The codes 0 to 127 in UTF codes are same as the ASCII code.
//  So, we can use the charCodeAt() function to convert character codes to ASCII codes.


let str = "abc"
let ans = str.charCodeAt(0);
console.log(ans);

console.log("--------------------------------");

//charPointAt()

// The codePointAt() method defined on the string prototype returns the code point value of the character.
//  Like charCodeAt, it also requires the index of the character to return the codepoint value of the character from the string,
//  but unlike charCodeAt does not return the UTF-16 code unit and hence can handle codepoints beyond the ASCII code 127.



let string = "abc"
let res = string.codePointAt(0)
console.log(res) //
