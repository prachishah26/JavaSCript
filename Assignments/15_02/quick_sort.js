// function swap(array , i , j){
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
// }
// function part(array,i,j){
//     pivot = array[0];
//     while(i<=j){
//         // con_i = false
//         // con_j = false;
//         while(array[i] < pivot){
//             i += 1;
//             // con_i = true
//         }
//         while(array[j]> pivot){
//             j -= 1;
//             // con_j = true;
//         }
//         // if(con_i == false){
//         //     temp = array[i];
//         //     array[i] = array[pivot];
//         //     array[pivot] = temp;
//         //     return swap(array[i],array[pivot])
//         // }
//         // if(con_j == false){
//         //     temp = array[j];
//         //     array[j] = array[pivot];
//         //     array[pivot] = temp;
//         //     return swap(array[pivot],array[j])
//         // }
//         if(i <= j ){
//             swap(array , i, j);
//             i += 1;
//             j -= 1;
//         }
//     }
//     return i;
// }
// function quick_sort(array , i, j){
    
//     if(array.length > 1){
//         let index = part(array , i, j);
//         if(i < index -1){
//             quick_sort(array,i,index-1);
//         }
//         if(index < j){
//             quick_sort(array, index, j)
//         }
//     }
//     return array;
// }
// array = [10,7,2,5,1,3];
// console.log(quick_sort(array, 0,5));


array = [1,2,5,6,8,3,4];
function swap(array, left,right){
    let temp = array[left];
    array[left] = array[right]
    array[right] = temp
}
function partition(array, left, right){
    i = left;
    j = right;
    pivot = array[Math.floor((right + left) / 2)];
    while(i <= j ){
        while(array[i] < pivot){
            i++;
        }
        while(array[j]>pivot){
            j--
        }
        if( i <= j){
            swap(array, i, j)
            i++;
            j--;
        }
    }
    return i;
}
function quick_sort(array, leftside, rightside){
    let index;
    if(array.length > 1){
        index = partition(array , leftside , rightside)
        if(leftside < index-1){
            quick_sort(array, leftside, index-1)
        }
        if(index<rightside){
            quick_sort(array, index , rightside)
        }
    }
    return array;
}
var sortedArray = quick_sort(array, 0, array.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]