// Exercise #1

function equal(a, b, c) {
    if(a === b && a === c){
        return 3;
    }else if(a === b || a === c || b === c){
        return 2;
    }else{
        return 0;
    }
}

console.log(equal(2, 3, 2));