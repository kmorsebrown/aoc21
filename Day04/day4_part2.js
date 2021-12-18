const {testNumInput, puzzleNumInput} = require('./inputNum');
const {testBoardsInput, puzzleBoardsInput} = require('./inputBoards');
const {createCalledNumArr, createBoardsArr} = require('./functions');

// Format Called Numbers
const calledNumArr = createCalledNumArr(puzzleNumInput);
console.log (calledNumArr);

// Format boards
const boardsArr = createBoardsArr(puzzleBoardsInput);
console.log('Boards: ',boardsArr);

// Part 1

function getWinningBoard(boards,drawnNumbers) {
    let winningData = {};
    let drawnNumIndex = 0;
    let tempWinLossBoards = [];
    let checkedNumbers = [];

    //Loop until there's a winner
    labelCancelLoops: while (true) {
    let currentDrawnNumber = drawnNumbers[drawnNumIndex];
        let winningRow;
        let winningColumn;

        checkedNumbers.push(currentDrawnNumber);

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

            //check each if there's a winner
            if (typeof winningRow === "number" || typeof winningColumn === "number") {
                winningData.winningBoardArr = boards[boardIndex];
                winningData.lastNumIndex = drawnNumIndex;
                winningData.lastDrawnNum = drawnNumbers[drawnNumIndex];
                break labelCancelLoops;
            }
            
        }
        
        if (!winningData.winningBoardArr) {
            //If no winning board yet, draw a new number
            drawnNumIndex++;
        }
    }
    return winningData;
}

const winBoardObj = getWinningBoard(boardsArr,calledNumArr);
console.log(winBoardObj);

function getNumbersCalledBeforeWin(drawnNumbers,winNumIndex) {
    let checkedNumbers = [];

    for (i = 0; i <= winNumIndex; i++) {
        checkedNumbers.push(drawnNumbers[i]);
    }
    return checkedNumbers;
}

const numCalledBeforeWin = getNumbersCalledBeforeWin (calledNumArr,winBoardObj.lastNumIndex)

//let lastDrawnNumber = drawnNumbers[drawnNumIndex]

console.log('Numbers drawn until win ', numCalledBeforeWin);
console.log('Last Drawn Number ', winBoardObj.lastDrawnNum);

function getSumOfUnmarked(board,checkedNumbers) {
    // Get sum of unmarked numbers on winning board
    let sumOfUnmarked = 0;
    for (rowIndex = 0; rowIndex < board.length; rowIndex++) {
        //console.log('Checking row ', rowIndex);
            
        //check each number in the row array
        for (numIndex = 0; numIndex < board[rowIndex].length; numIndex++) {
            //console.log('    Checking numIndex ', numIndex);
            //console.log('    Checking number ', board[rowIndex][numIndex]);
            if (!checkedNumbers.includes(board[rowIndex][numIndex])) {
                sumOfUnmarked += board[rowIndex][numIndex]
            }
        }
    }
    return sumOfUnmarked;
};

console.log('Sum of unmarked: ',getSumOfUnmarked(winBoardObj.winningBoardArr, numCalledBeforeWin));
    
console.log('Answer: ', getSumOfUnmarked(winBoardObj.winningBoardArr, numCalledBeforeWin) * winBoardObj.lastDrawnNum);