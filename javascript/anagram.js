function anagram(word, words) {
  let result = [];

  let wordSplitted = word.split("");

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < wordSplitted.length; j++) {
      if (
        words[i].includes(wordSplitted[j]) &&
        words[i].length === wordSplitted.length
      )
        result.push(words[i]);
    }
  }

  return result.filter((item, index) => result.indexOf(item) === index);
}

console.log(anagram("abba", ["aabb", "abcd", "bbaa", "dada"]));
