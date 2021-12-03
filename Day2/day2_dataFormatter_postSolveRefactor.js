//I didn't format it this way when I initially did the solve, but based on a tip from EBuckner that hse got from DMock, and then https://stackoverflow.com/questions/28543821/convert-csv-lines-into-javascript-objects/28544299 I came up with this in the refactor.

// Test Data
/*
forward 5
down 5
forward 8
up 3
down 8
forward 2
*/
​
// mannually add "header row"
const dataPlusHeader = `direction unitsMoved
forward 5
down 5
forward 8
up 3
down 8
forward 2`
​
// Convert data
function convertCSVtoJsObj(input) {
    const arr = input.split(/\r?\n/);
​
    var jsonObj = [];
    var headers = arr[0].split(' ');
    for(var i = 1; i < arr.length; i++) {
      var data = arr[i].split(' ');
      var obj = {};
      for(var j = 0; j < data.length; j++) {
         obj[headers[j].trim()] = data[j].trim();
      }
      jsonObj.push(obj);
    }
​
    for (var i = 0; i < jsonObj.length; i++) {
      jsonObj[i].unitsMoved = Number(jsonObj[i].unitsMoved)
    }
​
    return jsonObj;
}
​
diveCommands =  convertCSVtoJsObj(dataPlusHeader);
​
/*
expected output
​
[
  { direction: 'forward', unitsMoved: 5 },
  { direction: 'down', unitsMoved: 5 },
  { direction: 'forward', unitsMoved: 8 },
  { direction: 'up', unitsMoved: 3 },
  { direction: 'down', unitsMoved: 8 },
  { direction: 'forward', unitsMoved: 2 }
]
*/