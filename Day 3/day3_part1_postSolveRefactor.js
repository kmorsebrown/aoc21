//Post-solve refactor with help from Kevin Talley :)

// Test Data
const data = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`

// Format data into array with strings
const formattedData = data.split(/\r?\n/);

console.log('String length: ' + formattedData[0].length);

// Part One
let binaryGammaRate = '';
let binaryEpsilonRate = '';

for (var d = 1; d <= formattedData[0].length; d++) {
    let start = d-1;
    let stop = d;
    let numOnes = 0;
    let numZeroes = 0; 
    for(var i = 0; i < formattedData.length; i++) {
        if (formattedData[i].slice(start,stop) === '0') {
            numZeroes += 1;
        } else if (formattedData[i].slice(start,stop) === '1') {
            numOnes += 1;
        }
    }
    console.log('Ones: ' + numOnes + ', Zeroes: ' + numZeroes);
    if (numOnes > numZeroes) {
        binaryGammaRate += '1';
        binaryEpsilonRate += '0';
    } else {
        binaryGammaRate += '0';
        binaryEpsilonRate += '1';
    }
    console.log('Binary Gamma Rate: ' + binaryGammaRate + ', Binary Epsilon Rate: ' + binaryEpsilonRate)
}


decimalGammaRate = (parseInt(binaryGammaRate,2));
decimalEpsilonRate = (parseInt(binaryEpsilonRate,2));

console.log('Decimal Gamma Rate: ' + decimalGammaRate + ', Decimal Epsilon Rate: ' + decimalEpsilonRate)

console.log(decimalGammaRate * decimalEpsilonRate);