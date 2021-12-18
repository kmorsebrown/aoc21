
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

module.exports = {
    createCalledNumArr,
    createBoardsArr
}