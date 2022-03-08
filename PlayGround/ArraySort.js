let cars = ["audi","bmw","nano","i10"];
console.log(cars.sort());
console.log(cars.reverse());

let nums = [11,2,3,4,5];
console.log(nums.sort(function(a,b){
    return b-a;                  //descending order (for ascending order a-b)
}))

console.log(nums.sort(function(a,b){
    return 0.5 - Math.random();
}))

console.log(Math.max.apply(null,nums));
console.log(nums*2);

let nums2 = nums.map(myfunction);
function myfunction(value){
    return value*2;
}
console.log(nums2);