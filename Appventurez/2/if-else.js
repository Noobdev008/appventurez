// task of if-else


// if (a string with zero)
// Will console be shown?


if ("0") {
    console.log('Hello');
}

// Answer is Yes because Any string except an empty one (and "0" is not empty) becomes true in the logical context.

console.log("----------------")

// The name of JavaScript
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript"

let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
    console.log('Right!');
} else {
    console.log("You don't know? ECMAScript!");
}
// so if answer will match ('ECMAScript') then shows Right else will show You don't know? ECMAScript!


console.log("---------------")

// Rewrite 'if' into '?'
// Rewrite this if using the conditional operator '?':

var result;

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}

var result = (a + b < 4) ? 'Below' : 'Over'  // here question mark(?) shwoing if condition and colon(:)  showing else part


console.log("----------------")


//Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.


var message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}

var message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';

//The first question mark checks whether login== Employee.
// If true – it returns 'Hello'. Otherwise, it continues to the expression after the colon ‘":"’, checking login == 'Director'.
// If that’s true – it returns 'Greeting!'. Otherwise, it continues to the expression after the next colon ‘":"’, login == ''.
// If that’s true – it returns 'No login!'. Otherwise, it continues to the expression after the last colon ‘":"’, returning '" "'.

