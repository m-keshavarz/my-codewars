// Return the total number of smiling faces in the array

function countSmileys(arr) {
  const collection = [
    ":)",
    ":D",
    ";)",
    ";D",
    ":-)",
    ":-D",
    ";-)",
    ";-D",
    ":~)",
    ":~D",
    ";~)",
    ";~D",
  ];
  if (!arr.length) {
    return 0;
  }
  let result = 0;
  arr.map((face) => {
    if (collection.indexOf(face) !== -1) result++;
  });
  return result;
}

console.log(countSmileys([":)", ";(", ";}", ":-D"]));
