import SmirnaApiResponseModel from "./SmirnaApiResponseModel"

export default interface PengurusRayonModel{
  id:number
  id_anggotajemaat:number
  pelayanan_kategorial:string,
  rayon:string,
  jabatan:string,
  nama_lengkap:string,
  foto_url?:string | null
}

export interface PengurusRayonResponseModel extends SmirnaApiResponseModel{
  data: PengurusRayonModel[]
}

export interface MappedPengurusRayonModel{
  [rayon:string]:PengurusRayonModel[]
}