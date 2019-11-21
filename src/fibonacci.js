const readlineSync = require("readline-sync");

let integer = 0;

while (integer > 78 || integer <= 0 || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Non-negative integer: "));
}



for (let x = 0, x <= integer, x++){
  a = 0;
  b = 1;
}
