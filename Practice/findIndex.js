let arr = [[1,2],[4,5],[3,4]]


for (let i in arr) {
    console.log(arr[i] +" " +i)
}

arr.forEach((newArr,index)=>{
    console.log(newArr +" - "+index)
})