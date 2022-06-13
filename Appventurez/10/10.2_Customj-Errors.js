// Inherit from SyntaxError
// importance: 5
// Create a class FormatError that inherits from the built-in SyntaxError class.

// It should support message, name and stack properties.

// Usage example:

// let err = new FormatError("formatting error");

// alert( err.message ); // formatting error
// alert( err.name ); // FormatError
// alert( err.stack ); // stack

// alert( err instanceof FormatError ); // true
// alert( err instanceof SyntaxError ); // true (because inherits from SyntaxError)


class FormatError extends SyntaxError {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
  let err = new FormatError("formatting error");
  
  console.log( err.message ); // formatting error
  console.log( err.name ); // FormatError
  console.log( err.stack ); // stack
  
  console.log( err instanceof SyntaxError ); // true
