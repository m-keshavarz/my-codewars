// With your birthday coming up soon, your eccentric friend sent you a message to say "happy birthday":

// hhhappyyyy biirrrrrthddaaaayyyyyyy to youuuu
// hhapppyyyy biirtttthdaaay too youuu
// happy birrrthdayy to youuu
// happpyyyy birrtthdaaay tooooo youu
// At first it looks like a song, but upon closer investigation, you realize that your friend hid the phrase "happy birthday" thousands of times inside his message. In fact, it contains it more than 2 million times! To thank him, you'd like to reply with exactly how many times it occurs.

// To count all the occurences, the procedure is as follows: look through the paragraph and find a 'h'; then find an 'a' later in the paragraph; then find an 'p' after that, and so on. Now count the number of ways in which you can choose letters in this way to make the full phrase.

// More precisely, given a text string, you are to determine how many times the search string appears as a sub-sequence of that string.

// Write a function called countSubsequences that takes two arguments: needle, the string to be search for and haystack, the string to search in. In our example, "happy birthday" is the needle and the birthday message is the haystack. The function should return the number of times needle occurs as a sub-sequence of haystack. Spaces are also considered part of the needle.

// Since the answers can be very large, return only the last 8 digits of the answer in case it exceeds 8 digits. The answers to the test cases will all be shorter than 8 digits.

function countSubsequences(needle, haystack) {
  const n = needle.length;
  const m = haystack.length;

  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let j = 0; j <= m; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (needle[i - 1] === haystack[j - 1]) {
        dp[i][j] = (dp[i][j - 1] + dp[i - 1][j - 1]) % 100000000;
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[n][m];
}
