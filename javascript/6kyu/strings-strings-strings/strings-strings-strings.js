Array.prototype.toString = function(){
  if (this.length === 0) {
    return "[]";
  }
  
  const loopIn = (arr) => {
    let result = ""
    
    for(let i = 0; i < arr.length; i++) {
      const el = arr[i]
      
      switch(typeof el){
        case "string":
          result += `'${el}'`
          break
        case "object":
          if(Array.isArray(el)) result += loopIn(el)
          break;
        default:
          result += el
      }
      
      if( i < arr.length - 1) {
        result += ","
      }
    }
    
    return `[${result}]`
  }

  str = loopIn(this)
  
 return str
}