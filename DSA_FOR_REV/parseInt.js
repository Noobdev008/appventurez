console.log(parseInt("10"))  // 10
console.log(parseInt("10.00"));//10
console.log(parseInt("10.33"));//10
console.log(parseInt("34 45 66"));//34  find first value as a number or not 
console.log(parseInt(" 60 "));//60 (ignore spaces)
console.log(parseInt("40 years")); //40 
console.log(parseInt("He was 40"));//not a number beacuse first value is not a number

// The parseInt method parses a value as a string and returns the first integer.

// A radix parameter specifies the number system to use:

// 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.

// If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.

// default(radix) value always 10 in parseInt(value ,radix)


console.log(parseInt("10", 10)); //10
console.log(parseInt("010")); //10
console.log(parseInt("10", 8)); // 8
console.log(parseInt("0x10")); // 16
console.log(parseInt("10", 16));//16