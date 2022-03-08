array = [1,6,4,2,3,9,0];
/* We have populated the solutions for the 10 easiest problems for your support.*/
/* Click on the SUBMIT button to make a submission to this problem.*/

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);
let input ='';
// your code goes here

function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split('\n');//.map(Number);
}

function main() {
    prepareInput();
    var T = input.splice(0, 1)[0];
    number = 0;
    let sumArr=[];
    input.sort((a,b)=>a-b);
 
      process.stdout.write(input.join('\n'));

}