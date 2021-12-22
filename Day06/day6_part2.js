//Import functions
const {
    getFileContents,
    convertToNumArray,
    countOccurances,
    getNumFishAtAge,
    getNumFishAfterGivenDay
} = require('./functions');

//Get data and convert it
const testInput = getFileContents("/testInput.txt");
const puzzleInput = getFileContents("/puzzleInput.txt");

const testFishArr = convertToNumArray(testInput);
const puzzleFishArr = convertToNumArray(puzzleInput)

//Part 2
const d = 256;
function getNumFishAtGivenDay(fishArr,numDays) {
    const startingFishAgeArr = getNumFishAtAge(fishArr);
    const endFishAgeArr = getNumFishAfterGivenDay(startingFishAgeArr,numDays);
    return endFishAgeArr.reduce((a, b) => a + b, 0);
}

console.log('Testing Num Fish After',d,'days:',getNumFishAtGivenDay(testFishArr,d));
console.log('Puzzle Num Fish After',d,'days:',getNumFishAtGivenDay(puzzleFishArr,d));