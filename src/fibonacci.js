const readlineSync = require("readline-sync");

let integer = 0;

let a = 0;
let b = 1;

while (integer > 78 || integer <= 0 || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Non-negative integer: "));
}



for (let x = 0, x <= integer, x++){
   a = b + c
   c = b

  b = b + a

}

console.log(b)

//   Go there for the formula to the code

//   http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibFormula.html
