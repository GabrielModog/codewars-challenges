function solve(arr){
  const set = new Set()
  
  for(let num of arr) {
    if(set.has(-num)) {
      set.delete(-num)
      continue
    }
    set.add(num)
  }
  
  return Array.from(set)[0]
}

module.exports = solve