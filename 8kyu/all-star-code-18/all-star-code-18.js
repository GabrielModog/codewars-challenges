function strCount(str, letter) {
  return str.split("").reduce((a, c) => {
    if (c === letter) a++;
    return a;
  }, 0);
}

module.exports = strCount;
