import axios, { AxiosResponse } from "axios"

// DATA MODEL IMPORT 
import { BeritaResponseModel, KategoriBeritaResponseModel, SingleBeritaResponseModel } from "../interfaces/api/BeritaModel"
import DataCountResponseModel from "../interfaces/api/DataCountResponseModel"
import { KolomResponseModel } from "../interfaces/api/KolomModel"
import { KomisiKategorialResponseModel } from "../interfaces/api/KomisiKategorialModel"
import { KomisiKerjaResponseModel } from "../interfaces/api/KomisiKerjaModel"
import { PengurusRayonResponseModel } from "../interfaces/api/PengurusRayonModel"
import { AnggotaJemaatStatistikResponseModel } from "../interfaces/api/AnggotaJemaatModel"
import { PengumumanResponseModel } from "../interfaces/api/PengumumanModel"

// USE SWR IMPORT
import useSWR, { SWRConfiguration } from "swr"

// FETCHER
export const fetcher = async <T>(url:string,query:string=''):Promise<T>=>{
  const response:AxiosResponse<T> = await axios.get(api_baseUrl+url+query,{
    headers: {
      Authorization: `Bearer ${api_key}`
    }
  })
  return response.data
}

// API DATA
export const api_baseUrl = 'http://localhost:5000/'
export const api_key = 'oijrsafioj9031uj5w1i=f-olszlfl21-0ir0sokd01k0-3i5r0ik0-3ijfzsjkfjlsA"AlALAZG:"KSFAL?FK?L#!KL:RKk;alkfsAlfka;sjfljj;asfasFJSA:JFJASL:JG:DJGeojqaQ"PA{APSIPEI{QMFSAM}}'

// BLANK/DEFAULT IMAGE URL
export const blankProfilePictureUrl: string = '/images/no_profile_picture.png'
export const blankThumbnailUrl: string = '/images/no_berita_thumbnail.jpg'

// -- BERITA --

export const getBerita = (query?:string,config?:SWRConfiguration) => useSWR<BeritaResponseModel>(
  `berita${query ? '?' + query : ''}`, 
  fetcher, 
  config)
export const getBeritaById = (id:number,config?:SWRConfiguration) => useSWR<SingleBeritaResponseModel>(
  `berita/${id}`, 
  fetcher, 
  config)
export const getKategoriBerita = (config?:SWRConfiguration) => useSWR<KategoriBeritaResponseModel>(
  'berita/kategori', 
  fetcher, 
  config)
export const getBeritaPopuler = (config?:SWRConfiguration) => useSWR<BeritaResponseModel>(
  'berita/populer',
  fetcher, 
  config)

// -- PENGUMUMAN --

export const getPengumuman = (config?:SWRConfiguration)=>useSWR<PengumumanResponseModel>(
  'pengumuman', 
  fetcher, 
  config)

// -- DATA JEMAAT --

export const getKolom = (config?:SWRConfiguration)=>useSWR<KolomResponseModel>(
  'kolom',
  fetcher,
  config
)
export const getKompelka = (config?:SWRConfiguration)=>useSWR<KomisiKategorialResponseModel>(
  'komisikategorial',
  fetcher,
  config
)
export const getKomisiKerja = (config?:SWRConfiguration)=>useSWR<KomisiKerjaResponseModel>(
  'komisikerja',
  fetcher,
  config
)
export const getPengurusRayon = (config?:SWRConfiguration)=>useSWR<PengurusRayonResponseModel>(
  'pengurusrayon',
  fetcher,
  config
)
export const getTotalAnggotaJemaat = (config?:SWRConfiguration)=>useSWR<DataCountResponseModel>(
  'anggotajemaat/total',
  fetcher,
  config
)
export const getTotalKeluarga = (config?:SWRConfiguration)=>useSWR<DataCountResponseModel>(
  'keluarga/total',
  fetcher,
  config
)
export const getTotalKolom = (config?:SWRConfiguration)=>useSWR<DataCountResponseModel>(
  'kolom/total',
  fetcher,
  config
)
export const getStatistikAnggotaJemaat = (config?:SWRConfiguration)=>useSWR<AnggotaJemaatStatistikResponseModel>(
  'anggotajemaat/statistik',
  fetcher,
  config
)