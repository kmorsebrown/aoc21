//Import functions
const {
    getFileContents,
    convertToNumArray,
    incrementDays
} = require('./functions');

//Get data and convert it
const testInput = getFileContents("/testInput.txt");
const puzzleInput = getFileContents("/puzzleInput.txt");

const testFishArr = convertToNumArray(testInput);
const puzzleFishArr = convertToNumArray(puzzleInput)

//Part 2