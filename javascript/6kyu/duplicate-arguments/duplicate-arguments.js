export function solution(...args){
  const result = args.reduce((a, c) => {
   if(a.tokenize[c]){
     a.tokenize[c].push(c)

     a.booleans =  a.tokenize[c].every(i => i == c)
     
     return a
   }
   
   a.tokenize[c] = [c]
   
   return a
 }, {tokenize: {}, booleans: false})
  
 return result.booleans
}