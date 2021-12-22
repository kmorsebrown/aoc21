// get filesystem module
const fs = require("fs");

//read text files
function getFileContents(filename) {
    // using the readFileSync() function
    const buffer = fs.readFileSync(__dirname + filename);
    // and passing the path to the file 
    return buffer.toString();
}

module.exports = {
    getFileContents
};