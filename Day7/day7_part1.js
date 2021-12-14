const unformattedData = require('./input');

//Input represents a list of the horizontal positions of each crab sub

//Each change of 1 step in horizontal position of a single crab costs 1 fuel

//Convert data into an array
function convertToNumArray(input) {
    const arr = input.match(/\d+/g)
    var jsonObj = [];
  
    for(var i = 0; i < arr.length; i++) {
        jsonObj.push(parseInt(arr[i]));
    }
    return jsonObj;
}

const startPositionList = convertToNumArray(unformattedData);

//console.log(startPositionList);


function calculateFuelCost(input, newPosition) {
    let arr = [];
    // For every current position in the list, figure out the fuel cost to move to the new position
    for (var i = 0; i < input.length; i++) {
        let fuelCost;

        if (input[i] < newPosition) {
            fuelCost = newPosition - input[i];
        } else {
            fuelCost = input[i] - newPosition;
        }
        arr.push(fuelCost);
    }
    return arr.reduce((a, b) => a + b, 0);
}

function calculateMinFuelCost(input) {

    let movesArr = [];
    let headers = ['moveFrom', 'moveTo', 'fuelCost'];

    //Get max horiz position
    const maxHoriz = Math.max.apply(null, input);

    //console.log(maxHoriz);

    //For every possible position alignment, create an array of objects with 
    for (i=0; i <= maxHoriz; i++) {
        movesArr.push(calculateFuelCost(input, i));
    }
    return Math.min.apply(null, movesArr);
}

console.log(calculateMinFuelCost(startPositionList));