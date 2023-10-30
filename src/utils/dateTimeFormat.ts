export const shortMonth = (monthIndex:number):string=>{
  return ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][monthIndex]
}

export const zeroPad = (date:number):string=>{
  return date.toString().padStart(2,'0')
}