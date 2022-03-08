//P4:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed) [Don't Reveal this one pre handed]
// E.g. if n==5 

// 0 0 0 0 0 0 0 0 0 0 0 0 0
// 0 a b c d e f 5 4 3 2 1 0
// 0   a b c d e 4 3 2 1   0
// 0     a b c d 3 2 1     0
// 0       a b c 2 1       0
// 0         a b 1         0
// 0           a           0
// 0         1 b a         0
// 0       1 2 c b a       0
// 0     1 2 3 d c b a     0
// 0    1 2 3 4 e d c b a  0
// 0 1 2 3 4 5 f e d c b a 0
// 0 0 0 0 0 0 0 0 0 0 0 0 0

//----------------------------------------------------------------------------------------------
// ascii values "97": "a",     "98": "b",     "99": "c",     "100": "d",    
// "101": "e",    "102": "f",
let n = 5;
let pattern = "";
let array = ['a','b','c','d','e','f'];
for(let i = -(n+1);i<=(n+1);i++){
    for(let j = -(n+1);j<=(n+1);j++){
        if( i == Math.abs(n+1)  || j == Math.abs(n+1) || j == -(n+1) || i == -(n+1)){
            pattern += "0";
        }
        else if(Math.abs(i)-Math.abs(j)>=0){
            if(i<0 && j>0 || i>0 && j<0){
                pattern+=Math.abs(i)-Math.abs(j)+1
            }
            else{
                pattern+=array[Math.abs(i)-Math.abs(j)]
                
            }
        }        
        else{
            pattern += " ";
        }
    }
    pattern += "\n";
}
console.log(pattern);

