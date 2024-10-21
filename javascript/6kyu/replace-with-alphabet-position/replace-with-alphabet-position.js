export function alphabetPosition(text) {
  let result = []
  
  for(let i = 0; i < text.length; i++) {
    let code = text.toLowerCase().charCodeAt(i)
    if(code > 96 && code < 123) result.push(code - 96)
  }
  
  return result.join(" ")
}
/*
// alternative solution
function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return text.toLowerCase().split("").reduce((a, c) => {
    const index = alphabet.indexOf(c) + 1
    
    if(index === 0) return a
    
    a.push(index)
    
    return a
  }, []).join(" ")
}
*/