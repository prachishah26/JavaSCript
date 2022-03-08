let array = [1,2,3,4,5,6,7,8,9,10];
let start = 0;
let end = array.length-1;
sum =0;
function sum_all(array,start,end){
    sum += array[start];
    start += 1;
    if(array[start]>=array[end]){
        sum += array[end]
        return console.log(sum);
    }
    sum_all(array,start,end);
}
sum_all(array,start,end);
