//Create two arrays one containing numbers from 0-9 and the second containing letters from
//a-e. Create 10 random pairs of 3 alphanumeric and store them in an array.

numberArray = [0,1,2,3,4,5,6,7,8,9];
letterArray = ["a","b","c","d","e"];
newarray = numberArray.concat(letterArray);
let final =[];


for(let i = 0; i<10;i++){
    let x = parseInt(Math.random()*10);
    let y = parseInt(Math.random()*5);
    let z = Math.abs(parseInt(Math.random()*15));

    g = numberArray[x];
    r1 = letterArray[y];
    r2 = newarray[z];
    let d = [g,r1,r2];
    let last_Arr = [];
    
    while(d.length >0){
        let index = parseInt(Math.random()*(d.length));
        let value = d[index];
        d.splice(index,1);
        last_Arr += value ;
        // final.push(last_Arr);
        // console.log(value);
    }
    console.log(last_Arr);
    
       
}




