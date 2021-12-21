const {testInput, puzzleInput} = require('./input');

const {
    convertCSVtoJsObj,
    createDiagram
} = require('./functions');
const { reduceRight } = require('underscore');

//Format Data

coordinates = convertCSVtoJsObj(puzzleInput);

//console.log('Coordinates: ',coordinates);

// Part 1

//Create diagram array of horizontal and vertical lines
let gridArr = createDiagram(coordinates);

//console.log(gridArr);

//Find the number of points where at least two lines overlap

let numOverlaps = gridArr.reduce((previous, current) => previous.concat(current), []).reduce((a, v) => (v > 1 ? a + 1 : a), 0)

console.log(numOverlaps);