export function mazeRunner(maze, directions) {
  let location = []
  
  maze.forEach(function(curr, index) {
    if (curr.indexOf(2) !== -1) location.push(index, curr.indexOf(2))
  })
  
  for (let step in directions) {
    if (directions[step] === 'E')
      location[1] += 1
    else if (directions[step] === 'W')
      location[1] -= 1
    else if (directions[step] === 'N')
      location[0] -= 1
    else if (directions[step] === 'S')
      location[0] += 1
    
    if ((location[0] === maze.length || location[0] < 0) 
        || (maze[location[0]][location[1]] === undefined))
      return 'Dead'

    if (maze[location[0]][location[1]] === 1) 
      return 'Dead'
    else if (maze[location[0]][location[1]] === 3)
      return 'Finish'
  }
  
  return 'Lost'
}