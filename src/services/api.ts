import axios from "axios"
import { BeritaResponseModel } from "../interfaces/api/BeritaModel"
import DataCountResponseModel from "../interfaces/api/DataCountResponseModel"
import { KolomResponseModel } from "../interfaces/api/KolomModel"
import { KomisiKategorialResponseModel } from "../interfaces/api/KomisiKategorialModel"
import { KomisiKerjaResponseModel } from "../interfaces/api/KomisiKerjaModel"
import { PengurusRayonResponseModel } from "../interfaces/api/PengurusRayonModel"
import { AnggotaJemaatStatistikResponseModel } from "../interfaces/api/AnggotaJemaatModel"

const api_baseUrl = 'http://localhost:5000/'
const api_key = 'oijrsafioj9031uj5w1i=f-olszlfl21-0ir0sokd01k0-3i5r0ik0-3ijfzsjkfjlsA"AlALAZG:"KSFAL?FK?L#!KL:RKk;alkfsAlfka;sjfljj;asfasFJSA:JFJASL:JG:DJGeojqaQ"PA{APSIPEI{QMFSAM}}'

export const blankProfilePictureUrl: string = '/images/no_profile_picture.png'

export const getPengumuman = () => axios.get(`${api_baseUrl}pengumuman`, {
  headers: {
    Authorization: `Bearer ${api_key}`
  }
})

export const getBerita = () => axios.get<BeritaResponseModel>(`${api_baseUrl}berita`, {
  headers: {
    Authorization: `Bearer ${api_key}`
  }
})

export const getKolom = () => axios.get<KolomResponseModel>(`${api_baseUrl}kolom`, {
  headers: {
    Authorization: `Bearer ${api_key}`
  }
})

export const getKompelka = () => axios.get<KomisiKategorialResponseModel>(`${api_baseUrl}komisikategorial`, {
  headers: {
    Authorization: `Bearer ${api_key}`
  }
})

export const getKomisiKerja = () => axios.get<KomisiKerjaResponseModel>(`${api_baseUrl}komisikerja`, {
  headers: {
    Authorization: `Bearer ${api_key}`
  }
})

export const getPengurusRayon = () => axios.get<PengurusRayonResponseModel>(`${api_baseUrl}pengurusrayon`, {
  headers: {
    Authorization: `Bearer ${api_key}`
  }
})

export const getTotalAnggotaJemaat = () => axios.get<DataCountResponseModel>(`${api_baseUrl}anggotajemaat/total`, {
  headers: {
    Authorization: `Bearer ${api_key}`
  }
})

export const getTotalKeluarga = () => axios.get<DataCountResponseModel>(`${api_baseUrl}keluarga/total`, {
  headers: {
    Authorization: `Bearer ${api_key}`
  }
})

export const getTotalKolom = () => axios.get<DataCountResponseModel>(`${api_baseUrl}kolom/total`, {
  headers: {
    Authorization: `Bearer ${api_key}`
  }
})

export const getStatistikAnggotaJemaat = () => axios.get<AnggotaJemaatStatistikResponseModel>(`${api_baseUrl}anggotajemaat/statistik`, {
  headers: {
    Authorization: `Bearer ${api_key}`
  }
})