//Q1----Give Result of asin(x) +acos(x)

let a = 4;
let x = 90;
let y = a*(Math.sin(x*Math.PI/180) + Math.cos(x*Math.PI/180));
console.log(y);


//Q2----Give Result of abs(x)*x

let x = -5;
let y = (Math.abs(x))*x;
console.log(y);

//Q3----Write program for given formula in attached image

let a = 1;
let b = 5;
let c = 6;
let o = ((b**2)-(4*a*c));
let x1 = (-b+Math.sqrt(o))/(2*a);
let x2 = (-b-Math.sqrt(o))/(2*a);
console.log("The roots are " + x1 +" and "+ x2);
console.log(o);