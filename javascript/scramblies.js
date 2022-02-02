const countStr = (str) => {
  const obj = {};
  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
};
const scramble = (str1, str2) => {
  const [obj1, obj2] = [str1, str2].map(countStr);
  return Object.entries(obj2).every(([key, val]) => obj1[key] >= val);
};

// function scramble(str1, str2) {
//   let occurences = str1.split("").reduce((arr, cur) => {
//     arr[cur] ? arr[cur]++ : (arr[cur] = 1);
//     return arr;
//   }, {});
//   return str2.split("").every((character) => --occurences[character] >= 0);
// }

console.log(scramble("commas", "commas"));
