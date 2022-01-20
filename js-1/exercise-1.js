/*
Basic Javascript exercises

These are from the following youtube video:
https://www.youtube.com/watch?v=N65RvNkZFGE&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB
*/


/* ================= */
/* 1. Number 100 sum */
/* ================= */

const num100 = (numA, numB) => {
    if (numA === 100 || numB === 100 || (numA + numB === 100)) {
        return true;
    } else {
        return false;
    }
}


/* ============================ */
/* 2. Filename extension getter */
/* ============================ */

const getExtension = (filename) => {
    const nameOfFile = filename.split('.');
    const fileExtension = nameOfFile[1];
    return fileExtension;
}

console.log(getExtension('file.jpeg'));


/* ================ */
/* 3. Caesar Cipher */
/* ================ */

/*
Not working yet - need to figure out how to return the 
value pair from the cipher and use .map() maybe?
*/

const cipher = {
    'a': 'b',
    'b': 'c',
    'c': 'd',
    'd': 'e',
    'e': 'f',
    'f': 'g',
    'g': 'h',
    'h': 'i',
    'i': 'j',
    'j': 'k',
    'k': 'l',
    'l': 'm',
    'm': 'n',
    'n': 'o',
    'o': 'p',
    'p': 'q',
    'q': 'r',
    'r': 's',
    's': 't',
    't': 'u',
    'u': 'v',
    'v': 'w',
    'w': 'x',
    'x': 'y',
    'y': 'z',
    'z': 'a',
    ' ': '+'
};

const encoder = (string) => {
    const originalString = string.slice('');
    const newString = [];
    for (let value in originalString) {
        newString.push(originalString[value]);
    }
    return newString.join('');
}

console.log(encoder('hello'));


/* ======================= */
/* 4. Get the current date */
/* ======================= */

const date = () => {
    const todayDate = new Date();
    const day = todayDate.getDate();
    const month = (todayDate.getMonth() + 1); // We have to add 1 because getMonth is zero-indexed (0-11)
    const year = todayDate.getFullYear();

    console.log(`The date is ${day}/${month}/${year}.`);
}

date();


/* ============== */
/* 5. New! String */
/* ============== */

const newString = (string) => console.log(`New! ${string}`);

const newChecker = (sentence) => {
    if (sentence.includes('New!')) {
        console.log(sentence);
    } else {
        newString(sentence);
    }
}

newChecker('Hello World!');
newChecker('New! Hello Planet!');

/*
Here is a much cleaner piece of code that does the same thing, using the ternary operator:

    condition ? true : false;

const newChecker = (sentence) => {
    sentence.includes('New!') ? console.log(sentence) : newString(sentence);
}
*/
