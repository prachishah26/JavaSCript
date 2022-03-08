let n = 5;
let pattern = "";

for (let i = -(n + 1); i <= n + 1; i++) {
    for (let j = -(n + 1); j <= n + 1; j++) {
        if (Math.abs(j) == n + 1) {
            pattern += "|";
        }
        else if (Math.abs(i) == n + 1) {
            pattern += "=";
        }
        else if (i == 0 && j == 0) {
            pattern += "x";
        }
        else if (i == 0 || j == 0) {
            pattern += "0";
        }
        // else if (Math.abs(i) - Math.abs(j) == 0) {
        //     if ((i < 0 && j < 0) || (i > 0 && j > 0)) {
        //         pattern += "\\";
        //     }
        //     else {
        //         pattern += "/";
        //     }
        // }
        else if(i ==j){
            pattern += "\\";
        }
        else if(Math.abs(i)==Math.abs(j)){
            pattern += "/";
        }
        else if(j<0 && i<0 && i<=j || j>0 && i>0 && i>=j){
            pattern += Math.abs(j);
        }else if(j>0 && i<0 && i<=j || j>0 && i>0 && i>=j){
            pattern += Math.abs((n-j)+1)
        }
        else if(j<0 && i>0 && i+j<=0){
            pattern += Math.abs(j+n) +1;
        }
        else if (i < 0 && j > 0 && i + j <= 0) {
            pattern += String.fromCharCode(Math.abs(j) + 97);
        }
        else if (i > 0 && j < 0 && i + j >= 0) {
            pattern += String.fromCharCode(Math.abs(j) + 97);
        }
        else if (i < 0 && j < 0 && i > j) {
            pattern += String.fromCharCode(Math.abs(j + n + 1) + 97);

        }
        else if (i > 0 && j > 0 && i < j) {
            pattern += String.fromCharCode(Math.abs(j - n - 1) + 97);
        }
        else {
                pattern += " ";
            }


    }
    pattern += "\n";

}
console.log(pattern);


