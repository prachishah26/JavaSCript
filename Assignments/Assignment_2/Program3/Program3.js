//Q3----Write program for given formula in attached image

let a = 1;
let b = 5;
let c = 1;
let o = ((b**2)-(4*a*c));
let x1 = (-b+Math.sqrt(o))/(2*a);
let x2 = (-b-Math.sqrt(o))/(2*a);
console.log("The roots are " + x1 +" and "+ x2);
console.log(o);