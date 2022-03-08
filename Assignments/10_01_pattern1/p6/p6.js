// Write a program to draw a pattern given below from 0-9.  
// E.g. if n==5
//     1
//    121
//   12321
//  1234321
// 123454321
//---------------------------------------------------------------------------------------------------

// let n = 5;
// let pattern = "";
// for(let i = 1;i<=n;i++){
//     for(let j=n-1;j>=i;j--){
//         pattern += " ";
//         }
//     for(let k = 1;k<=i;k++){
//         pattern += k;
//     }    
    
//     for(let l=2;l<=i;l++){
//         pattern +=l-1;
//     }
//     pattern += "\n";


//     }
// console.log(pattern);

//----------------------------------------------------------------
let n= 4 ;
pattern = "";
for(let i = 0;i<n;i++){
    for(let j=-(n-1);j<n;j++){
        if(i-Math.abs(j) >= 0){
            pattern += i-Math.abs(j)+1;
        }
        else{
            pattern += " ";
        }
        
    }
    pattern += "\n";

}
console.log(pattern);