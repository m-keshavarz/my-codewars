const wave = (str) => {
  let result = [];
  [...Array(str.length)].map((_item, index) => {
    if (str.charAt(index) !== " ") {
      result.push(
        `${str.slice(0, index)}${str.charAt(index).toUpperCase()}${str.slice(
          index + 1
        )}`
      );
    }
  });

  return result;
};

console.log(wave("two words"));
