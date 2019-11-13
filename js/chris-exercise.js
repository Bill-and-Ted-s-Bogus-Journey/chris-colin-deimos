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

//Exercise #2

function xo(str) {
    str = str.toLowerCase();

    let arrayOfCharacters = str.split("");

    let countTheX = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'x');
    }, 0);

    let countTheO = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'o');
    }, 0);

    if ( countTheX === countTheO ) {
        return true;
    } else {
        return false;
    }
}

console.log(xo("sammy"));