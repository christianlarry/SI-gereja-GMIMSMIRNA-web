import SmirnaApiResponseModel from "./SmirnaApiResponseModel"

export interface AnggotaJemaatStatistikModel{
  total:number
  laki_laki:number
  perempuan:number
  jumlah_baptis:number
  jumlah_sidi:number
  bapak:number
  ibu:number
  pemuda:number
  remaja:number
  anak:number
  lansia:number
}

export interface AnggotaJemaatStatistikResponseModel extends SmirnaApiResponseModel{
  data: AnggotaJemaatStatistikModel
}