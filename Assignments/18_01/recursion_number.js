let array = [1,2,3,4,5,6,7,8,9]
let index = 0
function print_numbers(array,index){
    console.log(array[index]);
    index += 1;
    if(index == array.length){
        return;
    }
    print_numbers(array,index)
}
print_numbers(array,index)