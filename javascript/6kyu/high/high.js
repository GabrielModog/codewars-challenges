function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const scores = alphabet.map((_, index) => index + 1);
  const words = x.split(" ");
  const scoresMap = scores.reduce(
    (a, word, index) => (a = Object.assign(a, { [alphabet[index]]: word })),
    {}
  );

  const rankList = words.reduce((accum, curr) => {
    const word = curr.split("").reduce((a, c, i) => a + scoresMap[c], 0);

    return [...accum, word];
  }, []);

  return words[rankList.indexOf(Math.max(...rankList))];
}

module.exports = high;
