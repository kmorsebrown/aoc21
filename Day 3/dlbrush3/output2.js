//Shamelessly copy/pasting dlbrush's day 3 solve for learning

const input = require('./input');

const binaries = input.split('\n');

function mapFrequencies(strings) {
  const frequencies = {};

  // Loop within the length of characters first - this allows us to create objects for each first
  for (let i = 0; i < strings[0].length; i++) {
    // initialize counter for this index of the binaries
    frequencies[i] = {0: 0, 1: 0};

    // Loop over each binary and add to count based on which character is present
    for (let x = 0; x < strings.length; x++) {
      const char = strings[x].charAt(i);
      frequencies[i][char]++;
    }
  }

  return frequencies
}

let filteredOxygenBinaries = binaries;
let oxygenIndex = 0;

while (filteredOxygenBinaries.length > 1) {
  const frequencies = mapFrequencies(filteredOxygenBinaries);
  const commonChar = frequencies[oxygenIndex]['1'] >= frequencies[oxygenIndex]['0'] ? '1' : '0';
  filteredOxygenBinaries = filteredOxygenBinaries.filter(binary => binary.charAt(oxygenIndex) === commonChar);
  oxygenIndex++;
}

const oxygenRatingBinary = filteredOxygenBinaries[0];
const oxygenRatingDecimal = parseInt(oxygenRatingBinary, 2);

let filteredCO2Binaries = binaries;
let CO2Index = 0;

while (filteredCO2Binaries.length > 1) {
  const frequencies = mapFrequencies(filteredCO2Binaries);
  const commonChar = frequencies[CO2Index]['1'] >= frequencies[CO2Index]['0'] ? '0' : '1';
  filteredCO2Binaries = filteredCO2Binaries.filter(binary => binary.charAt(CO2Index) === commonChar);
  CO2Index++;
}

const CO2RatingBinary = filteredCO2Binaries[0];
const CO2RatingDecimal = parseInt(CO2RatingBinary, 2);

console.log('oxygen binary:', oxygenRatingBinary);
console.log('CO2 binary:', CO2RatingBinary);
console.log('oxygen:', oxygenRatingDecimal);
console.log('CO2:', CO2RatingDecimal);
console.log('solution:', oxygenRatingDecimal * CO2RatingDecimal);