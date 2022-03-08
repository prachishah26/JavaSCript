//Q1----Return true if given variable is divisible by 5 else return 5


function value(a) {
    if (a%5==0) {
        return true;
    }
    else {
        return 5;
    }
}
console.log(value(1));


//Q2----Return True if given variable is string else return False
function str(a){
    if(typeof a == "string"){
        return true;
    }
    else{
        return false;
    }
}
console.log(str(777));

//Q3----Return True if given variable is float else return False

function fl(a){
    if(typeof a == "number"){
        if(Number.isInteger(a)){
            return false;
        }
        else{
            return true;

        }
        
    }
}
console.log(fl(1));
console.log(fl(1.1));
//Q4----Calculator


let a = 5;
let b = 10;
m = "/";
switch(m){
    case "+" :
        console.log(a+b);
        break;
    case "-" :
        console.log(a-b);
        break;
    case "*" :
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;

}
// Q5 ---- smaller number

function min(a,b){
    if (a<b){
        console.log("a is smaller");
    }
    else{
        console.log("b is smaller");

    }
}
min(1,2);



//Q6----Return True if element 1 is divisible 2 and vice versa else False :
function ele(a,b){
    if(a%b==0 || b%a==0){
        return true;
    }
    else{
        return false;
    }

}
console.log(ele(5,10));
console.log(ele(15,5));
console.log(ele(15,10));












