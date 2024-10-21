function isFreeSpace(maze, x, y) {
  return (
    y >= 0 &&
    y < maze.length &&
    x >= 0 &&
    x < maze[0].length &&
    maze[y][x] === 0
  )
}

function findStartAndEndPoint(maze) {
  const rows = maze.length
  const cols = maze[0].length
  let start = null
  let end = null
  for (let i = 0; i < rows; i++) {
    if (maze[i][0] === 0) start = [0, i]
    if (maze[i][cols - 1] === 0) end = [cols - 1, i]
  }
  for (let j = 0; j < cols; j++) {
    if (maze[0][j] === 0) start = [j, 0]
    if (maze[rows - 1][j] === 0) end = [j, rows - 1]
  }
  return { start, end }
}

function searchPath(maze, startX, startY, endX, endY, solution) {
  if (startX === endX && startY === endY) {
    solution[startY][startX] = 2
    return true
  }
  if (isFreeSpace(maze, startX, startY)) {
    solution[startY][startX] = 2
    maze[startY][startX] = -1
    if (searchPath(maze, startX + 1, startY, endX, endY, solution)) return true
    if (searchPath(maze, startX, startY + 1, endX, endY, solution)) return true
    if (searchPath(maze, startX - 1, startY, endX, endY, solution)) return true
    if (searchPath(maze, startX, startY - 1, endX, endY, solution)) return true
    solution[startY][startX] = 0
  }
  return false
}

export function solveMaze(maze) {
  const { start, end } = findStartAndEndPoint(maze)
  if (!start || !end) return maze
  const [startX, startY] = start
  const [endX, endY] = end
  let solution = maze.map((i) => i.slice())
  if (!searchPath(maze, startX, startY, endX, endY, solution))
    return maze
  return solution
}