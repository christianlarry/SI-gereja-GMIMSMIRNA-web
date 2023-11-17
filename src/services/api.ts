import axios from "axios"
import { BeritaResponseModel } from "../interfaces/BeritaModel"
import DataCountResponseModel from "../interfaces/DataCountResponseModel"
import { KolomResponseModel } from "../interfaces/KolomModel"
import { KomisiKategorialResponseModel } from "../interfaces/KomisiKategorialModel"
import { KomisiKerjaResponseModel } from "../interfaces/KomisiKerjaModel"
import { PengurusRayonResponseModel } from "../interfaces/PengurusRayonModel"

const api_baseUrl = 'http://localhost:5000/'
const api_key = 'oijrsafioj9031uj5w1i=f-olszlfl21-0ir0sokd01k0-3i5r0ik0-3ijfzsjkfjlsA"AlALAZG:"KSFAL?FK?L#!KL:RKk;alkfsAlfka;sjfljj;asfasFJSA:JFJASL:JG:DJGeojqaQ"PA{APSIPEI{QMFSAM}}'

export const blankProfilePictureUrl:string = '/images/no_profile_picture.png'

export const getPengumuman = ()=>{
  return axios.get(`${api_baseUrl}pengumuman`,{
    headers:{
      Authorization: `Bearer ${api_key}`
    }
  })
}

export const getBerita = ()=>{
  return axios.get<BeritaResponseModel>(`${api_baseUrl}berita`,{
    headers:{
      Authorization: `Bearer ${api_key}`
    }
  })
}

export const getKolom = ()=>{
  return axios.get<KolomResponseModel>(`${api_baseUrl}kolom`,{
    headers:{
      Authorization: `Bearer ${api_key}`
    }
  })
}

export const getKompelka = ()=>{
  return axios.get<KomisiKategorialResponseModel>(`${api_baseUrl}komisikategorial`,{
    headers:{
      Authorization: `Bearer ${api_key}`
    }
  })
}

export const getKomisiKerja = ()=>{
  return axios.get<KomisiKerjaResponseModel>(`${api_baseUrl}komisikerja`,{
    headers:{
      Authorization: `Bearer ${api_key}`
    }
  })
}

export const getPengurusRayon = ()=>{
  return axios.get<PengurusRayonResponseModel>(`${api_baseUrl}pengurusrayon`,{
    headers:{
      Authorization: `Bearer ${api_key}`
    }
  })
}

export const getTotalAnggotaJemaat = ()=>{
  return axios.get<DataCountResponseModel>(`${api_baseUrl}anggotajemaat/count`,{
    headers:{
      Authorization: `Bearer ${api_key}`
    }
  })
}

export const getTotalKeluarga = ()=>{
  return axios.get<DataCountResponseModel>(`${api_baseUrl}keluarga/count`,{
    headers:{
      Authorization: `Bearer ${api_key}`
    }
  })
}
export const getTotalKolom = ()=>{
  return axios.get<DataCountResponseModel>(`${api_baseUrl}kolom/count`,{
    headers:{
      Authorization: `Bearer ${api_key}`
    }
  })
}