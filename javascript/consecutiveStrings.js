function longestConsec(strarr, k) {
  let result = "";

  strarr.map((_item, index) => {
    if (k > 0) {
      let tempArray = strarr.slice(index, index + k);
      let tempStr = tempArray.join("");

      if (result.length < tempStr.length) {
        result = tempStr;
      }
    }
  });

  return result;
}

console.log(
  longestConsec(["apple", "orange", "banana", "cucumber", "kiwi"], -2)
);
