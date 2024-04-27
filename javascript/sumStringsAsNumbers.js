// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

const sumStrings = (a, b) => {
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

// The Best solution
function sumStringsBestSolution(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(sumStrings("00103", "08567"));

console.log(
  BigInt("712569312664357328695151392") +
    BigInt("8100824045303269669937").toString()
);
