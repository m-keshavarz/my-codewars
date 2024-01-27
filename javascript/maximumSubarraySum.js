
const maxSequence = (arr) => {
  let maxNum = Math.pow(2, 53);
  let max = -maxNum - 1;
  let maxIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    maxIndex = maxIndex + arr[i];
    if (max < maxIndex) max = maxIndex;

    if (maxIndex < 0) maxIndex = 0;
  }
  return max <= 0 ? 0 : max
};