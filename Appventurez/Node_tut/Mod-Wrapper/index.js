// console.log("shifting")
// It is also know as IIFE
(()=>{
console.log("module wrapper functions running using arrow function")
})();


((exports,require,module, _filename, _dirname )=>{
console.log("module wrapper functions running using arrow function")
})();

// With the elp of wrapper functions you can secure your data privet and safe.

//eg:-

(()=>{
    var a = "shubham"
    // console.log(a)  //shubam
})();
// console.log(a); // cant acceess a value 