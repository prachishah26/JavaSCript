//Q4. Do multiplication elements of two array with same length and create 3rd array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [];
let a;
for (let i = 0; i<arr1.length;i++){
   
   a = arr1[i]*arr2[i];
   arr3.push(a);
}
console.log(arr3);
