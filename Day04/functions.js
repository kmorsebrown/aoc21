
function createCalledNumArr (input) {
    const tempArray = input.split(',');
    for (i = 0; i < tempArray.length; i++){
        tempArray[i] = parseInt(tempArray[i])
    }
    return tempArray;
};

function createBoardsArr( input ) {
    const arrayOfStrings = input.split('\n').filter(String);
  
    let tempArray = [];
  
    while (arrayOfStrings.length > 0) {
        let arrayElement = arrayOfStrings.splice(0,5);
        tempArray.push(arrayElement);
    }
    
    for (var i = 0; i < tempArray.length; i++) {
        for (x = 0; x < tempArray[i].length; x++) {
            const regex = /\d+/g;
            const arrayElement = tempArray[i][0].match(regex);
            for (y = 0; y < arrayElement.length; y++){
                arrayElement[y] = parseInt(arrayElement[y])
            }
            const newBoard = tempArray[i].slice(1);
            newBoard.push(arrayElement);
            tempArray[i] = newBoard;
        }
    }

    return tempArray;
};

function checkEachNumInArrayAgainstValue (array, value) {
    for (numIndex = 0; numIndex < array.length; numIndex++) {
        //if the value of the number index is the same as the current array, iterate the match
        if (array[numIndex] ===  value) {
            return true;
        }
    }
};

function getNumbersCalledBeforeWin(arrayOfNumbers,index) {
    let checkedNumbers = [];

    for (i = 0; i <= index; i++) {
        checkedNumbers.push(arrayOfNumbers[i]);
    }
    return checkedNumbers;
};

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

module.exports = {
    createCalledNumArr,
    createBoardsArr,
    checkEachNumInArrayAgainstValue,
    getNumbersCalledBeforeWin,
    getSumOfUnmarked
}