// An isogram is a word that has no repeating letters,
// consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  let splitted = str.toLowerCase().split("");

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < splitted.length; j++) {
      if (str.charAt(i) === splitted[j] && i !== j) return false;
    }
  }

  return true;
}

console.log(isIsogram("isIsogram"));
