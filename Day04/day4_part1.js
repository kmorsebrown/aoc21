const {testNumInput, puzzleNumInput} = require('./inputNum');
const {testBoardsInput, puzzleBoardsInput} = require('./inputBoards');
const {
    createCalledNumArr, 
    createBoardsArr, 
    getNumbersCalledBeforeWin,
    getSumOfUnmarked
} = require('./functions');

// Format Called Numbers
const calledNumArr = createCalledNumArr(puzzleNumInput);

// Format boards
const boardsArr = createBoardsArr(puzzleBoardsInput);

// Part 1
function getWinningBoard(boards,calledNumbers) {
    let winningData = {};
    let currentCalledNumIndex = 0;
    let tempWinLossBoards = [];
    let checkedNumbers = [];

    //Loop until there's a winner
    labelCancelLoops: while (true) {
    let currentCalledNum = calledNumbers[currentCalledNumIndex];
        let winningRow;
        let winningColumn;

        checkedNumbers.push(currentCalledNum);

        //Check each board
        for (boardIndex = 0; boardIndex < boards.length; boardIndex++) {

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
                if (boards[boardIndex][rowIndex].includes(currentCalledNum)) {
                    tempWinLossBoards[boardIndex].rowMatches[rowIndex] += 1;
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

                //check each number in the column array
                if (tempColArray.includes(currentCalledNum)) {
                    tempWinLossBoards[boardIndex].columnMatches[colIndex] += 1;
                }

                //check if the current colIndex wins
                if (tempWinLossBoards[boardIndex].columnMatches[colIndex] === tempColArray.length) {
                    winningColumn = colIndex;
                }
            }

            //check each if there's a winner
            if (typeof winningRow === "number" || typeof winningColumn === "number") {
                winningData.winningBoardArr = boards[boardIndex];
                winningData.lastNumIndex = currentCalledNumIndex;
                winningData.lastDrawnNum = calledNumbers[currentCalledNumIndex];
                winningData.boardIndex = boardIndex;
                break labelCancelLoops;
            }
            
        }
        
        if (!winningData.winningBoardArr) {
            //If no winning board yet, draw a new number
            currentCalledNumIndex++;
        }
    }
    winningData.numCalledBeforeWin = getNumbersCalledBeforeWin (calledNumbers,winningData.lastNumIndex);
    winningData.sumOfUnmarked = getSumOfUnmarked(winningData.winningBoardArr, winningData.numCalledBeforeWin);
    winningData.totalScore = winningData.sumOfUnmarked * winningData.lastDrawnNum;
    return winningData;
}

const winBoardObj = getWinningBoard(boardsArr,calledNumArr);
console.log(winBoardObj);

console.log('Sum of unmarked: ',winBoardObj.sumOfUnmarked);
console.log('Answer: ', winBoardObj.totalScore);