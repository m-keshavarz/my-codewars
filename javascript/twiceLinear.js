// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

// Example:
// dbl_linear(10) should return 22

// Note:
// Focus attention on efficiency

const dblLinear = (n) => {
  let first = 1;
  let result = [];
  for (let i = 0; i <= n; i++) {
    let second = first * 2 + 1;
    let third = first * 3 + 1;
    if (!result.includes(first)) result.push(first);
    if (!result.includes(second)) result.push(second);
    if (!result.includes(third)) result.push(third);
    first = result[i + 1];
  }
  return result
    .sort((a, b) => a - b)
    .filter((num, index) => result.indexOf(num) === index)[n];
};

console.log(dblLinear(10));
