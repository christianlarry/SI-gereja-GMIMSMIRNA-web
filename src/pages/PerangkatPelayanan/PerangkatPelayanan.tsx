import { Outlet, useLocation } from "react-router-dom"
import SecondaryNavbar from "../../components/navbar/SecondaryNavbar"
import smirnaNavDropdowns from '../../data/getNavigationDropdowns'
import { Suspense, createContext } from "react"
import DataLoader from "../../components/loader/DataLoader"
import useSWR, { SWRResponse } from "swr"
import { AxiosResponse } from "axios"

import { getKolom, getKomisiKerja, getKompelka, getPengurusRayon } from "../../services/api"

import { KolomResponseModel } from "../../interfaces/api/KolomModel"
import { KomisiKategorialResponseModel } from "../../interfaces/api/KomisiKategorialModel"
import { KomisiKerjaResponseModel } from "../../interfaces/api/KomisiKerjaModel"
import { PengurusRayonResponseModel } from "../../interfaces/api/PengurusRayonModel"
import FadeReveal from "../../components/reveal/FadeReveal"

interface PerangkatPelayananContextType{
  kolom:SWRResponse<AxiosResponse<KolomResponseModel,any>,any,any>
  kompelka:SWRResponse<AxiosResponse<KomisiKategorialResponseModel,any>,any,any>
  komisiKerja:SWRResponse<AxiosResponse<KomisiKerjaResponseModel,any>,any,any>
  pengurusRayon:SWRResponse<AxiosResponse<PengurusRayonResponseModel,any>,any,any>
}

export const PerangkatPelayananContext = createContext<PerangkatPelayananContextType | undefined>(undefined)

const PerangkatPelayanan = () => {

  const perangkatPelayananDropdowns = smirnaNavDropdowns('/perangkat-pelayanan')!
  const location = useLocation()

  const SWRKolom = useSWR('/api/kolom',getKolom)
  const SWRKompelka = useSWR('/api/komisikategorial',getKompelka)
  const SWRKomisiKerja = useSWR('/api/komisikerja',getKomisiKerja)
  const SWRPengurusRayon = useSWR('/api/pengurusrayon',getPengurusRayon)

  return (
    <PerangkatPelayananContext.Provider value={{
      kolom: SWRKolom,
      kompelka: SWRKompelka,
      komisiKerja: SWRKomisiKerja,
      pengurusRayon: SWRPengurusRayon}}>
      
      <FadeReveal>
        <div className="container" style={{width: '100%',display: 'flex',flexDirection: 'column'}}>
          <SecondaryNavbar data={perangkatPelayananDropdowns} style={{marginBottom: '6rem',alignSelf:'center'}}/>

          {location.pathname === '/perangkat-pelayanan' && 
            <div>
              <p style={{textAlign: 'center'}}>Klik link diatas untuk melihat perangkat pelayanan Jemaat GMIM Smirna</p>
            </div>
          }

          <Suspense fallback={<DataLoader/>}>
            <Outlet/>
          </Suspense>
        </div>
      </FadeReveal>
      
    </PerangkatPelayananContext.Provider>
  )
}

export default PerangkatPelayanan