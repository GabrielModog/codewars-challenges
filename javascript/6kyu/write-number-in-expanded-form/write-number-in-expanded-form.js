export function expandedForm(number){
  const splittedNumbers = number.toString().split("").map(i => Number(i))
  const numbers = []
  
  for(let i = 0; i < splittedNumbers.length; i++){
   if(splittedNumbers[i] === 0) continue
    numbers.push(splittedNumbers[i] + "0".repeat(splittedNumbers.length - i - 1))
  }
  
  return numbers.join(" + ")
}