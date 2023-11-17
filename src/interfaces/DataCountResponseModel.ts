import SmirnaApiResponseModel from "./SmirnaApiResponseModel"

export default interface DataCountResponseModel extends SmirnaApiResponseModel{
  data:{
    total:number
  }
}