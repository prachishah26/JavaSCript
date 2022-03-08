// function insertion_sort(first, second, third){
//     if(isNaN(first) == true){
//         first = first.charCodeAt();
//         if(first > 90){
//             first_normalised = first - 97;
//         }
//         else if(first <90){
//             first_normalised = first - 65;
//         }
//     }
//     if(isNaN(second) == true){
//         second = second.charCodeAt();
//         if(second > 90){
//             second_normalised = second - 97;
//         }
//         else if(second <90){
//             second_normalised = second - 65;
//         }
//     }
//     // if(isNaN(third) == true){
//     //     third = third.charCodeAt();
//     //     if(third > 90){
//     //         third_normalised = third - 97;
//     //     }
//     //     else if(third <90){
//     //         third_normalised = third - 65;
//     //     }
//     // }
//     if(first > second){
         
        
//     }
// }
// array = [9, 5, 4.6, 'a', 'z', 'Z',0]
// for(let i = 0; i<array.length ; i++){
    
//     for(let j = 2; j< array.length ; j++){
//         insertion_sort(array[0],array[1]);
//     }

// }

arr = [0, 'a', -1, 'A', 0, 1.5, 'M', 'C', 8, 3, 1, 'b', 0, 0, 'B']
function check_values_small(first_input, second_input) {
    first_val = first_input
    second_val = second_input
    if (typeof (first_val) == 'string') {
        first_val = first_val.charCodeAt()

        if (first_val > 91) {
            first_norm = first_val - 97
        }
        else {
            first_norm = first_val - 65
        }
    }
    else {
        first_norm = first_val
    }
    if (typeof (second_val) == 'string') {
        second_val = second_val.charCodeAt()
        if (second_val > 91) {
            second_norm = second_val - 97
        }
        else {
            second_norm = second_val - 65
        }
    }
    else {
        second_norm = second_val
    }
    // console.log(first_norm == second_norm ,typeof(first_input) != 'string',typeof(second_input) != 'string',first_norm == second_norm && typeof(first_input) != 'string',first_input,second_input)
    // console.log(first_norm == second_norm && typeof(second_input) != 'string',(first_norm == second_norm && second_val>first_val),second_val,first_val)
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
// arr=[0,1]
for (i = 0; i < arr.length; i++) {
    temp = arr[i];
    j = i - 1;
    while (j >= 0 && check_values_small(arr[j], temp)) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = temp;
}
console.log(arr)

