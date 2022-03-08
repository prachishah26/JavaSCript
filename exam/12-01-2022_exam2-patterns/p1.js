//Write a program to draw a pattern given below from 0-9 (odd).  (max 2 loop allowed)
// E.g. if n==3

let n = 3;
let pattern = "";
for (let i = 1; i <= n * n + 2; i++) {
    count = n;
    for (let j = -n; j <= n; j++) {
        if ((i == 1) && (j == 0)) {
            pattern += 0;
        }
        else if (i == n * n + 2) {
            pattern += "=";
        }
        else if (i < n * n + 2 && i >= (n * n + 2 - n)) {
            if (Math.abs(j) == 2) {
                pattern += "|";

            }
            else if (j == 0) {
                pattern += "=";
            }
            else {
                pattern += " ";
            }
        }
        else if (j == 0) {
            pattern += "-";
        }
        else if (i > 1 && i <= count + 1) {
            if (Math.abs(i) - Math.abs(j) > 0) {
                // pattern += "*";
                if (Math.abs(i) - Math.abs(j) == 1) {
                    pattern += "*";
                    // if(j <0){
                    //     pattern += "/";
                    // }
                    // 
                    // else if (j>0){
                    //     pattern += "\\";
                }
                else {
                    pattern += "-";
                }
            }
            else {
                pattern += " ";
            }
        }


        else {
            pattern += " ";
        }
    }
    pattern += "\n"
}
console.log(pattern);