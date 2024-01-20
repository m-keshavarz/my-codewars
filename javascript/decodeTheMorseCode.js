const decodeMorse = (morseCode) => {
  return morseCode
    .split("   ")
    .map((item) =>
      item
        .split(" ")
        .map((word) => MORSE_CODE[word])
        .join("")
    )
    .join(" ")
    .trim();
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
