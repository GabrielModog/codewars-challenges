function getCount(str) {
  const base = "aeiou";
  const transpose = str.toLowerCase();

  return transpose.split("").reduce((a, c, i) => {
    if (base.includes(c)) {
      a++;
    }

    return a;
  }, 0);
}

module.exports = getCount;
