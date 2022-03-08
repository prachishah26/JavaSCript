// P3:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed) [Don't Reveal this one pre handed]
// E.g. if n==5
// \ - - - /
// | \   / | 
// |   o   |
// | /   \ |
// / - - - \

//------------------------------------------------------------------------------------------

// let n= 8;
// let pattern = "";
// for(let i = 1;i<=n;i++){
//     for(let j =1;j<=n;j++){
//         if(i ==(n+1)/2 && j == (n+1)/2){
//             pattern += "o";
//         }
//         else if(i ==j){
//             pattern += "\\";
//         }
//         else if(i+j==n+1){
//             pattern += "/";
//         }
        
//         else if (i ==1 || i == n){
//             pattern += "-";
//         }
//         else if(j == 1 || j == n){
//             pattern += "|";
//         }
//         else{
//             pattern += " ";
//         }
//     }
//     pattern += "\n";
    
// }
// console.log(pattern);



let n= 7;
let pattern = "";
for(let i = 1;i<=n;i++){
    for(let j =1;j<=n;j++){
        if((n%2 != 0) && i ==(n+1)/2 && j == (n+1)/2){
            pattern += "0";
        }
        // if (i==n/2 && j==(n/2)+1)
        else if((n%2 == 0) && (i==n/2 && j==n/2) || (i==n/2 && j==(n/2)+1) || (i==(n/2)+1 && j==n/2) || (i==(n/2)+1 && j==(n/2)+1)){
            pattern += "0";
        }
        else if(i ==j){
            pattern += "\\";
        }
        else if(i+j==n+1){
            pattern += "/";
        }
        
        else if (i ==1 || i == n){
            pattern += "-";
        }
        else if(j == 1 || j == n){
            pattern += "|";
        }
        else{
            pattern += " ";
        }
    }
    pattern += "\n";
    
}
console.log(pattern);


//(n%2 == 0) && (i == n/2) && (i == (n/2 +1)) && (j == n/2) && (j == n/2 +1)