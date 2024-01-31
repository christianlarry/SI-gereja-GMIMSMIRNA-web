import { Outlet } from "react-router-dom"
import BeritaAside from "../../PagesComponents/Berita/BeritaAside"
import MainAsideContainer from "../MainAsideContainer"
import { Suspense, createContext, useState } from "react"

interface BeritaContextType{
  currentKategori: string | undefined,
  setCurrentKategori: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const BeritaContext = createContext<BeritaContextType | undefined>(undefined)

const LayoutBerita = ()=>{

  const [currentKategori,setCurrentKategori] = useState<string>()

  return (
    <BeritaContext.Provider value={{setCurrentKategori,currentKategori}}>
      <div className="container w-full">
        <MainAsideContainer wrapWidth={1275}>
          <Suspense fallback={<div style={{flex:1}}/>}>
            <Outlet/>
          </Suspense>
          <BeritaAside currentKategori={currentKategori}/>
        </MainAsideContainer>
      </div>
    </BeritaContext.Provider>
      
  )
}

export default LayoutBerita