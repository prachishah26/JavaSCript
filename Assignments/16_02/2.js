// let rs_to_withdraw = 30;
// let initial_balance = 120.00
// if((rs_to_withdraw % 5 == 0) && (rs_to_withdraw + 0.5 <= initial_balance)){
//     console.log((initial_balance - rs_to_withdraw-0.5).toFixed(2));
// }
// else{
//     console.log((initial_balance).toFixed(2));
// }



























let input = ["school","store"];

let buildings = [
    {Gym : 0,School : 1,Store : 0},
    {Gym : 1,School : 0,Store : 0},
    {Gym : 1,School : 1,Store : 0},
    {Gym : 0,School : 1,Store : 0},
    {Gym : 0,School : 1,Store : 1}
]
let b;
let flag1 = 0;
let flag2 = 0;
let flag3 = 0;
let arr = [];
let cout = 0;
let final = []

for(let i = 0; i< 5 ; i++){
    if(buildings[i].Gym == 1){
        if(input.includes("Gym")){
            // flag1 =1;
            b = i;
            cout += 1; 
            // final.push(i);

        }
    }
    if(buildings[i].School == 1){
        if(input.includes("School")){
            // flag2 =1;
            b = i;
            cout += 1;
            // final.push(i)
        }
    }
    if(buildings[i].Store == 1){
        if(input.includes("Store")){
            // flag3 = 1;
            b = i;
            cout += 1;
            // final.push(i);
        }
    }
    arr.push(cout);
    cout = 0;
}
let max;
let last_arr = [];
for(let i = 0; i<arr.length ; i++){
    max = Math.max(...arr);
    if(arr[i] == max){
        last_arr.push(i+1);
    }
    
}
console.log(last_arr);

// if(flag == 1){
//     console.log(b);
// }
// console.log(arr);
// let myset = new Set(arr);
// console.log(myset);                 




