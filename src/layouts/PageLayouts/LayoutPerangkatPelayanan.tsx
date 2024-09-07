import { Outlet } from "react-router-dom"
import SecondaryNavbar from "../../components/navbar/SecondaryNavbar"
import smirnaNavDropdowns from '../../data/getNavigationDropdowns'
import { Suspense, createContext } from "react"
import DataLoader from "../../components/ui/Loader/DataLoader"
import { SWRResponse } from "swr"

import { getKolom, getKomisiKerja, getKompelka, getPengurusRayon } from "../../services/api"

import { KolomResponseModel } from "../../interfaces/api/KolomModel"
import { KomisiKategorialResponseModel } from "../../interfaces/api/KomisiKategorialModel"
import { KomisiKerjaResponseModel } from "../../interfaces/api/KomisiKerjaModel"
import { PengurusRayonResponseModel } from "../../interfaces/api/PengurusRayonModel"
import FadeReveal from "../../components/reveal/FadeReveal"

interface PerangkatPelayananContextType{
  kolom:SWRResponse<KolomResponseModel,any,any>
  kompelka:SWRResponse<KomisiKategorialResponseModel,any,any>
  komisiKerja:SWRResponse<KomisiKerjaResponseModel,any,any>
  pengurusRayon:SWRResponse<PengurusRayonResponseModel,any,any>
}

export const PerangkatPelayananContext = createContext<PerangkatPelayananContextType | undefined>(undefined)

const LayoutPerangkatPelayanan = () => {

  const perangkatPelayananDropdowns = smirnaNavDropdowns('/perangkat-pelayanan')!

  const SWRKolom = getKolom()
  const SWRKompelka = getKompelka()
  const SWRKomisiKerja = getKomisiKerja()
  const SWRPengurusRayon = getPengurusRayon()

  return (
    <PerangkatPelayananContext.Provider value={{
      kolom: SWRKolom,
      kompelka: SWRKompelka,
      komisiKerja: SWRKomisiKerja,
      pengurusRayon: SWRPengurusRayon}}>
      
      <FadeReveal>
        <div className="container" style={{width: '100%',display: 'flex',flexDirection: 'column'}}>
          <SecondaryNavbar data={perangkatPelayananDropdowns} style={{marginBottom: '6rem',alignSelf:'center'}}/>
          <Suspense fallback={<DataLoader/>}>
            <Outlet/>
          </Suspense>
        </div>
      </FadeReveal>
      
    </PerangkatPelayananContext.Provider>
  )
}

export default LayoutPerangkatPelayanan