let array = [5,6,8,-7,5];
let closest = 10;
let distance;
let l=0;
let h=0;
let min_distance = 1;
let array2 = []
for(let i = 0 ; i<array.length ; i++){
    for(let j = 0; j< array.length ; j++){
        if(i != j){
            sum = array[i]+array[j];

            distance_from_zero = Math.abs(sum - 0)
            // min_distance = distance_from_zero
            if( distance_from_zero <= min_distance){
                min_distance = distance_from_zero;
                l = array[i];
                h = array[j];
                if(array2.includes([h,l]) == false){
                    array2.push([l,h])
                }
                
            }
        
        }
    }
}
console.log(array2);
//Math.abs(array[i])-Math.abs(array[j]);




















//Find the largest pair sum in an unsorted array(Given an unsorted of distinct integers, find the largest pair sum in it. For example, the largest pair sum in {12, 34, 10, 6, 40} is 74.)

// let array = [12,34,10,6,40]
// let sum = 0
// for(let i =0 ; i<array.length ; i++){
//     for(let j = 0; j<array.length ; j++){
//         if(i != j){
//             summation = array[i] + array[j]
//             if(summation > sum){
//                 sum = summation;
//             }

//         }
//     }
// }
// console.log(sum)

//Find the repeating and the missing (with O(nxn) complexity, best solution is O(n))
// Input: arr[] = {3, 1, 3}
// Output: Missing = 2, Repeating = 3
// Explanation: In the array,
// 2 is missing and 3 occurs twice
// Input: arr[] = {4, 3, 6, 2, 1, 1}
// Output: Missing = 5, Repeating = 1

// let array = [3,2,3];
// array = array.sort()
// let count = 0;
// let missing;
// for(let i = 0; i<array.length ; i++){
    
//     for(let j = 0; j<array.length ; j++){
//         if( i != j){
            
//             if(array[i] == array[j] ){
//                 answer = array[j];
//                 count++;
//             }    
//         }
//         if(i == 0){
//             if(array.includes(i+1) == false ){
//                 // console.log("missing number is :", i+1)
//                 missing = i+1
//             }
//         }
//     }
// }
// console.log("Repeating number is :",answer);
// console.log("missing num is :",missing);
// if(flag2 == 1){
//     console.log("missing num is :", count2+1)
// }
// if(flag == 1){
//     console.log(array[flag_type])
// }
// let arr = new Set();
// for(let i = 0; i< array.length ; i++){
//     arr.add(array[i]);
// }

// var array = [3,2,3];
// var repetative;
// var missing;
// for(i = 0; i< array.length; i++){
//     for(j = 0; j< array.length ; j++){
//         if(array[i] == array[j]){
//             repetative = array[j];
//         }
//         if(array.includes(i+1) == false){
//             missing = i+1;
//         }
//     }
    
// }
// console.log("Repeating value is :",repetative);
// console.log("Missing value is :",missing);
