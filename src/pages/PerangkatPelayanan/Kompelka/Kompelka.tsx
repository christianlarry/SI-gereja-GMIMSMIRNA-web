import { useEffect, useState } from "react"
import { MappedKomisiKategorialModel } from "../../../interfaces/api/KomisiKategorialModel"
import ErrorText from "../../../components/error/ErrorText"
import { useLocation } from "react-router-dom"
import PPCardSwiper from "../../../components/PagesComponents/PerangkatPelayanan/PPCardSwiper"
import KomisiSwiperSection from "../../../components/PagesComponents/PerangkatPelayanan/KomisiSwiperSection"
import KomisiSwiperSectionContainer from "../../../components/PagesComponents/PerangkatPelayanan/KomisiSwiperSectionContainer"
import { capitalizeText } from "../../../utils/stringFormat"
import usePerangkatPelayanan from "../../../hooks/usePerangkatPelayanan"
import FadeReveal from "../../../components/reveal/FadeReveal"
import useTitleHeader from "../../../hooks/useTitleHeader"

const Kompelka = ()=>{

  // SET TITLE
  const {setTitle} = useTitleHeader()
  const location = useLocation()
  useEffect(()=>setTitle('Komisi Pelayanan Kategorial'),[location])

  // FETCH DATA
  const {kompelka} = usePerangkatPelayanan()
  const {data,error} = kompelka

  const [mappedKompelka,setMappedKompelka] = useState<MappedKomisiKategorialModel>()

  useEffect(()=>{
    if(data){
      // REFORMATTING TEXT JABATAN & NAMA LENGKAP
      data.data.forEach(value =>{
        value.jabatan = capitalizeText(value.jabatan.split('-').join(' '))
        const namaLengkapArr = value.nama_lengkap.split(' ')
        value.nama_lengkap = namaLengkapArr[0]+' '+namaLengkapArr[namaLengkapArr.length-1]
      })

      const mappedData:MappedKomisiKategorialModel = {}
      const komisiPelayanan = [...new Set(data.data.map(value=>value.komisi_pelayanan))]

      komisiPelayanan.forEach(value=>{
        mappedData[value] = data.data.filter(dat => dat.komisi_pelayanan === value)
      })

      setMappedKompelka(mappedData)
    }
  },[data])

  if(error) return (<div>
    <ErrorText text="Terjadi kesalahan saat mendapatkan data Komisi Kategorial!"/>
  </div>)

  return (
    <main style={{minHeight:'100vh'}}>
      <KomisiSwiperSectionContainer>
        {mappedKompelka && Object.keys(mappedKompelka).map(key=>(
          <FadeReveal key={key}>
            <KomisiSwiperSection title={`Komisi Pelayanan ${capitalizeText(key)}`}>
              <PPCardSwiper data={mappedKompelka[key]}/>
            </KomisiSwiperSection>
          </FadeReveal>
        ))
        }
      </KomisiSwiperSectionContainer>
    </main>
  )
}

export default Kompelka