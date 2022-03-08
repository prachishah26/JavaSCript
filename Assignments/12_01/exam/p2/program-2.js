let n = 5;
let pattern = "";
for (let i = -(n + 1); i <= n + 1; i++) {
    for (let j = -(n + 1); j <= n + 1; j++) {
        if (Math.abs(j) == n + 1 || (i == 0 && j == 0)) {
            pattern += "O";
        }
        else if (Math.abs(i) == n + 1) {
            pattern += 0;
        }
        else if ((Math.abs(i) - Math.abs(j)) >= 0 && (i > 0 & j > 0 || i < 0 && j < 0)) {
            pattern += Math.abs(j) + "";
        }
        else if ((Math.abs(i) - Math.abs(j)) <= 0 && (i < 0 && j > 0 || i > 0 && j < 0) ){
            pattern += n - Math.abs(j) + 1 + "";

        }
        else {
            pattern += " ";
        }
    }
    pattern += "\n";
}
console.log(pattern);