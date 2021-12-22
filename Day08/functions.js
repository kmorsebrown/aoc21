// get filesystem module
const fs = require("fs");

//read text files
function getFileContents(filename) {
    // using the readFileSync() function
    const buffer = fs.readFileSync(__dirname + filename);
    // and passing the path to the file 
    return buffer.toString();
}

function convertTxtToJsObj(input) {
    const arr = input.split(/\r?\n/);
    var jsonObj = [];
    var headers = ['signal', 'output'];
  
    for(var i = 0; i < arr.length; i++) {
      var data = arr[i].split('|');
      var obj = {};
      for(var j = 0; j < data.length; j++) {
         obj[headers[j].trim()] = data[j].trim();
      }
      jsonObj.push(obj);
    }
    
    for (var i = 0; i < jsonObj.length; i++) {
      jsonObj[i].signal = jsonObj[i].signal.split(' ');
      jsonObj[i].output = jsonObj[i].output.split(' ');
    }
    return jsonObj;
}

function countInstacesOfOuputLength (arrOfObj,num) {
    let numInstances = {
        'two': 0,
        'three': 0,
        'four': 0,
        'five': 0,
        'six': 0,
        'seven': 0
      };
  
      for (i = 0; i < arrOfObj.length; i++) {
          for (j = 0; j < arrOfObj[i].output.length; j++) {
            switch (arrOfObj[i].output[j].length) {
              case 2:
                numInstances.two += 1
                break;
              case 3:
                numInstances.three += 1
                break;
              case 4:
                numInstances.four += 1
                break;
              case 5:
                numInstances.five += 1
                break;
              case 6:
                numInstances.six += 1
                break;
              case 7:
                numInstances.seven += 1
                break;
            }
          }
      }
    return numInstances;
}

module.exports = {
    getFileContents,
    convertTxtToJsObj,
    countInstacesOfOuputLength
};