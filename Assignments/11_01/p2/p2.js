// P2:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed) [Don't Reveal this one pre handed]
// E.g. if n==5
//     @
//    @@
//   @@@
//  @@@@
// @@@@@
//      @@@@@
//      @@@@
//      @@@
//      @@
//      @

//----------------------------------------------------------------------------------------

// let n = 7;
// pattern = "";
// for(let i = 0;i<=(n*2-1);i++){
//     for(let j =0; j<=(n*2-1);j++){
//         if((i<n) && (j<n) &&(i+j>=n-1)){
//             pattern += "@";
//         }
//         else if((i>=n) && (j>=n)){
//             if(i+j>=2*n && i+j<= 2*n+n-1){
//                 pattern += "@";
//             }
//             else{
//                 pattern += " ";
//             }
//         }
//         else{
//             pattern += " ";
//         }
//     }
//     pattern += "\n";
// }
// console.log(pattern);



let n = 5;
pattern = "";
for(let i = 0;i<=(n*2-1);i++){
    for(let j =0; j<=(n*2-1);j++){
        if((i<n) && (j<n) &&(i+j>=n-1)||((i>=n) && (j>=n) && i+j>=2*n && i+j<= 2*n+n-1)){
            pattern += "@";
        }
        else{
            pattern += " ";
        }
    }
    pattern += "\n";
}
console.log(pattern);