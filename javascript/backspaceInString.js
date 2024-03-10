// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

const cleanString = (s) => {
  let temp = s;
  while (temp.match(/[^#]#/)) {
    temp = temp.split(/[^#]#/).join("");
  }
  temp = temp.replace(/^#+/, "");
  return temp;
};

console.log(cleanString("abc#d#######c"));
