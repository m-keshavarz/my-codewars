// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\
//                     4/            4|          4\
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*

// Fold 2-times:
// [1,2,3,4,5] -> [9,6]
// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.

// The input array should not be modified!

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function foldArray(array, runs) {
  const mid = Math.floor(array.length / 2);
  let folded = [];
  // Walk through half of the array to calculate the fold
  let currentIndex = 0;
  for (currentIndex = 0; currentIndex < mid; currentIndex++) {
    folded.push(array[currentIndex] + array[array.length - (currentIndex + 1)]);
  }
  // Append middle if odd
  if (array.length % 2 === 1) {
    folded.push(array[mid]);
  }
  // Recurse if more runs needed (and possible)
  if (runs > 1 && array.length > 1) {
    folded = foldArray(folded, runs - 1);
  }
  return folded;
}

console.log(foldArray([1, 2, 3, 4, 5], 2));