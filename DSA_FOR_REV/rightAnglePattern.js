let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 0; j < n - i; j++) {
      str += (" ");
    }
    // printing star
    for (let k = 0; k < i; k++) {
      str += ("*");
    }
    str += ("\n");
  }
console.log((str));
