function findNb(m) {
  m = Math.sqrt(m) * 2;
  if (m != parseInt(m)) {
    return -1;
  }
  const result = parseInt(Math.sqrt(m));
  return result * (result + 1) === m ? result : -1;
}
console.log(findNb(4183059834009));
