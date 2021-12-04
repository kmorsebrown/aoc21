//Post-solve refactor with help from Kevin Talley :)

/*
let tempCounts = [
  { zero: 0, one: 0 },
  { zero: 0, one: 0 },
  { zero: 0, one: 0 },
  { zero: 0, one: 0 },
  { zero: 0, one: 0 },
  { zero: 0, one: 0 },
  { zero: 0, one: 0 },
  { zero: 0, one: 0 },
  { zero: 0, one: 0 },
  { zero: 0, one: 0 },
  { zero: 0, one: 0 },
  { zero: 0, one: 0 },
];

// loop over each number in the array with .forEach()
numbers.forEach((n) => {
    // loop over each digit in that number using the for()
    for (let i = 0; i < 12; i++) {
        // compare the digit to one or zero with n[i]
        if (n[i] === '1') {
            tempCounts[i].one++;
        } else {
             tempCounts[i].zero++;
        }
    }
});

When looking at a string. you can get each character via it’s index. so number[5] will tell me the sixth digit in the number (zero-based indexing) JS looks at a string as an array of characters
*/


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