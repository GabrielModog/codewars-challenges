export function scramble(str1, str2) {
  const charCount = str1
    .split("")
    .reduce((a, c) => {
      a[c] = (a[c] || 0) + 1
      return a
    }, {})
  for(let char of str2) {
    if(!charCount[char])
      return false
    charCount[char]--
  }
  return true
}