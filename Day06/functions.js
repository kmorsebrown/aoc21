// get filesystem module
const fs = require("fs");

//read text files
function getFileContents(filename) {
    // using the readFileSync() function
    const buffer = fs.readFileSync(__dirname + filename);
    // and passing the path to the file 
    return buffer.toString();
}

//convert data to an array of numbers
function convertToNumArray(input) {
    const arr = input.match(/\d+/g)
    var newArr = [];
  
    for(var i = 0; i < arr.length; i++) {
        newArr.push(parseInt(arr[i]));
    }
    return newArr;
}

module.exports = {
    getFileContents,
    convertToNumArray
}