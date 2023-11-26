import SmirnaApiResponseModel from "./SmirnaApiResponseModel"

interface JemaatData{
  id_anggotajemaat:number
  nama_lengkap:string
  foto_url?:string | null
}

interface UpkModel extends JemaatData{
  id:number
  penatalayanan:string
  jabatan:string
}

export interface KolomModel{
  id:number
  kolom:number
  penatua:JemaatData
  diaken:JemaatData
  upk:{
    bapak?:null | UpkModel[]
    ibu?:null | UpkModel[]
    pemuda?:null | UpkModel[]
    remaja?:null | UpkModel[]
    pemuda_remaja?:null | UpkModel[]
    anak?:null | UpkModel[]
    tim_doa?:null | UpkModel[]
  }
}

export interface KolomResponseModel extends SmirnaApiResponseModel{
  data:KolomModel[]
}