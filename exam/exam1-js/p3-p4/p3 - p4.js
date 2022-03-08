//Take two input array and Create final array of 100 random JSON elements.
var category = [
    "movie",
    "news",
    "education",
    "sports",
    "politics"
    ];
var age = [
    "teenager",
    "adult"
    ];
let last_arr = [];
let f_arr = [];
//console.log(num_visitors);

for(let i = 0; i<101;i++){
    let j = Math.abs(parseInt(Math.random()*10-5));
    let num_visitors = parseInt(Math.random()*100 +1);
    let p = Math.round(Math.random()); //it will give 0 or 1 as output
    f_arr = 
        {
            category : category[j],
            age : age[p],
            visitors : num_visitors 
        }       
    ;
    last_arr.push(f_arr)
    

}
// console.log(last_arr)  

 //--------------------------------program 4-----------------------------------


let matrix = {};
let total_visitors = 0;
for(let i = 0;i<last_arr.length;i++){
    var key = last_arr[i].category + "_" + last_arr[i].age;
    if(matrix[key]==undefined){
        matrix[key] = 0;
    }
    matrix[key] += last_arr[i].visitors;
    total_visitors += last_arr[i].visitors;

}
console.log(matrix);
console.log(total_visitors);