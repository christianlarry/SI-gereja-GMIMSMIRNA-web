import useSWR from "swr"
import { getKomisiKerja } from "../../../services/api"
import { useEffect, useState } from "react"
import { MappedKomisiKerjaModel } from "../../../interfaces/KomisiKerjaModel"
import ErrorText from "../../../components/error/ErrorText"
import { capitalizeText } from "../../../utils/stringFormat"
import KomisiSwiperSectionContainer from "../../../components/PagesComponents/PerangkatPelayanan/KomisiSwiperSectionContainer"
import KomisiSwiperSection from "../../../components/PagesComponents/PerangkatPelayanan/KomisiSwiperSection"
import PPCardSwiper from "../../../components/PagesComponents/PerangkatPelayanan/PPCardSwiper"

const KomisiKerja = ()=>{

  const {data,error} = useSWR('/api/komisikerja',getKomisiKerja)
  const [mappedKomisiKerja,setMappedKomisiKerja] = useState<MappedKomisiKerjaModel>()

  useEffect(()=>{
    if(data){
      data.data.data.forEach(value=>{
        value.jabatan = capitalizeText(value.jabatan.split('-').join(' '))
        const namaLengkapArr = value.nama_lengkap.split(' ')
        value.nama_lengkap = namaLengkapArr[0]+' '+namaLengkapArr[namaLengkapArr.length-1]
      })

      const kategori = [...new Set(data.data.data.map(value=>value.kategori))]
      const mappedData:MappedKomisiKerjaModel = {}
      
      kategori.forEach(value=>{
        mappedData[value.split('-').join('_')] = data.data.data.filter(dat=>dat.kategori === value)
      })

      setMappedKomisiKerja(mappedData)
    }
  },[data])

  if(error) return <ErrorText text="Terjadi kesalahan saat mendapatkan data Komisi Kerja!"/>

  return (
    <main style={{minHeight:'100vh'}}>
      <KomisiSwiperSectionContainer>
        {mappedKomisiKerja && Object.keys(mappedKomisiKerja).map(key=>(
          <KomisiSwiperSection title={capitalizeText(key.split('_').join(' '))} key={key}>
            <PPCardSwiper data={mappedKomisiKerja[key]}/>
          </KomisiSwiperSection>
        ))}
      </KomisiSwiperSectionContainer>
    </main>
  )
}

export default KomisiKerja