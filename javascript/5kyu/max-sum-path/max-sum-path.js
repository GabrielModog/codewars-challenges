export function maxSumPath(list1, list2) {
  let result = 0
  let i = 0
  let j = 0
  let sum1 = 0
  let sum2 = 0
  while(i < list1.length && j < list2.length) {
    if(list1[i] < list2[j]) {
      sum1 += list1[i++]
    } else if (list1[i] > list2[j]) {
       sum2 += list2[j++]
    } else {
      result += Math.max(sum1, sum2) + list1[i]
      sum1 = 0
      sum2 = 0
      i++
      j++
    }
  }
  while(i < list1.length) sum1 += list1[i++]
  while(j < list2.length) sum2 += list2[j++]
  result += Math.max(sum1, sum2)
  return result
}