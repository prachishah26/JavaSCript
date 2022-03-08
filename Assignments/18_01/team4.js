// 3. Write a program in javascript to display the multiplication table of a given integer.

let n = 7;
let c ;
i = 1;
function table(n,i){
    if(i<=10){
        c = n*i;
        console.log( n +" * " + i + " = " + c  )
        i += 1;
        return table(n,i);
    }
    else{
        return "";
    }
    
}
console.log(table(n,i));