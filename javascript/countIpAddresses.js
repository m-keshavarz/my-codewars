// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

const ipsBetween = (start, end) => {
  const firstSplit = start.split(".");
  const secondSplit = end.split(".");

  const firstAmout =
    +firstSplit[0] * 256 ** 3 +
    +firstSplit[1] * 256 ** 2 +
    +firstSplit[2] * 256 ** 1 +
    +firstSplit[3] * 256 ** 0;

  const secondAmout =
    +secondSplit[0] * 256 ** 3 +
    +secondSplit[1] * 256 ** 2 +
    +secondSplit[2] * 256 ** 1 +
    +secondSplit[3] * 256 ** 0;

  console.log(firstAmout, secondAmout);

  return secondAmout - firstAmout;
};

console.log(ipsBetween("50.0.0.0", "50.1.1.1"));
