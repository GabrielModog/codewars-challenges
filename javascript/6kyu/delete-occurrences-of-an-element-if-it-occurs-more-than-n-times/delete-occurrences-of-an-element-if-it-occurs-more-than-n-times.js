export function deleteNth(arr,n){
  return arr.reduce((ac, num, i) => {
    ac.counter[num] = ac.counter[num] ? ac.counter[num] + 1 : 1

    if(ac.counter[num] <= n) ac.list.push(num)
    
    return ac
  }, {counter: {}, list: []}).list
}