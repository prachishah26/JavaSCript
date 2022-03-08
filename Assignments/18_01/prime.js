let n = 11;
index = 2;
function prime(n,index){
    if(n == 1 ){
        return "unique num";
    }
    if(index > Math.sqrt(n)){
        return "prime number";
    }
    else if(n%index == 0){
        return "Not prime";
    }
    index += 1;
    return prime(n,index);
}
console.log(prime(n,index));