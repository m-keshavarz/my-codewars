// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

const persistent_bugger = num => {
	if (num < 10) return 0;
	let result = 1;
	let newNum = (num + "").split("").reduce((a, b) => +a * +b);
	
	while (newNum > 9) {
		newNum = (newNum + "").split("").reduce((a, b) => +a * +b);
		result++
	}

  return result;
};

console.log(persistent_bugger(4))

//best solution

function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}