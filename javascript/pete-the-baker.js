// Pete likes to bake some cakes. He has some recipes and ingredients.
// Unfortunately he is not good in math. Can you help him to find out,
// how many cakes he could bake considering his recipes?

// Write a function cakes(),
// which takes the recipe (object) and the available ingredients (also an object)
// and returns the maximum number of cakes Pete can bake (integer).
// For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {
  if (Object.keys(recipe).length === 0 || Object.keys(available).length === 0)
    return 0;
  let result = [];
  for (let prop in recipe) {
    for (let item in available) {
      if (!available[prop]) return 0;
      else if (prop === item) {
        result.push(Math.floor(available[item] / recipe[prop]));
      }
    }
  }
  return result.reduce((a, b) => (a < b ? a : b));
}

console.log(
  cakes(
    { chocolate: 32, eggs: 26, flour: 37 },
    {
      chocolate: 1700,
      sugar: 7800,
      apples: 8000,
      milk: 3200,
      eggs: 1200,
      nuts: 4700,
      flour: 7800,
      butter: 1900,
      oil: 2000,
      pears: 9500,
      cream: 6400,
      crumbles: 4400,
      cocoa: 4100,
    }
  )
);

// function cakes(recipe, available) {
//   return Object.keys(recipe).reduce(function (val, ingredient) {
//     return Math.min(
//       Math.floor(available[ingredient] / recipe[ingredient] || 0),
//       val
//     );
//   }, Infinity);
// }