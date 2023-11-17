export const hashString = (randomString:string)=>{
  let result = ''
  for(let i=0;i<randomString.length;i++){
    result += randomString.charAt(Math.floor(Math.random()*randomString.length))
  }
  return result
}