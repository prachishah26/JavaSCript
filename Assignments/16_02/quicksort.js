function normalised(first,second){
    let first_inp= first;
    let second_inp = second;
    if(typeof first_inp == "string"){
        first_inp = first.charCodeAt();
        if(first_inp>91){
            first_norm = first_inp - 97;
        }
        else if(first_inp<91){
            first_norm = first_inp - 65;
        }
    }
    else{
        first_norm = first_inp;
    }
    if(typeof second_inp == "string"){
        second_inp = second.charCodeAt();
        if(second_inp>91){
            second_norm = second_inp - 97;
        }
        else if(first_inp<91){
            second_norm = second_inp - 65;
        }
    }
    else{
        second_norm = second_inp
    }
    if (first_norm == second_norm && typeof (second_input) != 'string') {
        return true
    }
    else if (first_norm == second_norm && second_val > first_val && typeof (first_val) != 'string') {
        return false
    }
    else if (first_norm == second_norm && second_val > first_val) {
        return true
    }
    else if (first_norm > second_norm) {
        return true 
    }
    return false
}


function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
function partition(array, left, right) {
    let i = left;
    let j = right;
    let pivot = array[Math.floor((left + right) / 2)];

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (pivot < array[j]) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
        
    }
    return i;
}
function quick_sort(array, left_side, right_side) {
    let index;
    if (array.length > 1) {
        index = partition(array, left_side, right_side);
        if (left_side < index - 1) {
            quick_sort(array, left_side, index - 1);
        }
        if (index < right_side) {
            quick_sort(array, index, right_side)
        }
    }
    return array;
}
let array = [1, 7, 8, 5, 3];
console.log(quick_sort(array, 0, array.length - 1));









