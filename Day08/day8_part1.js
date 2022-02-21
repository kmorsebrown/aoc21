//Import functions
const {
    getFileContents,
    convertTxtToJsObj,
    countInstacesOfOuputLength
} = require('./functions');

//Get data and convert it
const testInput = convertTxtToJsObj(getFileContents("/testInput.txt"));
const puzzleInput = convertTxtToJsObj(getFileContents("/puzzleInput.txt"))

const key = {
    'zero': ['a','b','c','e','f','g'], //6 letters
    'one': ['c','f'], //2 letters
    'two': ['a','c','d','e','g'], //5 letters
    'three': ['a','c','d','f','g'], //5 letters
    'four': ['b','c','d','f'], //4 letters
    'five': ['a','b','d','f','g'], //5 letters
    'six': ['a','b','d','e','f','g'], //6 letters
    'seven': ['a','c','f'], //3 letters
    'eight': ['a','b','c','d','e','f','g'], //7 letters
    'nine': ['a','b','c','d','f','g'] //6 letters
}

const testOutputLengthCounts = countInstacesOfOuputLength(testInput);
const puzzleOutputLengthCounts = countInstacesOfOuputLength(puzzleInput);


//In the output values, how many times do digits 1, 4, 7, or 8 appear?

function getPartOneSolution (obj) {
    let answer =
        //Digit 1: 2 characters
        obj.two +
        //Digit 4: 4 characters
        obj.four +
        //Digit 7: 3 characters
        obj.three +
        //Digit 8: 7 characters
        obj.seven;
    return answer;
};

console.log ('Testing Answer:',getPartOneSolution(testOutputLengthCounts));
console.log ('Puzzle Answer:',getPartOneSolution(puzzleOutputLengthCounts));

/*
number = {
    't': 'a',
    'tl': 'b',
    'tr': 'c',
    'm': 'd',
    'bl': 'e',
    'br': 'f',
    'b': 'g'
}

if (t)
*/