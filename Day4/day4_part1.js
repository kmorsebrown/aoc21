// Format Drawn Numbers
const inputNum = require('./inputNum');
const drawnNumbers = inputNum.split(',');

for (i = 0; i < drawnNumbers.length; i++){
    drawnNumbers[i] = parseInt(drawnNumbers[i])
}

console.log(drawnNumbers);

// Format boards
const inputBoards = require('./inputBoards');

const tempBoards = inputBoards.split('\n').filter(String)

function createBoards( array ) {
    let tempArray = [];
    while (array.length > 0) {
        let arrayElement = array.splice(0,5);
        tempArray.push(arrayElement);
    }
    return tempArray;
}

const boards = createBoards(tempBoards);

console.log('Initial Board: ', boards);

for (var i = 0; i < boards.length; i++) {
    for (x = 0; x < boards[i].length; x++) {
        const regex = /\d+/g;
        const arrayElement = boards[i][0].match(regex);
        for (y = 0; y < arrayElement.length; y++){
            arrayElement[y] = parseInt(arrayElement[y])
        }
        const newBoard = boards[i].slice(1);
        newBoard.push(arrayElement);
        boards[i] = newBoard;
    }
}

console.log('After reformatting: ',boards);
