function flyBy(lamps, drone) {
  let lampsArr = lamps.split("")
  const steps = Math.min(lamps.length, drone.length)
  for (let i = 0; i < steps; i++) {
    lampsArr[i] = "o"
  }
  return lampsArr.join("")
}

module.exports = flyBy