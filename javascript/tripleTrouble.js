// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {
  let str1 = String(num1);
  let str2 = String(num2);
  let search1 = str1.match(/(.)\1{2,}/g);
  if (search1) {
    for (let i = 0; i < search1.length; i++) {
      //iterate through results
      var replace = "(" + search1[i].slice(0, 1) + ")\\1{1,}";
      var re = new RegExp(replace); // this adds the wrapping "/" chars
      let search2 = str2.match(re);
      if (search2) return 1;
    }
  }
  return 0;
}

console.log(tripledouble(10560002, 100));
