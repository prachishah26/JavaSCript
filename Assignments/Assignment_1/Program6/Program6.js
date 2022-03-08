
//Q6----Return True if element 1 is divisible 2 and vice versa else False :
function ele(a,b){
    if(a%b==0 || b%a==0){
        return true;
    }
    else{
        return false;
    }

}
console.log(ele(5,10));
console.log(ele(15,5));
console.log(ele(15,10));
