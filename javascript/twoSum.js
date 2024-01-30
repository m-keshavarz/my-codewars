const twoSum = (arr, target) => {
  let result = [];
  arr.map((item, index) => {
    if (arr.filter((value) => value === target - item).length) {
      if (index !== arr.indexOf(target - item))
        if (!result.length) result.push(index, arr.indexOf(target - item));
    }
  });
  return result;
};

console.log(twoSum([2, 3, 1], 3));
