const {testNumInput, puzzleNumInput} = require('./inputNum');
const {testBoardsInput, puzzleBoardsInput} = require('./inputBoards');
const {
    createCalledNumArr, 
    createBoardsArr, 
    getSumOfUnmarked
} = require('./functions');

// Format Called Numbers
const calledNumArr = createCalledNumArr(puzzleNumInput);

// Format boards
const boardsArr = createBoardsArr(puzzleBoardsInput);

//Part 2
function getDataAtBoardWin(boards,boardIndex,calledNumbers) {
    let boardData = {
        boardNum: boardIndex,
        boardArr: boards[boardIndex],
        calledNumbersUntilWin: [],
        rowMatches: [0,0,0,0,0],
        columnMatches: [0,0,0,0,0]
    };

    let currentCalledNumIndex = 0;

    //Loop until there's a winner
    labelCancelLoops: while (true) {
        let currentCalledNum = calledNumbers[currentCalledNumIndex];

        boardData.calledNumbersUntilWin.push(currentCalledNum);

        //check each row and column in the board array
        for (i = 0; i < 5; i++) {

            //check each number in the row array, if it's the same as the current called number, iterate the match
            if (boards[boardIndex][i].includes(currentCalledNum)) {
                boardData.rowMatches[i] += 1;
            }

            //Create a temporary array for the current column
            let tempColArray = []
            for (rowIndex = 0; rowIndex < 5; rowIndex++) {
                tempColArray.push(boards[boardIndex][rowIndex][i]);
            }

            //check each number in the column array
            if (tempColArray.includes(currentCalledNum)) {
                boardData.columnMatches[i] += 1;
            }
        }

        //check if the board has won yet
        if (boardData.rowMatches.includes(5) || boardData.columnMatches.includes(5)) {
            boardData.calledNumIndexAtWin = currentCalledNumIndex;
            boardData.calledNumAtWin = calledNumbers[currentCalledNumIndex];
            break labelCancelLoops;
        } else {
            //If not, draw a new number
            currentCalledNumIndex++;
        }
    }

    //Get sum of uncalled numbers and total score
    boardData.sumOfUnmarked = getSumOfUnmarked(boards[boardIndex], boardData.calledNumbersUntilWin);
    boardData.totalScore = boardData.sumOfUnmarked * boardData.calledNumAtWin;

    return boardData;
}

let winningBoardsArr = [];


for (index = 0; index < boardsArr.length; index++) {
    let tempBoardData = getDataAtBoardWin(boardsArr,index,calledNumArr);
    //console.log(tempBoardData);
    winningBoardsArr.push(tempBoardData);
}

//console.log(winningBoardsArr);

function boardWinOrder(boards) {
    let calledNumbersUntilWinLengths = [];

    for (i = 0; i < boards.length; i++) {
        calledNumbersUntilWinLengths.push(boards[i].calledNumbersUntilWin.length)
    }

    const fewestNumsCalled = Math.min(...calledNumbersUntilWinLengths);
    const mostNumsCalled = Math.max(...calledNumbersUntilWinLengths);

    let winOrderData = {
        firstBoardToWin: calledNumbersUntilWinLengths.indexOf(fewestNumsCalled),
        lastBoardToWin: calledNumbersUntilWinLengths.indexOf(mostNumsCalled)
    }

    return winOrderData;
}

const firstWinningBoard = winningBoardsArr[boardWinOrder(winningBoardsArr).firstBoardToWin];

const lastWinningBoard = winningBoardsArr[boardWinOrder(winningBoardsArr).lastBoardToWin];

console.log('First Winning Board Score: ',firstWinningBoard.totalScore);
console.log('Last Winning Board Score: ',lastWinningBoard.totalScore);