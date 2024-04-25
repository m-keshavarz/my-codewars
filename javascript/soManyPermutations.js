// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

// Good luck!

function permutations(string) {
  var arr = string.split(""),
    tmp = arr.slice(),
    heads = [],
    out = [];
  if (string.length == 1) return [string];
  arr.forEach(function (v, i, arr) {
    if (heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join("")).forEach(function (w) {
        out.push(v + w);
      });
      tmp.push(v);
    }
  });
  return out;
}