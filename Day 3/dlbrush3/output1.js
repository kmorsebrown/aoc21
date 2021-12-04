//Shamelessly copy/pasting dlbrush's day 3 solve for learning

const input = require('./input');

const binaries = input.split('\n');

const frequencies = {};

// Loop within the length of characters first - this allows us to create objects for each first
for (let i = 0; i < binaries[0].length; i++) {
  // initialize counter for this index of the binaries
  frequencies[i] = {0: 0, 1: 0};

  // Loop over each binary and add to count based on which character is present
  for (let x = 0; x < binaries.length; x++) {
    const char = binaries[x].charAt(i);
    frequencies[i][char]++;
  }
}

console.log(frequencies);

// Construct binaries
let gamma = '';
let epsilon = '';

for (let position in frequencies) {
  gamma += frequencies[position]['1'] > frequencies[position]['0'] ? '1' : '0';
  epsilon += frequencies[position]['1'] > frequencies[position]['0'] ? '0' : '1';
}

const finalGamma = parseInt(gamma, 2);
const finalEpsilon = parseInt(epsilon, 2);

console.log('gamma binary:', gamma);
console.log('epsilon binary:', epsilon);
console.log('gamma:', finalGamma);
console.log('epsilon:', finalEpsilon);
console.log('solution:', finalEpsilon * finalGamma);