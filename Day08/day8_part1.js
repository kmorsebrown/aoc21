//Import functions
const {
    getFileContents,
} = require('./functions');

//Get data and convert it
const testInput = getFileContents("/testInput.txt");
const puzzleInput = getFileContents("/puzzleInput.txt");

const key = {
    'zero': [a,b,c,e,f,g], //6 letters
    'one': [c,f], //2 letters
    'two': [a,c,d,e,g], //5 letters
    'three': [a,c,d,f,g], //5 letters
    'four': [b,c,d,f], //4 letters
    'five': [a,b,d,f,g], //5 letters
    'six': [a,b,d,e,f,g], //6 letters
    'seven': [a,c,f], //3 letters
    'eight': [a,b,c,d,e,f,g], //7 letters
    'nine': [a,b,c,d,f,g] //6 letters
}