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
    name: "Mickey",
    surname: "Mouse",
    gender: 'M',
    dob: "16/1/1928"
};

console.log(fiscalCode(person));
