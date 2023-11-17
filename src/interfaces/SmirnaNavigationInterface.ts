export default interface SmirnaNavigationInterface{
  page:string
  url:string | null
  dropdowns:SmirnaNavigationDropdownsInterface | null
  dropdownsRight:boolean
}

export interface SmirnaNavigationDropdownsInterface{
  page:string
  url:string
}[]