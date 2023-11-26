import SmirnaApiResponseModel from "./SmirnaApiResponseModel";

export default interface KomisiKategorialModel{
  id:number
  id_anggotajemaat:number
  nama_lengkap:string
  foto_url?:string | null
  komisi_pelayanan:string
  jabatan:string
}

export interface MappedKomisiKategorialModel{
  [komisiPelayanan:string]:KomisiKategorialModel[]
}

export interface KomisiKategorialResponseModel extends SmirnaApiResponseModel{
  data: KomisiKategorialModel[]
}