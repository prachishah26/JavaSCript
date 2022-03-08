//--------------------------functions-----------------------
function mul(a,b){
    return a*b;
}
let x = mul(4,5);
console.log(x);


//Convert Fahrenheit to Celsius:----------------------------

function ftc(Fahrenheit){
    return (5/9) * (Fahrenheit-32);
}
console.log(ftc(100));

//local variable--------------------------------------------

function random(a){
    let b = 5;                       //inside functions = local variable
    let name = 'prachi';
}

//Objects---------------------------------------------------

const person = {
    name : "prachi",
    surname : "shah",
    age : "21",
    degree : "B.E.",
    fullName : function(){
        return this.name + " " + this.surname;
    }
};
console.log(person.fullName());
//console.log(person.fullName);


//MATH---------------------------------------------------------

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT1_2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);

console.log(Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.trunc(1.666));  //to convert into integer
console.log(Math.sign(-44));

console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.abs(-4));

console.log(Math.sin(90*Math.PI/180));
console.log(Math.cos(0*Math.PI/180));
console.log(Math.min(1,2,3,4));

console.log(Math.random());
console.log(Math.log(10));

//-----------------------------Arrays---------------------------

const names = ["prachi","Rachit","Ronakbhai","Akshayaben"];
const cars = [];
cars[0] = "audi";
cars[1] = "BMW";
console.log(cars);
console.log(names);

const activa = new Array("Hero","Honda","EV");
console.log(activa);

let length = names.length;
console.log(length);
console.log(cars[cars.length-1]);

//looping array elements------

for(let i=0; i<names.length;i++){
    console.log(names[i]);
}

/////////////forEach is left

//adding element in arays :
names.push("me");
console.log(names);

//To check whether it is array or not
console.log(typeof(names));
console.log(Array.isArray(names));
console.log(names instanceof Array)

//Array Methods---------------------------------------------------------------
names.toString();
console.log(names.toString());
console.log(names.join(" * "))

console.log(names.pop());  ////removes the last element from arrays
console.log(names);

console.log(cars.shift());
console.log(cars);
console.log(cars.unshift("audi2"));
console.log(cars);

delete cars[0];
console.log(cars);  //////////it will make index 0 as undefined index


///concating two arrays

let s = [1,2,3];
let f = [4,5,6];
let g = s.concat(f);
console.log(g); 

let h = g.concat(9);
console.log(h)

h.splice(3,0,"three");
console.log(h);

console.log(h.slice(2));  //it will cut the elements ap per the input number

console.log(h.slice(1,3));

let ll = [45,1,23,89,0];
yy = ll.sort(function(a,b){return a-b;});
console.log(yy);

let a = 20;
let ageType = (a>18)?"Young":"Child";
console.log(ageType);