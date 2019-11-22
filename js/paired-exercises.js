// Week 2

//Exercise 1 The Fiscal Code

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
    7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

function fiscalCode(person) {
    let returnStr = "";
    returnStr += generateSurname(person.surname);
    returnStr += generateName(person.name);
    returnStr += generateDOBandGender(person.dob,person.gender);
    return returnStr;
}

function generateSurname(str){
    let splitString = str;
    let bucket = "";
    bucket += (getConsonants(splitString));
    if(bucket.length < 3){
        bucket += (getVowels(splitString));
        if(bucket.length < 3){
            bucket += ("X");
            if(bucket.length < 3){
                bucket += ("X");
            }
        }
    }
    let newArray = bucket.split("");
    bucket = (newArray[0]+newArray[1]+newArray[2]);
    return bucket;
}

function generateName(str){
    let splitString = str;
    let numOfConsonants = getConsonants(str).length;
    let consonantsArr = [];
    let bucket = "";
    if(numOfConsonants > 3){
        for(let i =0; i< numOfConsonants; i++){
            consonantsArr.push(getConsonants(str).split("")[i]);
        }
        bucket += (consonantsArr[0]+consonantsArr[2]+consonantsArr[3]);
        return bucket;
    }
    bucket += (getConsonants(splitString));
    if(bucket.length < 3){
        bucket += (getVowels(splitString));
        if(bucket.length < 3){
            bucket += ("X");
            if(bucket.length < 3){
                bucket += ("X");
            }
        }
    }
    let newArray = bucket.split("");
    bucket = (newArray[0]+newArray[1]+newArray[2]);
    return bucket;
}

function getVowels(str){
    let stringSplit = str.split("");
    let bucket = [];
    for(let i = 0; i <= stringSplit.length-1; i++){
        switch(stringSplit[i].toUpperCase()){
            case "A":
                bucket.push("A");
                break;
            case "E":
                bucket.push("E");
                break;
            case "I":
                bucket.push("I");
                break;
            case "O":
                bucket.push("O");
                break;
            case "U":
                bucket.push("U");
                break;
        }
    }
    return bucket.join("");
}

function generateDOBandGender(dob,gender){
    let dobARR = dob.split("/");
    let yearNum = dobARR[2].split("");
    let returnYearNum = `${yearNum[2]}${yearNum[3]}`;
    let monthChar;
    let isFemale = false;
    let returnStr = "";
    if(gender === "F"){
        isFemale = true;
    }
    switch(dobARR[1]){
        case "1": monthChar = "A"; break;
        case "2": monthChar = "B"; break;
        case "3": monthChar = "C"; break;
        case "4": monthChar = "D"; break;
        case "5": monthChar = "E"; break;
        case "6": monthChar = "G"; break;
        case "7": monthChar = "L"; break;
        case "8": monthChar = "M"; break;
        case "9": monthChar = "P"; break;
        case "10": monthChar = "R"; break;
        case "11": monthChar = "S"; break;
        case "12": monthChar = "T"; break;
    }
    let dayNum = dobARR[0];
    if(parseInt(dobARR[0]) < 10){
        dayNum = `0${dobARR[0]}`
    }
    if(isFemale){
        dayNum = parseInt(dayNum) + 40;
    }
    returnStr += returnYearNum;
    returnStr += monthChar;
    returnStr += dayNum;
    return returnStr;
}

function getConsonants(str){
    let stringSplit = str.split("");
    let bucket = [];
    for(let i = 0; i <= stringSplit.length-1; i++){
        switch(stringSplit[i].toUpperCase()){
            case "B":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "C":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "D":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "F" :
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "G":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "H":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "J":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "K":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "L":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "M":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "N":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "P":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "Q":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "R":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "S":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "T":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "V":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "W":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "X":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "Y":
                bucket.push(stringSplit[i].toUpperCase());
                break;
            case "Z":
                bucket.push(stringSplit[i].toUpperCase());
                break;
        }
    }
    return bucket.join("");
}

console.log(generateSurname("Edabit"));
console.log(generateName("Al"));

person= {
    name: "Lexxus",
    surname: "Catena",
    gender: 'F',
    dob: "8/2/1997"
};

console.log(fiscalCode(person));

/*
String Incrementer
Write a function which increments a string to create a new string.

If the string ends with a number, the number should be incremented by 1.
If the string doesn't end with a number, the number 1 should be appended to the new string.
If the number has leading zeros, the amount of digits should be considered.
Examples
incrementString(foo) ➞ foo1

incrementString(foobar0009) ➞ foobar0010

incrementString(foo099) ➞ foo100
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
 */

function incrementString (strng) {
    // return incrementedString
    var string = strng.replace(/[0-9]/g, '');
    var len = strng.length  - string.length;
    var str = strng.slice(string.length) || "0";
    str = (parseInt(str) + 1).toString();
    while (str.length < len) {
        str = "0" + str;
    }
    return string.concat(str);
}

console.log(incrementString("foobar0109"));
