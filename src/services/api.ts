import axios from "axios"
import BeritaResponseModel from "../interfaces/BeritaResponseModel"
import DataCountResponseModel from "../interfaces/DataCountResponseModel"

const api_baseUrl = 'http://localhost:5000/'
const api_key = 'oijrsafioj9031uj5w1i=f-olszlfl21-0ir0sokd01k0-3i5r0ik0-3ijfzsjkfjlsA"AlALAZG:"KSFAL?FK?L#!KL:RKk;alkfsAlfka;sjfljj;asfasFJSA:JFJASL:JG:DJGeojqaQ"PA{APSIPEI{QMFSAM}}'

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