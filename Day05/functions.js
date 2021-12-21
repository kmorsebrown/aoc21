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

//Create diagram empty diagram
function createDiagram(input) {
    //Get number of rows (add the 1 to account for the 0th index)
    const y1max = Math.max.apply(Math, input.map(function(o) { return o.y1; }));
    const y2max = Math.max.apply(Math, input.map(function(o) { return o.y2; }));
    const numRows = Math.max(y1max, y2max) + 1;

    //Get number of columns (add the 1 to account for the 0th index)
    const x1max = Math.max.apply(Math, input.map(function(o) { return o.x1; }));
    const x2max = Math.max.apply(Math, input.map(function(o) { return o.x2; }));
    const numCols = Math.max(x1max, x2max) + 1;
    
    //Create grid array of 0s
    let arr = new Array(numRows);
    
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(numCols);
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

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

function markHorizLines(diagram,lines) {
    let workingArray = diagram;
    for (i = 0; i < lines.length; i++) {
        const xStart = Math.min(lines[i].x1, lines[i].x2);
        const xEnd = Math.max(lines[i].x1, lines[i].x2);
    
        if (lines[i].y1 === lines[i].y2) {
            for (xIndex = xStart; xIndex <= xEnd; xIndex++) {
                workingArray[lines[i].y1][xIndex] += 1;
            }
        }
    }

    return workingArray;
}

function markVertLines(diagram,lines) {
    let workingArray = diagram;

    for (i = 0; i < lines.length; i++) {
        const yStart = Math.min(lines[i].y1,lines[i].y2);
        const yEnd = Math.max(lines[i].y1,lines[i].y2);
        
        //Only consider vertical and horizontal lines
        if (lines[i].x1 === lines[i].x2) {
            //Go through row on the vertical column
            for (yIndex = yStart; yIndex <= yEnd; yIndex++) {
                workingArray[yIndex][lines[i].x1] += 1;
            }
        }
    }
    return workingArray;
}

module.exports = {
    convertCSVtoJsObj,
    createDiagram,
    createGridStr,
    markHorizLines,
    markVertLines
}