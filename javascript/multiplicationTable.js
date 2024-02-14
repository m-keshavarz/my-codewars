// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

const multiplicationTable = (size) => {
  let result = [];
  let temp = [];
  for (let i = 1; i <= size; i++) {
    for(let j = 1; j <= size; j++) {
        temp.push(i * j)
    }
    result.push(temp)
    temp = []
  }

  return result;
};

console.log(multiplicationTable(2)); // --> [[1,2,3],[2,4,6],[3,6,9]]
