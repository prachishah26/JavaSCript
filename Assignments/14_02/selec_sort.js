function selection_sort(first , second){
    first = first.charCodeAt();
    second = second.charCodeAt();
    let first_normalised;
    let second_normalised;
    if(first >90){
        first_normalised = first - 97;
    }
    else if(first <90){
        first_normalised = first - 65;
    }
    if(second > 90){
        second_normalised = second - 97;
    }
    else if(second < 90){
        second_normalised = second - 65;
    }
    if((first_normalised == second_normalised) && second < first){
        return true;
    }
    else if(first_normalised < second_normalised){
        return true;
    }
    return false;
}
array = ['a','V', 'c'];
for(let i = 0; i < array.length ; i++){
    min = i;
    for(let j = i+1; j<array.length ; j++){
        if(selection_sort(array[j], array[min])){
            min = j;
        }
    }
    let z = array[min];
    array[min] = array[i];
    array[i] = z;
}
console.log(array);
 