// P1:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed)
// E.g. if n==5 

// # * * * #
// * # * # *
// * * # * *
// * # * # *
// # * * * #

//--------------------------------------------------------------------------------------------

let n = 5;
let pattern = "";
for(let i = 1;i<=n;i++){
    for(let j = 1;j<=n;j++){
        if(i == j || i+j ==n+1){
            pattern += "#";
        }
        else{
            pattern += "*";
        }
    }
    pattern += "\n"
}
console.log(pattern);