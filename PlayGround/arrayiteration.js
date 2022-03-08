
let nums = [11,2,3,4,5];
let nums2 = nums.map(myfunction);
function myfunction(value){
    return value*2;
}
console.log(nums2);

//reduce
let nums3 = nums.reduce(myfunc);
function myfunc(total,value){
    return total + value;
}
console.log(nums3);