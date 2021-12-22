//Import functions
const {
    getFileContents,
    convertToNumArray
} = require('./functions');

//Get data and convert it
const testInput = getFileContents("/testInput.txt");
const puzzleInput = getFileContents("/puzzleInput.txt");

const listOfLanternfish = convertToNumArray(testInput);

//console.log(listOfLanternfish);

//Start on Part 1