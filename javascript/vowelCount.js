// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const getCount = (str) => {
  const ln = str.length;
  let sub = str.replace(/[aeuio]/g, "").length;
  return ln - sub;
};

console.log(getCount("abracadabra"));
