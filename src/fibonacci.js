const readlineSync = require("readline-sync");

let integer = 0;

let a = 0;
let b = 1;
let c = 1;

console.log();

while (integer > 78 || integer <= 0 || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Non-negative integer: "));
}


for (var i = 2; i <= integer; i++){
  c = a + b;
       a = b;
       b = c;
}


c = (c).toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 0});

console.log("\n" + c + ".")
