//====================================pattern=========================================
// let pattern = "";
// let n= 5;
// let array = ["b","c","d","e"]
// for(let i = -(n+1); i<(n+2) ; i++){
//     for(let j = -(n+1); j<(n+2) ; j++){
//         if(j == (n+1) || j == -(n+1)){
//             pattern += "|";
//         }
//         else if(i == (n+1) || i == -(n+1)){
//             pattern += "="
//         }
//         else if(i == 0 && j == 0){
//             pattern += "x"
//         }
//         else if(i == 0 || j == 0){
//             pattern += "0"
//         }
//         else if(i == j){
//             pattern += "\\"
//         }
//         else if(i + j == 0){
//             pattern += "/"
//         }
//         else if(Math.abs(i)-Math.abs(j) >= 0 && ((i<0 && j <0)|| (i>0) && (j>0))){
//             pattern += Math.abs(j);
//         }
//         else if(Math.abs(i)-Math.abs(j) >= 0 && ((i<0 && j >0)|| (i>0) && (j<0))){
//             pattern += array[Math.abs(j)-1];
//         }
//         else if(Math.abs(i)-Math.abs(j) <= 0 && ((i>0 && j <0)|| (i<0) && (j>0))){
//             pattern += Math.abs(Math.abs(j)-(n+1));
//         }
//         else if(Math.abs(i)-Math.abs(j) <= 0 && ((i<0 && j <0)|| (i>0) && (j>0))){
//             pattern += array[Math.abs(Math.abs(j)-n)];
//         }
//         else{
//             pattern += " "
//         }
//     }
//     pattern += "\n"
// }
// console.log(pattern)

//==============================program 1==========================================

let category = ["movie", "news", "education", "sports", "politics"];
let age = ["teenager", "adult"];
let final_list = [];

let a, b, c;
for (let i = 0; i < 100; i++) {
    a = parseInt(Math.abs(Math.random() * 10 - 5));
    b = parseInt(Math.random() * 2);
    c = Math.floor(Math.random() * 100)
    final_list.push({ category: category[a], age: age[b], visitors: c })
}
console.log(final_list);
let total_visitors = 0;
let temp_visitors = 0;
let temp_array = [];
let last_array = [];

for(let i = 0; i<category.length ; i++){
    for(let j = 0; j<age.length; j++){
        for(let k = 0 ; k<100 ; k++){
            if(final_list[k].age == age[j] && final_list[k].category == category[i]){
                temp_visitors += final_list[k].visitors;
            }
        }
        temp_array.push(temp_visitors)
        total_visitors += temp_visitors;
        temp_visitors = 0;
    }
    last_array.push(temp_array);
    temp_array = [];
}

let percentage = {};
for(let i = 0; i<last_array.length ; i++){
    percentage[category[i]] = [""+Math.round((last_array[i][0])/total_visitors*100) , ""+Math.round(last_array[i][1]/total_visitors*100)]
}
console.log(percentage);

// let mv = 0, ma = 0, nt = 0, na = 0, et = 0, ea = 0, st = 0, sa = 0, pt = 0, pa = 0;
// let total = 0;

// for (let i = 0; i < 100; i++) {
//     if (final_list[i].type == "movie" && final_list[i].age == "teenager") {
//         mv += 1;
//     }
//     else if (final_list[i].type == "movie" && final_list[i].age == "adult") {
//         ma++;
//     }
//     if (final_list[i].type == "news" && final_list[i].age == "teenager") {
//         nt++;
//     }
//     else if (final_list[i].type == "news" && final_list[i].age == "adult") {
//         na++;
//     }
//     if (final_list[i].type == "education" && final_list[i].age == "teenager") {
//         et++;
//     }
//     else if (final_list[i].type == "education" && final_list[i].age == "adult") {
//         ea++;
//     }
//     if (final_list[i].type == "sports" && final_list[i].age == "teenager") {
//         st++;
//     }
//     else if (final_list[i].type == "sports" && final_list[i].age == "adult") {
//         sa++;
//     }
//     if (final_list[i].type == "politics" && final_list[i].age == "teenager") {
//         pt++;
//     }
//     else if (final_list[i].type == "politics" && final_list[i].age == "adult") {
//         pa++;
//     }

// }
// console.log(ma);

// total = mv + ma + nt + na + et + ea + st + sa + pt + pa;
// console.log(total);
// array = {
//     movie: [(mv / total) * 100, (ma / total) * 100],
//     news: [(nt / total) * 100, (na / total) * 100],
//     education: [(et / total) * 100, (ea / total) * 100],
//     sports: [(st / total) * 100, (sa / total) * 100],
//     politics: [(pt / total) * 100, (pa / total) * 100]
// }
// console.log(array);
// return array;
// }
// console.log(my_obj(final_list));
// "movie", "news", "education", "sports", "politics"


// function swap(array,a,b){
//     let temp = array[a];
//     array[a] = array[b];
//     array[b] = temp;
// }

// function partition(array,left,right){
//     let i = left;
//     let j = right;
//     let pivot = array[Math.floor((left+right)/2)];

//     while(i <= j){
//         while(array[i]<pivot){
//             i++;
//         }
//         while(pivot<array[j]){
//             j--;
//         }
//         if(i <= j){
//             swap(array,i,j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quick_sort(array,left_side,right_side){
//     let index;
//     if(array.length > 1){
//         index = partition(array,left_side,right_side);
//         if(left_side < index){
//             quick_sort(array,left_side, index-1);
//         }
//         if(index < right_side){
//             quick_sort(array,index,right_side)
//         }
//     }
//     return array;

// }

// let array = [1,7,8,5,3];

// console.log(quick_sort(array,0,array.length-1));

