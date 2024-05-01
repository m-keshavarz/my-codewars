// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

const add = (a, b) => {
  let result = "";
  const splittedA = a.split("").reverse();
  const splittedB = b.split("").reverse();
  let biggestStr =
    splittedA.length >= splittedB.length ? splittedA.length : splittedB.length;
  let extraTen = 0;
  let additionTarget = 0;
  for (let i = 0; i < biggestStr; i++) {
    additionTarget =
      numOrZero(splittedA[i]) + numOrZero(splittedB[i]) + extraTen;
    if (i === biggestStr - 1) {
      if (additionTarget !== 0) {
        result += String(additionTarget).split("").reverse().join("");
      }
    } else {
      extraTen = 0;
      if (additionTarget > 9) {
        extraTen = 1;
        result += String(additionTarget).charAt(1);
      } else {
        result += String(additionTarget);
      }
    }
  }
  return result.split("").reverse().join("");
};

const numOrZero = (str) => {
  return Number.isInteger(+str) ? +str : 0;
};
