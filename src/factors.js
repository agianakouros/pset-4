const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;

let number = 1;
let string = "";
let divisor = 1;
let leftover;

console.log();

while (number <= 0 || number > MAX ||!Number.isInteger(number)); {
  number = Number(readlineSync.question("Positive integer: "));
}


for (var i = 1; i <= number; i++) {
  if (number % i === 0) {
    string = string + i + ", "
    leftover = number / i
      if (string.includes(", " + leftover + ", ") == false) {
        string = string + leftover + ", "
}     else if (string.includes(", " + leftover + ", ") == true) {
         string = string.substring(0, string.length - 2);
         string = string + "."
       break;
}
}
}


console.log(string);
