// const count = (str) => {
//   const result = {};
//   str.split("").map((item) => {
//     result[item] = str.split("").filter((char) => char === item).length;
//   });
//   return result;
// };

const count = (str) => {
  const result = {};
  str.split("").map((item) => {
    result[item] ? result[item]++ : (result[item] = 1);
  });
  return result;
};

// console.log(count("aba")); // {'a': 2, 'b': 1}

const myObj = { 1: 2, 3: 4 };

console.log(myObj["1"]);
