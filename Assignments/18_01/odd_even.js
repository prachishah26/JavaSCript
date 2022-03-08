let n = 5;
start = 1;
end =30;
count = 0
//----------------------------------------odd--------------------------------------------
function odd(start,end){
    if(start %2 != 0 && start<end){
        console.log(start)
        count +=1;
        start += 1;
        if(count ==10){
            return 'total 10 odd numbers are as above';
        }      
        return odd(start,end);    
    }
    else{
        return odd(start+1,end);
    }
}
//----------------------------------------even----------------------------------------------
// function odd(start,end){
//     if(start %2 == 0 && start<end){
//         console.log(start)
//         count +=1;
//         start += 1;
//         if(count ==10){
//             return 'total 10 even numbers are as above';
//         }      
//         return odd(start,end);    
//     }
//     else{
//         return odd(start+1,end);
//     }
// }
console.log(odd(start,end));
// console.log(even(start,end));

