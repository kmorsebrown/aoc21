// Test Data

const sonarReport = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263
]

// Part One
let numIncreases = 0;

for (var index = 0; index < sonarReport.length; index++) {
  let current = index;
  let prev = index - 1

  if (current > 0 && (sonarReport[current] > sonarReport[prev])) {
      numIncreases += 1;
  }
};

console.log(numIncreases);

// Part Two
let numSumIncreases = 0;

for (var index = 0; index < (sonarReport.length - 3); index++) {
    let groupOne = sonarReport[index] + sonarReport[index + 1] + sonarReport[index + 2];
    let groupTwo = sonarReport[index + 1] + sonarReport[index + 2] + sonarReport[index + 3];

    if (groupTwo > groupOne) {
        numSumIncreases +=1;
    }
};

console.log(numSumIncreases);