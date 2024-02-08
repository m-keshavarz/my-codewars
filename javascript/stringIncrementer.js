// DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.




const incrementString = (str) => {
  let wholeNumber = "";
  let counter = 0;
  let temp = [];
  let reversed = str.split("").reverse();
  while (counter < str.length) {
    if (Number.isInteger(+reversed[counter])) {
      temp.push(reversed[counter]);
      counter++;
    } else {
      counter = str.length;
    }
  }
  wholeNumber = temp.reverse().join("");

  let leadingZeros = [];
  let secondCounter = 0;
  while (secondCounter < wholeNumber.length) {
    if (+wholeNumber[secondCounter] > 0) {
      secondCounter = wholeNumber.length;
    } else {
      leadingZeros.push(+wholeNumber[secondCounter]);
      secondCounter++;
    }
  }
  leadingZeros = leadingZeros.join("");

  const incrementedValue = +wholeNumber + 1

  const incrementedValueStr = wholeNumber.length - (leadingZeros.length || -1);

  const letters = str.slice(0, str.length - wholeNumber.length);

  const sliced = (leadingZeros + incrementedValue).slice(
    -1 * (leadingZeros.length + incrementedValueStr)
  );


  return letters + sliced;
};

console.log(incrementString("foo99bar999"));
