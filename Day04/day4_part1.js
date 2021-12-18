const {testNumInput, puzzleNumInput} = require('./inputNum');
const {testBoardsInput, puzzleBoardsInput} = require('./inputBoards');
const {createCalledNumArr, createBoardsArr} = require('./functions');

// Format Drawn Numbers
const drawnNumbers = createCalledNumArr(puzzleNumInput);

// Format boards
const boards = createBoardsArr(puzzleBoardsInput);

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
    //console.log('Currnet Drawn Num ', currentDrawnNumber);

    //Check each board
    for (boardIndex = 0; boardIndex < boards.length; boardIndex++) {
        //console.log('Checking board ' + boardIndex);

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

            //Create a temporary array for the current column
            for (rowIndex = 0; rowIndex < 5; rowIndex++) {
                tempColArray.push(boards[boardIndex][rowIndex][colIndex]);
            }
            //console.log(tempColArray, colIndex);

            //check each number in the column array
            for (numIndex = 0; numIndex < tempColArray.length; numIndex++) {

                //if the value of the number index is the same as the current drawn column, iterate the column match
                if (tempColArray[numIndex] === currentDrawnNumber) {
                    tempWinLossBoards[boardIndex].columnMatches[colIndex] += 1;
                }
            }

            //check if the current colIndex wins
            if (tempWinLossBoards[boardIndex].columnMatches[colIndex] === tempColArray.length) {
                winningColumn = colIndex;
            }
        }

        //console.log('tempWinLossBoards after check cols ', tempWinLossBoards);
        //console.log('winningColumn: ', winningColumn);
        //console.log('currentBoard ', boards[boardIndex]);

        //check each if there's a winner
        if (typeof winningRow === "number" || typeof winningColumn === "number") {
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
    //console.log('Checking row ', rowIndex);
    
    //check each number in the row array
    for (numIndex = 0; numIndex < winningBoardArr[rowIndex].length; numIndex++) {
        //console.log('    Checking numIndex ', numIndex);
        //console.log('    Checking number ', winningBoardArr[rowIndex][numIndex]);
        if (!checkedNumbers.includes(winningBoardArr[rowIndex][numIndex])) {
            sumOfUnmarked += winningBoardArr[rowIndex][numIndex]
        }
        //console.log (sumOfUnmarked);
        
    }
};

const partOneAnswer = sumOfUnmarked * lastDrawnNumber;

console.log('Answer: ', partOneAnswer);