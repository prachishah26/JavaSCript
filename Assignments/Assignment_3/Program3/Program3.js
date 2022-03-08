//Q3-------Create 2D array of array and print all the element with it’s indexes
let array = [[100,200],[300,400]];

text = "";
for(let i = 0; i<array.length;i++){
    for(let j = 0;j<array.length;j++){
    text += "The element is " + array[i][j] + " at the index " + i+" and "+j+ "\n";
}
}
console.log(text);