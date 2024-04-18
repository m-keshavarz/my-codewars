// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  const winners = {
    paper: "rock",
    scissors: "paper",
    rock: "scissors",
  };

  if (p1 === p2) return "Draw!";

  for (let key in winners) {
    if (p1 === key && p2 === winners[key]) return "Player 1 won!";
    if (p1 === winners[key] && p2 === key) return "Player 2 won!";
  }
};

function sumArray(array) {
  if (!array) return 0;
  console.log(array.sort())
  return array
    .sort()
    .slice(1, array.length - 1)
    .reduce((a, b) => a + b, 0);
}

console.log(sumArray([6, 2, 1, 8, 10]));

// console.log(rps("scissors", "rock"));
