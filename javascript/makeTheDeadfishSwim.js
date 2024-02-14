// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Return the output array, and ignore all non-op characters
const parse = (data) => {
  let result = [];
  let temp = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") temp++;
    if (data[i] === "d") temp--;
    if (data[i] === "s") temp = Math.pow(temp, 2);
    if (data[i] === "o") result.push(temp);
  }

  return result;
}

console.log(parse("iiisxxxdoso"));
