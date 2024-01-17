import PaginationModel from "./PaginationModel"

export default interface SmirnaApiResponseModel{
  code:number
  message:string
  error?:any
  page?:PaginationModel
  // data:
}