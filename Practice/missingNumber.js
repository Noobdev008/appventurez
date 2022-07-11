let arr  = [4,3,1,0,5];

const missingNumber = function(nums) {
    let n = nums.length
    let total = Math.floor(((n)*(n+1)/2))
    for(let i=0; i<n; i++){
        total-=nums[i]
    }
    return total
};
console.log(missingNumber(arr))

const missingNumberXOR = (arr)=>{
    let res =0
    for(let i=0; i<arr.length; i++) {
        res = res ^ i ^ arr[i];
    }
    return res^arr.length;
}
console.log(missingNumberXOR(arr))