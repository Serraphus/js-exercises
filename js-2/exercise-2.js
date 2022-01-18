/* Basic Javascript exercises

From the video:
https://www.youtube.com/watch?v=U0Ce27lA7R4&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB&index=2
*/


/* 1. String slicer */

const stringSlicer = (string) => {
    const stringStart = string.slice(0, 3);
    const stringEnd = string.slice(-3);
    return stringStart + stringEnd;
}

const sentence = 'Hello World';  // 'Helrld'
sentence.length < 3 ? console.log(sentence) : console.log(stringSlicer(sentence));


/* 2. Extract the first half of a string */

const stringFirstHalf = (str) => str.slice(0, Math.ceil(str.length / 2));
// Math.ceil rounds up odd numbers (like how Math.floor rounds down)
console.log(stringFirstHalf('Hello!')); // 'Hel'


/* 3. Concatenate two strings, except their first characters */

const strConcat = (strA, strB) => strA.substring(1) + strB.substring(1);
// .substring(indexStart, indexEnd) returns a string starting at the indexStart position
console.log(strConcat('Hello', 'World!')); // 'elloorld!'


/* 4. Find which number is nearest to 100 */
// Essentially check which value, subtracted from 100, is smaller

const numberChecker = (num1, num2) => {
    return 100 - num1 < 100 - num2 ? num1 : num2; 
}
console.log(numberChecker(99, 75));
console.log(numberChecker(49, 75));


/* 5. Check a given string contains 2 to 4 occurrences of a character */
// Will try using a regex (regular expression) and .match()
// Could also use .filter on a string array: string.split('').filter(...);

const regex = /a/g;
const occurrenceCheck = (sampleString) => {
    const occurrences = sampleString.match(regex);
    return occurrences.length;
}

const twoToFour = (str) => occurrenceCheck(str) <= 4 && occurrenceCheck(str) >= 2;

console.log(twoToFour('I am happy'));
console.log(twoToFour('I am hippy'));
