// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

String.prototype.camelCase = function () {
  return this.split(" ")
    .map((item) => item.charAt(0).toUpperCase().concat(item.slice(1)))
    .join("");
};

console.log("hello world".camelCase());
