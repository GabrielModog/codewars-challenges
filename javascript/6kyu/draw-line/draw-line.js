export function drawLine(start, end) {
  const points = []

  if(start.x === end.x && start.y === end.y) {
    return [start]
  }
 
  const dx = Math.abs(end.x - start.x)
  const dy = Math.abs(end.y - start.y)
  const distance = Math.max(dx, dy)
  
  for(let i = 0; i < distance; i++) {
    const x = Math.floor(start.x + i * (end.x - start.x) / distance)
    const y = Math.floor(start.y + i * (end.y - start.y) / distance)
    points.push({ x, y })
  }
  
  points.push({ x: end.x, y: end.y })
  
  return points
}