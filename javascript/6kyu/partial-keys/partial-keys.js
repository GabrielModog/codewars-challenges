export function partialKeys(obj){
  return new Proxy(obj, {
    get(target, prop) {
       const result = Object
          .keys(target)
          .sort()
          .find(key => key.indexOf(prop) === 0)
       return result ? target[result] : undefined;
    }
  })
}