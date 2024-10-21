function duplicateEncode(word) {
  const characters = word.toLowerCase().split("");

  const lettersCount = characters.reduce((accum, curr, index) => {
    accum[curr] = accum[curr] ? accum[curr] + 1 : 1;
    return accum;
  }, {});

  return characters
    .map((char) => (lettersCount[char] === 1 ? "(" : ")"))
    .join("");
}

module.exports = duplicateEncode;
