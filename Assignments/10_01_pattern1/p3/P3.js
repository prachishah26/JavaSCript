// 11111
// 22222
// 33333
// 44444
// 55555
//--------------------------------------------------------------------------------------------------------
let n= 4;
let pattern = "";
for(let i = 1;i<=n;i++){
    for(let j = 1; j<=n;j++){
        pattern += ""+i;
    }
    pattern += "\n";
}
console.log(pattern);