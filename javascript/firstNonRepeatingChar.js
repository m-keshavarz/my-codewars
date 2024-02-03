const firstNonRepeatingLetter = (str) => {
  const splitted = str.toLowerCase().split("");
  const result = splitted.filter(
    (letter) => splitted.indexOf(letter) === splitted.lastIndexOf(letter)
  )[0] || ''
  return str.includes(result.toUpperCase()) ? result.toUpperCase() : result
};


console.log(firstNonRepeatingLetter("STRESS"));
