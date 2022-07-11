let arr =  ['a', 'b', 'c', 'a', 'b', 'b'];

const occurrences = (arr)=>{
    let obj ={}
    for (let i=0; i<arr.length; i++){
        char =  arr[i];
        if(obj[char] ===undefined){
            obj[char] =1
        }else{
            obj[char] +=1
        }
    }
    return obj
}
console.log(occurrences(arr))