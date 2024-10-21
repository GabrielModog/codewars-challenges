export function isValidWalk(walk) {
  if(walk.length !== 10) return false
  
  let x = 0, y = 0
  
  const coords = {
    'n': () => ++y,
    's': () => --y,
    'w': () => --x,
    'e': () => ++x
  }
    
  walk.forEach((step) => {
    coords[step]()
  })

  return x === 0 && y === 0
}