//Post-solve refactor with help from Kevin Talley :)
// Work-in-progress

/*
another thing i noticed was how you accessed each character/digit. you can access them more easily by using an index vs. slice
co2ScrubArray[i].slice(start,stop) === co2ScrubArray[i][d-1]
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

// Part Two
let oxGenArray = [];
let co2ScrubArray = [];

for (var d = 1; d <= formattedData[0].length; d++) {
    let start = d-1;
    let stop = d;
    let oxTempArray = [];
    let co2TempArray = [];

    if (d === 1) {
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

        for(var i = 0; i < formattedData.length; i++) {
            if (numOnes >= numZeroes) {
                if (formattedData[i].slice(start,stop) === '1') {
                    oxTempArray.push(formattedData[i]);
                } else {
                    co2TempArray.push(formattedData[i]);
                }
            } else {
                if (formattedData[i].slice(start,stop) === '0') {
                    oxTempArray.push(formattedData[i]);
                } else {
                    co2TempArray.push(formattedData[i]);
                }
            }
        }
        oxGenArray = oxTempArray;
        co2ScrubArray = co2TempArray;

    } else {
        let oxNumOnes = 0;
        let oxNumZeroes = 0;
        let co2NumOnes = 0;
        let co2NumZeroes = 0;

        if (oxGenArray.length > 1) {
            for(var i = 0; i < oxGenArray.length; i++) {
                if (oxGenArray[i].slice(start,stop) === '0') {
                    oxNumZeroes += 1;
                } else if (oxGenArray[i].slice(start,stop) === '1') {
                    oxNumOnes += 1;
                }
            }

            console.log('Ox Ones: ' + oxNumOnes + ', Ox Zeroes: ' + oxNumZeroes);

            for(var i = 0; i < oxGenArray.length; i++) {
                if (oxNumOnes >= oxNumZeroes) {
                    if (oxGenArray[i].slice(start,stop) === '1') {
                        oxTempArray.push(oxGenArray[i]);
                    }
                } else {
                    if (oxGenArray[i].slice(start,stop) === '0') {
                        oxTempArray.push(oxGenArray[i]);
                    }
                }
            }

            oxGenArray = oxTempArray;
        }
        
        if (co2ScrubArray.length > 1 ) {
            for(var i = 0; i < co2ScrubArray.length; i++) {
                if (co2ScrubArray[i].slice(start,stop) === '0') {
                    co2NumZeroes += 1;
                } else if (co2ScrubArray[i].slice(start,stop) === '1') {
                    co2NumOnes += 1;
                }
            }
            console.log('CO2 Ones: ' + co2NumOnes + ', CO2 Zeroes: ' + co2NumZeroes);
    
            for(var i = 0; i < co2ScrubArray.length; i++) {
                if (co2NumOnes >= co2NumZeroes) {
                    if (co2ScrubArray[i].slice(start,stop) === '0') {
                        co2TempArray.push(co2ScrubArray[i]);
                    }
                } else {
                    if (co2ScrubArray[i].slice(start,stop) === '1') {
                        co2TempArray.push(co2ScrubArray[i]);
                    }
                }
            }
            co2ScrubArray = co2TempArray;
        }
        
    }
    console.log('Ox Gen Array: ' + oxGenArray + ', CO2 Scrub Array: ' + co2ScrubArray)
}

const oxGenRating = (parseInt(oxGenArray[0],2));
const co2ScrubRating = (parseInt(co2ScrubArray[0],2));

console.log('Oxygen Generator Rating: ' + oxGenRating + ', CO2 scrubber rating: ' + co2ScrubRating)

console.log(oxGenRating * co2ScrubRating);