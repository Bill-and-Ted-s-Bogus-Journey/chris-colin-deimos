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

console.log(`Week 1 Exercise 1: ${doubleLetters("maam")}`);


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

console.log(`Week 1 Exercise 2 ${hackerSpeak(`javascript is cool`)}`);

//Exercise #3

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];
const makeSuperPet = (petArray) => {
    let superPet = {};
    let superName = "";
    let superAge = 0;
    let superBreed = "";
    petArray.forEach(function (pet) {
        superName += pet.name[0];
        superAge += pet.age;
        superBreed += pet.breed[0];
    });
    superPet.name = superName;
    superPet.age = superAge;
    superPet.breed = superBreed;
    return superPet;
};
console.log("Week 1 Exercise 3:");
console.log(makeSuperPet(pets));


// ----------Week 2------------

// Exercise #1

function arrayOfMultiples (num, length) {
    let bucket = [];
    for(let i = 1; i<=length;i++){
        bucket.push(num * i);
    }
    return bucket;
}

console.log(`Week 2 Exercise 1: (3,5) ${arrayOfMultiples(3,5)} and (7,8) ${arrayOfMultiples(7,8)}`);
document.getElementById("w2e1Result").innerText = `Week 2 Exercise 1 Results: (3,5) = ${arrayOfMultiples(3, 5)} and (7,8) = ${arrayOfMultiples(7, 8)}`;

//Week 2 Exercise 2:
function changeEnough(change, amountDue) {
    let changeValueArray = [.25, .10, .05, .01];
    let totalInPocket = 0;
    totalInPocket += changeValueArray[0]*change[0];
    totalInPocket += changeValueArray[1]*change[1];
    totalInPocket += changeValueArray[2]*change[2];
    totalInPocket += changeValueArray[3]*change[3];
    return totalInPocket >= amountDue;
}

console.log("Week 2 Exercise 2 test: changeEnough([1, 0, 5, 219], 19.99) result:" + changeEnough([1, 0, 5, 219], 19.99) +"---> Expected false");
document.getElementById("w2e2Result").innerText = "\nWeek 2 Exercise 2 test: changeEnough([1, 0, 5, 219], 19.99) result:" + changeEnough([1, 0, 5, 219], 19.99) +"---> Expected false";
