// get filesystem module
const fs = require("fs");

function getFileContents(filename) {
    // using the readFileSync() function
    const buffer = fs.readFileSync(__dirname + filename);
    // and passing the path to the file 
    return buffer.toString();
}

testInput = getFileContents("/testInput.txt");
puzzleInput = getFileContents("/puzzleInput.txt");

module.exports = {
    testInput,
    puzzleInput
};