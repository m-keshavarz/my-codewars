function productFib(prod) {
  let first = 0;
  let second = 1;

  while (first * second < prod) {
    let third = first + second;
    first = second;
    second = third;
  }

  return [first, second, first * second === prod];
}

// console.log(productFib(41))

console.log(productFib(41)); // ---> [55, 89, true]
