// using normal function

const arr =  [3,63,31,6,90,0,1,5,6];



const oddNumber = (arr)=>{
    let res = []
   for (let i=0; i<arr.length; i++) {  
        if(arr[i]%2==1) {
            res.push(arr[i]);
        }
   }
   return res;

}
console.log("odd - "+oddNumber(arr));

const evenNumber = (arr)=>{
    let res = []
   for (let i=0; i<arr.length; i++) {  
        if(arr[i]%2==0) {
            res.push(arr[i]);
        }
   }
   return res;

}
console.log("even - "+ evenNumber(arr));


console.log("-------------");

// 2nd method using Higher Order Functions;


const odd = arr.filter((x)=>{
    return x%2==1;
})
console.log("odd- "+ odd)


const even = arr.filter((x)=>{
    return x%2==0;
})
console.log("even- "+ even)

