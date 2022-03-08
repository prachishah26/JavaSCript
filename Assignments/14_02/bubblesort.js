// let array = [9,2,6,0,12];
// let a=array.length;
// let c;

// while(a<=array.length&& a>= 0){
//     for(let i= 0; i<array.length; i++){
//         if(array[i]>array[i+1]){
//             c = array[i+1];
//             array[i+1] = array[i];
//             array[i] = c;
//         }
//     }
//     a--;
// }
// console.log(array)


let array = [9,2,6,0,12];
let a=array.length;
let c;
for(let j = 0; j<array.length ; j++){
    for(let i= 0; i<array.length; i++){
        if(array[i]>array[i+1]){
            c = array[i+1];
            array[i+1] = array[i];
            array[i] = c;
        }
    }
}
console.log(array);