// Simple Fun #15: Addition without Carrying

function additionWithoutCarrying(a, b) {
  const aSplit = String(a).split("").reverse();
  const bSplit = String(b).split("").reverse();

  let result = 0;

  for (let i = 0; i < aSplit.length; i++) {
    if (+aSplit[i] + +bSplit[i] >= 10) {
      result += 10 ** (i + 1);
    }
  }
  return a + b - result;
}

console.log(additionWithoutCarrying(456, 1734));
