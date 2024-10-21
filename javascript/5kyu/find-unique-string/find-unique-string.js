export function findUniq(arr) {
  const normalize = (str) =>
    [...new Set(str.toLowerCase().replace("/s+/g", ""))].sort().join();

  const map = arr.map(normalize).reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});

  const uniqueChar = Object.keys(map).find((k) => map[k] === 1);
  
  const uniqueWord = arr.find((word) => normalize(word) === uniqueChar);

  return uniqueWord;
}