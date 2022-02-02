function rot13(message) {
  let splitted = message.split("");

  let alphabet = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
  let alphabetSplitted = alphabet.split("");

  let result = [];

  for (let i = 0; i < splitted.length; i++) {
    if (alphabetSplitted.indexOf(splitted[i]) === -1) {
      result.push(splitted[i]);
      continue;
    }
    if (alphabetSplitted.indexOf(splitted[i]) + 26 > 51) {
      result.push(alphabetSplitted[alphabetSplitted.indexOf(splitted[i]) - 26]);
    } else {
      result.push(alphabetSplitted[alphabetSplitted.indexOf(splitted[i]) + 26]);
    }
  }

  return result.join("");
}

console.log(rot13("10+2 is twelve"));
