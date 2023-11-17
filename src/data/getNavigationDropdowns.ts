import smirnaNavData from '../data/smirnaNavigationLink.json'

export default (urlFilter:string)=>{
  return smirnaNavData.filter(value=>value.url === urlFilter)[0].dropdowns
}