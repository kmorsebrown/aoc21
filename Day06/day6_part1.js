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

//Start on Part 1
console.log('Num fish after 80 days')
console.log('Test Data',incrementDays(testFishArr,80).length);
console.log('Puzzle Data',incrementDays(puzzleFishArr,80).length);