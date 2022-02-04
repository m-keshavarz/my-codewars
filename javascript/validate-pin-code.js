// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits
// or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validate(str) {
  switch (str.length) {
    case 4:
    case 6:
      return /^\d+$/.test(str);
    default:
      return false;
  }
}

console.log(validate("090909"));

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }