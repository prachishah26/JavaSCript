//----------------------------------swap two nums without third variable-------

// a = 5;
// b = 10;

// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b);

//-----------------------------fibonacci series--------------------------------

// let a = 0;
// let b = 1;
// let sum = 0;
// let n = 7;
// for(let i = 0; i<n ; i++){
//     if(i == 0 || i == 1){
//         console.log(i);
//     }
//     else{
//         sum = a+b;
//         a = b;
//         b = sum;
        
//         console.log(sum);

//     }

// }

//--------------------------------prime number--------------------


// let n = 18;
// // let m = n/2;

// for(let i = 2 ; i<n;i++){
//     if(n%i==0){
//         console.log("it is not prime number");
//         break;
//     }
//     else{
//         console.log("it is prime number");
//         break;
//     }
// }

//---------------------palindrome num-----------------------------

// let n = 3931;
// let temp = n;
// let rev = 0; 
// let r;
// while(n>0){
//     r = n%10;
//     rev = rev*10 + r;
//     n = parseInt(n/10);
// }

//     if(rev == temp){
//         console.log("p");
//     }
//     else{
//         console.log("N");
//     }

// console.log(rev);


//------------------------------factorial--------------------------------
// let a;

// function fact(a){
//     if(a==0 || a==1){
//         return 1;
//     }
//     else{
//         return a * fact(a-1);
//     }

// }
// console.log(fact(6));

//-------------------------------Armstrong number------------------------

// let a = 1531;
// let temp = a;
// let r;
// sum = 0;
// function asn(a){
//     while(a>0){
//         r = a%10;
        
//         sum += r**3;
//         a = parseInt(a/10);        
//     }
//     if(sum == temp){
//         return "A";
//             }
//     else{
//         return "N";
//     }
// }

// console.log(asn(a));



//-----------------------------------sum of digits------------------------------

// let n = 12312
// let temp = n;
// let sum = 0;
// function sum1(n){
//     while(n>0){r = n%10;
//     sum += r;
//     n = parseInt(n/10);
//     }
//     return sum;
  
// }
// console.log(sum1(n));



//---------------------------------star-triangle------------------------------------

let n = 5;
let str = "";
for (let i = 1; i<=n; i++ ){
    for(let j = 0; j<i; j++){
        str += "*"
    }
    str += "\n";
}
console.log(str)
