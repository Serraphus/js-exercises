/* Basic JavaScript exercises

From the video:
https://www.youtube.com/watch?v=0_sbUwVU32k&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB&index=3
*/


/* ========================================================= */
/* 1. Find the number of even digits in an array of integers */
/* ========================================================= */

const evenDigitCounter = (sampleArray) => sampleArray.filter(digit => digit % 2 === 0).length;

/* Examples to test with:
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 4, 7, 10];
const array3 = [10, 20, 30, 40, 50];
const array4 = [1, 15, 25, 45, 65];

console.log(evenDigitCounter(array1)); // 5
console.log(evenDigitCounter(array2)); // 2 
console.log(evenDigitCounter(array3)); // 5 
console.log(evenDigitCounter(array4)); // 0
*/


/* ====================================================== */
/* 2. Find the number of even values up to a given number */
/* ====================================================== */

const evenNumberCounter = (givenMaxNumber) => {
    const evenNumbers = [];
    for (let i = 1; i <= givenMaxNumber; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers.length;
}

console.log(evenNumberCounter(100));


/* ================================================= */
/* 3. Sort an array of integers into ascending order */
/* ================================================= */

// Note this isn't quite what the exercise asked for, which was to check if an array was already sorted.
// See below for the solution to that. This is my solution for just sorting a given array:

const ascendingSort = (array) => array.sort((a, b) => a - b);

const exampleArray = [4, 3, 5, 1, 2];
console.log(ascendingSort(exampleArray));

/*
For the actual solution: 
This loops through the array and returns false if any element is greater than the following element.

const isArrayAscending = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}
*/


/* ========================================================= */
/* 4. Find the largest even number from an array of integers */
/* ========================================================= */

// Step 1 - extract only the even numbers from an array
const evenNumFromArray = (array) => {
    emptyArray = array.filter(i => i % 2 === 0);
    return emptyArray;
}

// Step 2 - sort the array in descending order, and then return the first (largest) item
const ascendingArraySorter = (array) => array.sort((a, b) => b - a)[0];

const array1 = [2, 5, 3, 6, 7, 10, 4, 8, 1, 9];
console.log(ascendingArraySorter(evenNumFromArray(array1)));


/* ======================================================================== */
/* 5. Replace only the first digit found in an alphanumeric string with '$' */
/* ======================================================================== */

// This will use string.prototype.replace() and the regex (/[...]/)

const replaceFirstDigit = (string) => {
    return string.replace(/[0-9]/, '$'); // without the /g flag, it will only replace the first instance
}

console.log(replaceFirstDigit('Hi 2u guys'));
