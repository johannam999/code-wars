function high(x) {
  let eachWord = x.split(/[^a-z]+/);
  let wordsTotal = eachWord.map(eachWord => [...eachWord].map(a => a.charCodeAt(0) - 96).reduce((a, b) => a + b, 0));
  let maxWord = eachWord[wordsTotal.indexOf(Math.max(...wordsTotal))];
  return maxWord;    
}