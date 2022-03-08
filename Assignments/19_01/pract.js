// let n = 5;
// pattern = "";
// for (let i = 1;i<=5;i++){
//     for(let j = 1;j<=5;j++){
//         if(i == j){
//             pattern += 1;
//         }
//         else{
//             pattern += i+j-1;
//         }
//     }
//     pattern += "\n";

// }
// console.log(pattern);

// function make(){
//     let a = 5;
//     let b = 5;
//     c = 1; 
// }
// make()
// console.log(c);

// console.log(isNaN('AppDividend'))

// let a = 1234;

// function nta(a){
//     let array = a.split("");
//     return array;
// }
// var myArray = nta(a);
// console.log(myArray);



// let array = a.toString().split("");

// console.log(array);


//------------------------
// let sp = P.toString()
    // for(let i = 0;i<sp.length;i++){
    //     q.push(+sp.charAt(i));
    // }
    // for(let j = 0;j<q.length;j++){
    //     if(q[j]=="4"){
    //         count += 1;
    //     }
    // }
    // console.log(count);
//     function nta(a){
//     let array = a.toString().split("");
//     return array.map(x => parseInt(x));
// }
//     var myArray = nta(P);
//     for(let i = 0; i<myArray.length;i++){
//         if(myArray[i]=="4"){
//             count += 1;
//         }
//     }
//     console.log(count);

//------------------------

// let P = parseInt(n[0]);
//         let count = 0;
//     // 
//         let array = a.toString().split("");
//     for(let i = 0; i<array.length;i++){
//         if(array[i]=="4"){
//         count += 1;
//     }
//     console.log(count);

    //-----------------------------------------


let a = 123444;
count = 0;
while(a){
    b = a%10;
    a = parseInt(a/10);
    if(b == 4){
        count += 1;
    }
}
console.log(count);

// let a = [1,12,3,9]

// console.log(Math.max(...a))
// console.log(Math.floor(5/2));