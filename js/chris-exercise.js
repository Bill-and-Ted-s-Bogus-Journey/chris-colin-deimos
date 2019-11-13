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

// console.log(equal(2, 3, 2));

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

// console.log(xo("sammy"));


let numExample = 11211230;
let numExample2 = 13001120;
let numExample3 = 23336014;
let resultingNumber;


let descendentOfNumber = (number) => {
    let numberToString = number.toString();
    let arr = numberToString.split("");
    let bucketArr = [];
    for(let i = 0; i< arr.length;i +=2){
        bucketArr.push(parseInt(arr[i]) + parseInt(arr[i + 1]));
    }
    return parseInt(bucketArr.join(""));
};

function palindromeDescendant(num){
    let result = false;
    resultingNumber = descendentOfNumber(num);
    // console.log(resultingNumber);
    // console.log(checkPalidrone(resultingNumber));
    while(resultingNumber.toString().split("").length > 1){
        // console.log("Length: " + resultingNumber.toString().split("").length);
        resultingNumber = descendentOfNumber(resultingNumber);
        if(resultingNumber.toString().split("").length> 1){
            // console.log(checkPalidrone(resultingNumber));
            result = checkPalidrone(resultingNumber);
        }
    }
    return result;
}

function checkPalidrone(str){
    return str.toString() === str.toString().split('').reverse().join('');
}

console.log(palindromeDescendant(numExample));
console.log(palindromeDescendant(numExample2));
console.log(palindromeDescendant(numExample3));
console.log(palindromeDescendant(1122));



