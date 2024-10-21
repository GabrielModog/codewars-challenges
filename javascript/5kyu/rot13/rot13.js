export function rot13(str) {
  const compare = char => (char <= 'Z' ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26
  const solver = char => String.fromCharCode(compare(char))
  return str.replace(/[A-Za-z]/g, solver)
}