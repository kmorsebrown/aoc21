const unformattedData = require('./input');

//Input represents a list of the horizontal positions of each crab sub

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

//Each change of 1 step in horizontal position of a single crab costs 1 more fuel than the last: the first step costs 1, the second step costs 2, the third step costs 3, and so on.

function calculateFuelCost(input, newPosition) {
    let arr = [];
    // For every current position in the list
    for (var i = 0; i < input.length; i++) {
        let fuelCost = 0;
        let numSteps;
        //console.log('Crab index',i,'Start position',input[i],'end position',newPosition);
        
        //Calculate the number of steps between positions
        if (input[i] < newPosition) {
            numSteps = newPosition - input[i];
        } else {
            numSteps = input[i] - newPosition;
        }
        //console.log(numSteps);
        
        //For each step between positions, calculate the fuel cost
        for (var j = 1; j <= numSteps; j++) {
            fuelCost += j;
            //console.log('step',j,'fuel cost',fuelCost);
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