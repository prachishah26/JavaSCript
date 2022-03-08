// P2(beta):- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed) [Don't Reveal this one pre handed]
// E.g. if n==4
// ---@@---
// --@@@@--
// -@@@@@@-
// @@@@@@@@
// @@@@@@@@
// -@@@@@@-
// --@@@@--
// ---@@---

//-----------------------------------------------------------------------------------------

let n = 4;
let pattern = "";
for (let i = -n; i <= n; i++) {
    if (i == 0) {
        continue;
    }
    for (let j = -n; j <= n; j++) {
        if (j == 0) {
            continue;
        }
        if (Math.abs(i) + Math.abs(j) <= n + 1 ) {
            pattern += "@";
        }
        else {
            pattern += "-";
        }



    }
    pattern += "\n"
}
console.log(pattern);