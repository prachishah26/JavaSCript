// arr=[0,1,-1]

// function insertionSort(arr, n) 
// { 
//     let i, key, j; 
//     for (i = 1; i < n; i++)
//     { 
//         key = arr[i]; 
//         j = i - 1; 

//         while (j >= 0 && arr[j] > key)
//         { 
//             arr[j + 1] = arr[j]; 
//             j = j - 1; 
//         } 
//         arr[j + 1] = key; 
//     } 
// } 
// console.log(insertionSort(arr,2))
// // console.log(arr)

// for(let i = 0; i<3;i++){
    
// }

for(let i = 0 ; i < array.length ; i++){
    min = i;
    for(let j = i+1; j< array.length ; j++){
        if(selection(array[j], array[min])){
            min = j
        }
    }
    z = array[i];
    array[i] = array[min];
    array[min] = array[i]
}