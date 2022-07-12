let arr = [[1,2],[4,5],[3,4]]
let search = [3,4]

// for (let i in arr) {
//     console.log(arr[i] +" " +i)
// };

// arr.forEach((newArr,index)=>{
//     console.log(newArr +" - "+index)
// });

const index = (array, search) => {
    for(let i=0; i<array.length; i++){
        if(JSON.stringify(array[i]) === JSON.stringify(search))   return i;
    }
    return -1;
}
console.log(index(arr,search))