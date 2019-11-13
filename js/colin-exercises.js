// Exercise #1

function doubleLetters(word) {
    let arr = word.split("");
    let result = false;
    for(let i = 0; i<arr.length;i++)
        if(arr[i] === arr[i+1]){
            result = true;
        }
    return result;
}

console.log(doubleLetters("maam"));


//Exercise #2

function hackerSpeak(str) {
    let brokenArr = str.split('');
    let bucketArr = [];
    brokenArr.forEach(function(element){
        if(element === 'a' || element === 'A'){
            bucketArr.push('4');
        }else if(element === 'e' || element === 'E'){
            bucketArr.push('3');
        }else if(element === 'i' || element === 'I'){
            bucketArr.push('1');
        }else if(element === 's' || element === 'S'){
            bucketArr.push('5');
        }else if(element === 'o' || element === 'O'){
            bucketArr.push('0');
        }else{
            bucketArr.push(element);
        }
    });
    return bucketArr.join('');
}

console.log(hackerSpeak("javascript is cool"));