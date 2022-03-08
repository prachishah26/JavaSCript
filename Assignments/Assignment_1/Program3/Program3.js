//Q3----Return True if given variable is float else return False

function fl(a){
    if(typeof a == "number"){
        if(Number.isInteger(a)){
            return false;
        }
        else{
            return true;

        }
        
    }
}
console.log(fl(1));
console.log(fl(1.1));