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
console.log(makeSuperPet(pets));