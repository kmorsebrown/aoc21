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

const countOccurances = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

const getNumFishAtAge = (arr) => (v = [
    countOccurances(arr,0),
    countOccurances(arr,1),
    countOccurances(arr,2),
    countOccurances(arr,3),
    countOccurances(arr,4),
    countOccurances(arr,5),
    countOccurances(arr,6),
    countOccurances(arr,7),
    countOccurances(arr,8)
]);


function getNumFishAfterGivenDay (arr,days) {
  let workingArr = [...arr];

  for (i = 1; i <= days; i++) {
    let tempArr = [
      workingArr[1],
      workingArr[2],
      workingArr[3],
      workingArr[4],
      workingArr[5],
      workingArr[6],
      workingArr[7] + workingArr[0],
      workingArr[8],
      workingArr[0]
    ];

    workingArr = tempArr;
  }

  return workingArr;
}

module.exports = {
    getFileContents,
    convertToNumArray,
    incrementDays,
    countOccurances,
    getNumFishAtAge,
    getNumFishAfterGivenDay
}