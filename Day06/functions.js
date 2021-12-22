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

function incrementDays(arr, numDays) {
    let workingArr = [...arr];

    for (day = 1; day <= numDays; day++) {
        let tempArr = [...workingArr];

        for (i = 0; i < workingArr.length; i++) {

            if (tempArr[i] > 0) {
                tempArr[i] -= 1
            } else {
                tempArr.push(8);
                tempArr[i] = 6;
            }
        }
      workingArr = tempArr;
      //console.log('After',day,'days:',workingArr);
    }

    return workingArr;
}

module.exports = {
    getFileContents,
    convertToNumArray,
    incrementDays
}