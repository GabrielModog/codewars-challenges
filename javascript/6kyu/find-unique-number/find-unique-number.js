export function findUniq(arr) {
  if(arr.length <= 1) 
    return -1
  aLoop: 
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++)
      if(i !== j && arr[i] === arr[j])
        continue aLoop
    return arr[i]
  }
  
  return -1
}