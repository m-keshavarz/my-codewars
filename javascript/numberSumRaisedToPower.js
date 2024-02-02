function sumDigPow(a, b) {
  const result = [];
  for (let i = a; i <= b; i++) {
    let temp = 0;
    String(i)
      .split("")
      .map((digit, index) => {
        temp += Number(digit) ** (index + 1);
      });
    if (temp === i) result.push(i);
  }

  return result;
}

console.log(sumDigPow(1, 100)); // ---> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
