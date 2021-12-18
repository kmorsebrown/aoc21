const {testInput, puzzleInput} = require('./input');

//Format Data
function convertCSVtoJsObj(input) {
    const arr = input.split(/\r?\n/);

    var jsonObj = [];
    var headers = ['x1', 'y1', 'x2', 'y2'];
  
    for(var i = 0; i < arr.length; i++) {
      var data = arr[i].match(/\d+/g);
      var obj = {};
      for(var j = 0; j < data.length; j++) {
         obj[headers[j].trim()] = parseInt(data[j].trim());
      }
      jsonObj.push(obj);
    }

    return jsonObj;
  
}

coordinates = convertCSVtoJsObj(testInput);
console.log(coordinates);

// Part 1

//Create blank grid of arrays
function createGrid(input) {
    //Get number of rows (add the 1 to account for the 0th index)
    const y1max = Math.max.apply(Math, input.map(function(o) { return o.y1; }));
    const y2max = Math.max.apply(Math, input.map(function(o) { return o.y2; }));
    const numRows = Math.max(y1max, y2max) + 1;

    //Get number of columns (add the 1 to account for the 0th index)
    const x1max = Math.max.apply(Math, input.map(function(o) { return o.x1; }));
    const x2max = Math.max.apply(Math, input.map(function(o) { return o.x2; }));
    const numCols = Math.max(x1max, x2max) + 1;
    
    let arr = new Array(numRows);
    
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(numCols);
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            arr[i][j] = '.';
        }
    }
    return arr;
}

console.log(createGrid(coordinates));

//Create blank grid array of strings
function createGridStr(input) {
    //Get number of rows (add the 1 to account for the 0th index)
    const y1max = Math.max.apply(Math, input.map(function(o) { return o.y1; }));
    const y2max = Math.max.apply(Math, input.map(function(o) { return o.y2; }));
    const numRows = Math.max(y1max, y2max) + 1;
    console.log(numRows);
  
    //Get number of columns (add the 1 to account for the 0th index)
    const x1max = Math.max.apply(Math, input.map(function(o) { return o.x1; }));
    const x2max = Math.max.apply(Math, input.map(function(o) { return o.x2; }));
    const numCols = Math.max(x1max, x2max) + 1;

    console.log(numCols)
  
    let arr = new Array(numRows);
    for (var i = 0; i < arr.length; i++) {
          arr[i] = new Array(numCols + 1).join( '.' );
    }
    return arr;
}

console.log(createGridStr(coordinates));

//For every line of vents
for (i = 0; i < coordinates.length; i++) {
    //Only consider vertical and horizontal lines
    if (coordinates[i].x1 === coordinates[i].x2) {
        console.log(coordinates[i]);
    } else if (coordinates[i].y1 === coordinates[i].y2) {
        console.log(coordinates[i]);
    }
}