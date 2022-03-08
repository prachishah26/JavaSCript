//Q1-------Find if given substring is in string
str1 = "Hello ! good afternon";
console.log(str1.match(/good/g));


//Q2-------Print all the elements of the array
let cars = ["audi", "bmw", "nano","i10"];
for(let i = 0; i <cars.length ; i++){
    console.log(cars[i]);
}


//Q3-------Create 2D array of array and print all the element with it’s indexes
let array = [[100,200],[300,400]];

text = "";
for(let i = 0; i<array.length;i++){
    for(let j = 0;j<array.length;j++){
    text += "The element is " + array[i][j] + " at the index " + i+"and"+j+ "\n";
}
}
console.log(text);


//Q4. Do multiplication elements of two array with same length and create 3rd array
 let arr1 = [1,2,3];
 let arr2 = [4,5,6];
 let arr3 = [];
 let a;
for (let i = 0; i<arr1.length;i++){
    
    a = arr1[i]*arr2[i];
    arr3.push(a);
}
console.log(arr3);


