function getCommonDirectoryPath(paths) {
  const dirs = paths.map(i => i.split("/"))
  const shortestPathLength = Math.min(...dirs.map(i => i.length))
  
  let commonPath = ""
  
  for(let i = 0; i < shortestPathLength; i++) {
    const file = dirs[0][i]
    if(dirs.every(dir => dir[i] === file)) {
      commonPath += file +  "/"
    } else {
      break
    }
  }
  
  return commonPath
}

module.exports = getCommonDirectoryPath