console.log("hello world");

console.log((3*5)-5);
console.log (500 + "1")

const a =4;
const b = 3;
const sum = a+b;
console.log(a+b)

let person = "prachi";
let c = 9;
let d= 1;
let e =2;
console.log(person + c);
console.log(person + c+e);
console.log(c+e+person );
console.log(typeof person);
//alert("its alert");

 //-------------------------------------function
function multiply(p1,p2){
    return p1*p2;
}
console.log(multiply(3,2))
 //------------------------------------------------------------------------
function remainder(n1,n2){
    return n1%n2;
}
console.log(remainder(7,2));

//--------------------------------------Object

const person1 = {
    name : "prachi",
    age : 21,
    degree : "b.e.",
}
console.log(person1.name);

//--------------------------------------if_else
z =9;
c = 10;
if(z!=0){
    console.log("it is not zero");
}
else{
    console.log("it is zero");
}


//--------------------------------------switch-case
let l=5;
switch(l){
    case 2:
        console.log("no");
        break;
    case 5:
        console.log("yes");
        break;
    default:
        console.log("no value");
}