import { useTitleHeader } from "../../../components/titleHeader/TitleHeaderContext"

import { useEffect, useState } from "react"
import { getKompelka } from "../../../services/api"
import useSWR from "swr"
import { MappedKomisiKategorialModel } from "../../../interfaces/KomisiKategorialModel"
import ErrorText from "../../../components/error/ErrorText"
import { useLocation } from "react-router-dom"
import PPCardSwiper from "../../../components/PagesComponents/PerangkatPelayanan/PPCardSwiper"
import KomisiSwiperSection from "../../../components/PagesComponents/PerangkatPelayanan/KomisiSwiperSection"
import KomisiSwiperSectionContainer from "../../../components/PagesComponents/PerangkatPelayanan/KomisiSwiperSectionContainer"
import { capitalizeText } from "../../../utils/stringFormat"

const Kompelka = ()=>{

  // SET TITLE
  const {setTitle} = useTitleHeader()
  const location = useLocation()
  useEffect(()=>setTitle('Komisi Pelayanan Kategorial'),[location])

  // FETCH DATA
  const {data,error} = useSWR('/api/komisikategorial',getKompelka)
  const [mappedKompelka,setMappedKompelka] = useState<MappedKomisiKategorialModel>()

  useEffect(()=>{
    if(data){
      // REFORMATTING TEXT JABATAN & NAMA LENGKAP
      data.data.data.forEach(value =>{
        value.jabatan = capitalizeText(value.jabatan.split('-').join(' '))
        const namaLengkapArr = value.nama_lengkap.split(' ')
        value.nama_lengkap = namaLengkapArr[0]+' '+namaLengkapArr[namaLengkapArr.length-1]
      })

      const mappedData:MappedKomisiKategorialModel = {}
      const komisiPelayanan = [...new Set(data.data.data.map(value=>value.komisi_pelayanan))]

      komisiPelayanan.forEach(value=>{
        mappedData[value] = data.data.data.filter(dat => dat.komisi_pelayanan === value)
      })

      setMappedKompelka(mappedData)
    }
  },[data])

  if(error) return (<div>
    <ErrorText text="Terjadi kesalahan saat mendapatkan data Komisi Kategorial! Silahkan refresh halaman atau kembali dalam beberapa saat."/>
  </div>)

  return (
    <main style={{minHeight:'100vh'}}>
      <KomisiSwiperSectionContainer>
        {mappedKompelka &&
        <>
          <KomisiSwiperSection title="Komisi Pelayanan Bapak">
            <PPCardSwiper data={mappedKompelka.bapak}/>
          </KomisiSwiperSection>
          <KomisiSwiperSection title="Komisi Pelayanan Ibu">
            <PPCardSwiper data={mappedKompelka.ibu}/>
          </KomisiSwiperSection>
          <KomisiSwiperSection title="Komisi Pelayanan Pemuda">
            <PPCardSwiper data={mappedKompelka.pemuda}/>
          </KomisiSwiperSection>
          <KomisiSwiperSection title="Komisi Pelayanan Remaja">
            <PPCardSwiper data={mappedKompelka.remaja}/>
          </KomisiSwiperSection>
          <KomisiSwiperSection title="Komisi Pelayanan Anak">
            <PPCardSwiper data={mappedKompelka.anak}/>
          </KomisiSwiperSection>
        </>
        }
      </KomisiSwiperSectionContainer>
    </main>
  )
}

export default Kompelka