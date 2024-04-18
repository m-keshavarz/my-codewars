// Task
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// S
// e
// r
// i
// e
// s
// :
// 1
// +
// 1
// 4
// +
// 1
// 7
// +
// 1
// 10
// +
// 1
// 13
// +
// 1
// 16
// +
// …
// Series:1+
// 4
// 1
// ​
//  +
// 7
// 1
// ​
//  +
// 10
// 1
// ​
//  +
// 13
// 1
// ​
//  +
// 16
// 1
// ​
//  +…
// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  if (!n.length) return "0.00";
  const result = [1];
  for (let i = 1; i < n; i++) {
    result.push(1 / (i * 3 + 1));
  }
  return result.reduce((a, b) => a + b, 0).toFixed(2);
}

console.log(SeriesSum(5));

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.splice(numbers.indexOf(Math.min(...numbers)), 1)
)
console.log(Math.min(...numbers))
