function fakeBin(x) {
  return x
    .split("")
    .map((item) => (item < 5 ? 0 : 1))
    .join("");
}

module.exports = fakeBin;
