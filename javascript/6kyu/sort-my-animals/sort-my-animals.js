export function sortAnimal(animals) {
  if(animals.length === 0) return []
  const newAnimals = Array.from(animals)
  return newAnimals
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => a.numberOfLegs - b.numberOfLegs)
}

/**
 // Alternative
 function sortAnimal(animals) {
    if(animals.length === 0) return []
    return Array.from(animals)
      .sort((a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name))
}
 */