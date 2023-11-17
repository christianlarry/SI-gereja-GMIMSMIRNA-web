export const capitalizeText = (text:string):string=>{
  return text.toLowerCase().split(' ').map(value=>value[0].toUpperCase()+value.substring(1)).join(' ')
}