//P5

let n = 5;
let text = "";
for(let i =0;i<n;i++){
    for(let j=0;j<n;j++){
        if((i+j)>=n-1){
            text += "*";
        }
        else{
            text += " ";
        }    
    }
    text += "\n";
}
console.log(text);