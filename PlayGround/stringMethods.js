let str = "prachi shah";
console.log(str.length);
console.log(str.slice(2,5));
console.log(str.slice(7));
console.log(str.slice(-8));
console.log(str.substring(5,9)); ///can not take negative index
let str2 = str.replace("shah", "S");
console.log(str2);
let str3 = str.replace(/ac/i, "AC");   //insensitive
console.log(str3);

let text = "Hello hii Hello";
let text2 = text.replace(/Hello/g,"no");
console.log(text2);

console.log(text.concat(" ",text2));

text7 = "        hii            ";
console.log(text7.trim());

let num = "6";
console.log(num.padStart(4,0));
console.log(num.padEnd(4,0))
console.log(text.charCodeAt(0));
console.log(text.split(" "));
console.log(text.indexOf("Hello"));
console.log(text.lastIndexOf("Hello"));
console.log(text.search("hii"));
console.log(text.match(/ii/g));
console.log(text.includes("hii"));

//startsWith(" ",index)
//endsWith(" ",index)
