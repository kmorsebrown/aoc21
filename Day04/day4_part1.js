// Format Drawn Numbers
const inputNum = require('./inputNum');
const drawnNumbers = inputNum.split(',');

for (i = 0; i < drawnNumbers.length; i++){
    drawnNumbers[i] = parseInt(drawnNumbers[i])
}

//console.log(drawnNumbers);

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

//console.log('Boards: ',boards);

// Part 1

let winningBoardArr;
let drawnNumIndex = 0;
let tempWinLossBoards = [];
let checkedNumbers = [];

//Loop until there's a winner
labelCancelLoops: while (true) {
    let currentDrawnNumber = drawnNumbers[drawnNumIndex];
    let winningRow;
    let winningColumn;

    checkedNumbers.push(currentDrawnNumber);
    console.log('Currnet Drawn Num ', currentDrawnNumber);

    //Check each board
    for (boardIndex = 0; boardIndex < boards.length; boardIndex++) {
        console.log('Checking board ' + boardIndex);

        //create a new board object inside the tempWinLossBoards array if there isn't one already at the current index
        if (!tempWinLossBoards[boardIndex]) {
            const boardTemplate = {
                "rowMatches": [0,0,0,0,0],
                "columnMatches": [0,0,0,0,0]
              };
              tempWinLossBoards.push(JSON.parse(JSON.stringify(boardTemplate)));
        };

        //check each row in the board array
        for (rowIndex = 0; rowIndex < boards[boardIndex].length; rowIndex++) {

            //check each number in the row array
            for (numIndex = 0; numIndex < boards[boardIndex][rowIndex].length; numIndex++) {

                //if the value of the number index is the same as the current drawn row, iterate the row match
                if (boards[boardIndex][rowIndex][numIndex] === currentDrawnNumber) {
                    tempWinLossBoards[boardIndex].rowMatches[rowIndex] += 1;
                }
            }

            //check if the current rowIndex wins
            if (tempWinLossBoards[boardIndex].rowMatches[rowIndex] === boards[boardIndex][rowIndex].length) {
                winningRow = rowIndex;
            }
        }
        //console.log('tempWinLossBoards after check rows ', tempWinLossBoards);
        //console.log('winningRow: ', winningRow);
        //console.log('currentBoard ', boards[boardIndex]);

        //check each column in the board array

        for (colIndex = 0; colIndex < 5; colIndex++) {
            let tempColArray = []
            for (rowIndex = 0; rowIndex < 5; rowIndex++) {
                tempColArray.push(boards[boardIndex][rowIndex][colIndex]);
            }
            console.log(tempColArray, colIndex);
        }

        //check each if there's a winner
        if (typeof winningRow === "number" || typeof twinningColumn === "number") {
            winningBoardArr = boards[boardIndex];
            //console.log('winningBoard: ', winningBoardArr);
            break labelCancelLoops;
        }
        
    }
    
    if (!winningBoardArr) {
        //If no winning board yet, draw a new number
        drawnNumIndex++;
    }
}

console.log('winningBoard: ', winningBoardArr);

let lastDrawnNumber = drawnNumbers[drawnNumIndex]
let sumOfUnmarked = 0;

// Get sum of unmarked numbers on winning board

console.log('Numbers drawn until win ', checkedNumbers);
console.log('Last Drawn Number ', lastDrawnNumber);

for (rowIndex = 0; rowIndex < winningBoardArr.length; rowIndex++) {
    console.log('Checking row ', rowIndex);
    
    //check each number in the row array
    for (numIndex = 0; numIndex < winningBoardArr[rowIndex].length; numIndex++) {
        console.log('    Checking numIndex ', numIndex);
        console.log('    Checking number ', winningBoardArr[rowIndex][numIndex]);
        if (!checkedNumbers.includes(winningBoardArr[rowIndex][numIndex])) {
            sumOfUnmarked += winningBoardArr[rowIndex][numIndex]
        }
        console.log (sumOfUnmarked);
        
    }
};

const partOneAnswer = sumOfUnmarked * lastDrawnNumber;

console.log('Answer: ', partOneAnswer);

/* Temp test col code

boards = [
  [ 14, 21, 17, 24, 4 ],
  [ 10, 16, 15, 9, 19 ],
  [ 18, 8, 23, 26, 20 ],
  [ 22, 11, 13, 6, 5 ],
  [ 2, 0, 12, 3, 7 ]
];

for (colIndex = 0; colIndex < 5; colIndex++) {
 let tempColArray = []
 for (rowIndex = 0; rowIndex < 5; rowIndex++) {
  console.log('col ', colIndex, ' row ', rowIndex);
  console.log(boards[rowIndex][colIndex]);
  console.log(tempColArray)
  tempColArray.push(boards[rowIndex][colIndex]);
 }
 console.log('tempColArray ', tempColArray, 'ColIndex', colIndex)
};

*/