const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let integer = 0;

console.log();

while (integer < 0) {
  integer = Number(readlineSync.question("Positive integer: "));
  if (upperBound > MAX) {
    console.log("Invalid.\n")
} else if (integer % 1 ==! 0) {
  console.log("Invalid.\n")
}
}
