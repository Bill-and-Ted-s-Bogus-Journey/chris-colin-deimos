# POD#2 WEEK 1

## GROUP NAME: Bill and Teds Bogus Adventure

Below is a designated list separated by each individual. Below each numbered exercise is the name of the individual who completed the exercise.

## Chris' Exercises

### 1. Create a function that takes three integer arguments (a, b, c) and returns the number of equal values.

## Examples
   equal(3, 4, 3) ➞ 2
   
   equal(1, 1, 1) ➞ 3
   
   equal(3, 4, 1) ➞ 0

----
Exercise done by: Chris
----


### 2. Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
       
       Return a boolean value (true or false).
       The string can contain any character.
       When no x and no o are in the string, return true.
       Examples
       XO("ooxx") ➞ true
       
       XO("xooxx") ➞ false
       
       XO("ooxXm") ➞ true
       // Case insensitive.
       
       XO("zpzpzpp") ➞ true
       // Returns true if no x and o.
       
       XO("zzoo") ➞ false



----
Exercise done by: Chris
Source: https://edabit.com/challenge/RG5NJWDa7pZGFkhTA
----


### 3. Palindrome Descendant
       
       Create a function that returns true if the number itself is a palindrome or any of its descendants down to 2 digits (a 1-digit number is trivially a palindrome).
       
       Examples
       palindromedescendant(11211230) ➞ true
       // 11211230 ➞ 2333 ➞ 56 ➞ 11
       
       palindromeDescendant(13001120) ➞ true
       // 13001120 ➞ 4022 ➞ 44
       
       palindromeDescendant(23336014) ➞ true
       // 23336014 ➞ 5665
       
       palindromeDescendant(11) ➞ true
       Number itself is a palindrome.



----
Exercise done by: Chris and Colin
https://edabit.com/challenge/HXRsxLL6vBqJtKeQu
----


## Colin's Exercises

### 1. Create a function that takes a word and returns true if the word has two consecutive identical letters.
     
##     Examples
       doubleLetters("loop") ➞ true
       doubleLetters("yummy") ➞ true
       doubleLetters("orange") ➞ false
       doubleLetters("munchkin") ➞ false

----
Exercise done by: Colin
Source: https://edabit.com/challenge/
----

### 2. Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
       Examples
       hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
       hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
       hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
       Notes
       In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.



----
Exercise done by: Colin
Source: https://edabit.com/challenge/
----



### 3. Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object with the following shape...
       
       {
           name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
           age: THE_TOTAL_OF_ALL_PET_AGES,
           breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
       }

----
Exercise done by: Chris and Colin
Bonus Exercises for map filter and reduce
----

## Pod#2 Week#2

### Chris' Week 2 Exercises

### Function Factory
Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

const plusFive = makePlusFunction(5)

plusFive(2) ➞ 7

plusFive(-8) ➞ -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

const plusTen = makePlusFunction(10)

plusTen(0) ➞ 10

plusTen(188) ➞ 198

plusFive(plusTen(0)) ➞ 15

### Morse Code Decoded

Create a function that takes a string (morse code) as an argument and return an unencrypted string.

--Examples--

decodeMorse(".... . .-.. .--.   -- .   -.-.--") ➞ "HELP ME !"

decodeMorse("-.-. .... .- .-.. .-.. . -. --. .") ➞ "CHALLENGE"

decodeMorse(". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. .") ➞ "EDABBIT CHALLENGE"


## Paired Exercises Week 2

### The Fiscal Code --Located in the paired exercises

Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

Generate 3 capital letters from the surname, if it has:

At least 3 consonants then the first three consonants are used. (Newman -> NWM).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
Generate 3 capital letters from the name, if it has:

Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

Take the last two digits of the year of birth (1985 -> 85).
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).

--Examples--

fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
}) ➞ "DBTMTT00A01"

fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
}) ➞ "YUXHLN50T41"

fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
}) ➞ "MSOMKY28A16"