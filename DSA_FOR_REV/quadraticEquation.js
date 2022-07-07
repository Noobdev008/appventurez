const a = 1;
const b = 1;
const c = -1

const solve=(a, b, c)=> {
    let result1 = ((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)).toFixed(2);
    let result2 = ((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)).toFixed(2);
    return +(result1) + " " + +(result2);
}
console.log(solve(a,b,c))