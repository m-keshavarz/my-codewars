function inArray(array1, array2) {
  let result = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) {
        result.push(array1[i]);
      }
    }
  }

  return result.filter((item, index) => result.indexOf(item) === index).sort();
}

console.log(
  inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
