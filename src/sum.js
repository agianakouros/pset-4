const readlineSync = require("readline-sync");

let lowerBound = 1
let upperBound = 0
let sum = 0;

while (lowerBound > upperBound) {
    lowerBound = readlineSync.question("\nLower bound: ");
    upperBound = readlineSync.question("Upper bound: \n");

    if (lowerBound < upperBound && sum !== lowerBound) {
      sum = upperBound - 1 + sum
    }
  }
