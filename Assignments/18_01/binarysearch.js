let array = [23,27,30,31,47,57,60,65,70,99];
let n = 60;
let start_index = 0;
let end_index = array.length - 1;
let mid;
function binary_search(array, start_index, end_index) {

    mid = Math.round(((start_index + end_index) / 2));

    if (n == array[start_index]) {
        return start_index;
    }
    else if (n == array[end_index]) {
        return end_index;
    }

    else if (array[start_index] < n && n <= array[mid]) {
        return binary_search(array, start_index, mid);
    }
    else if (array[mid] < n && n < array[end_index]) {
        return binary_search(array, mid + 1, end_index);

    }
    else {
        return -1;
    }

}
console.log(binary_search(array, start_index, end_index));
