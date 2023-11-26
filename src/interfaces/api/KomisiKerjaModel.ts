import SmirnaApiResponseModel from "./SmirnaApiResponseModel"

export default interface KomisiKerjaModel{
  id:number
  id_anggotajemaat:number
  nama_lengkap:string
  foto_url?:string | null
  kategori:string
  jabatan:string
}

export interface MappedKomisiKerjaModel{
  [namaKategori:string]:KomisiKerjaModel[]
}

export interface KomisiKerjaResponseModel extends SmirnaApiResponseModel{
  data: KomisiKerjaModel[]
}