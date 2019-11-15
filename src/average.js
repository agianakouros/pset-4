const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let integer = 0;
let print = 0;
let sum = 0;

console.log();

while (integer > MAX || !Number.isInteger(integer) || integer !== -1) {
  integer = Number(readlineSync.question("Non-negative integer: "));

  if (integer !== -1) {
      sum = sum + integer;
  }

}

sum = sum.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nSum: " + sum / 4);
