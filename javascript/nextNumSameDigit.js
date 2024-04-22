// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function overlay(a, b, p) {
  for (let [i, n] of a.entries()) {
    b[p + i] = n;
  }
  return b;
}

// in an array, swap items at indexes i1 and i2
function swap(arr, i1, i2) {
  const [a, b] = [arr[i1], arr[i2]];
  arr[i1] = b;
  arr[i2] = a;
}

/**
 * Algorithm:
 *
 *  - move from right to left, one digit (d) at a time
 *  - for each digit (d), compare it to the digits that follow it (again moving from right to left)
 *  - if any following digit (f) is found that is greater than (d), swap their positions and break out of all loops
 *  - sort all the digits that come after (f) (which is now in (d)'s original position)
 *  - done!
 */

function nextBigger(n) {
  let digits = n.toString().split("");

  for_each_digit: for (let i = digits.length - 1; i >= 0; --i) {
    let d = digits[i];
    let lower;

    for_each_trailing_digit: for (let j = digits.length - 1; j > i; --j) {
      if (d < digits[j]) {
        swap(digits, i, j);
        let trailing = digits.slice(i + 1, digits.length);
        trailing.sort();
        overlay(trailing, digits, i + 1);
        break for_each_digit;
      }
    }
  }

  let answer = +digits.join("");

  return n == answer ? -1 : answer;
}

console.log(nextBigger(513));

// console.log(Math.random() * 20)
