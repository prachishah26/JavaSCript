// array = ['z','x','Z','b'];
// let c = "";
// let a; let b; let m;
// for(let i = 0; i<array.length ; i++){
//     for(let j = 0; j<array.length ; j++){
//         m = array[j].toLowerCase();
//         n = array[j+1].toLowerCase();
//         a = m.charCodeAt(0);
//         b = n.charCodeAt(0);
//         if(a>b){
//             c = array[j+1];
//             array[j+1] = array[j];
//             array[j] = c;
//         }
//     }
//     console.log(a,b)
// }
// console.log(array)
// console.log(array[2].charCodeAt(0))
let array = ["a", "C" , "A" , "x"];
let m = [];
let index; 
// for(let j = 0; j<array.length ; j++){
    
// }
// console.log(m);
for(let i = 0; i<array.length ; i++){
    m.push(array[i].charCodeAt(0))
    for(let j = 0; i<array.length; j++){
        
        if(array[j].charCodeAt(0) > 90){
            array[j] -= 97;
        }
        else if(array[j].charCodeAt(0)<90){
            array[j] -= 65;
        }
   
}


console.log(array[j])



///------------------------------------------

    // m.sort(function(a,b){             //sorting
    //     return a-b;
    // })