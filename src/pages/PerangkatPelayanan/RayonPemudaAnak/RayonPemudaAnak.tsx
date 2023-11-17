import useSWR from "swr"
import { getPengurusRayon } from "../../../services/api"
import { useEffect, useState } from "react"
import PengurusRayonModel, { MappedPengurusRayonModel } from "../../../interfaces/PengurusRayonModel"
import MainAsideContainer from "../../../components/layouts/MainAsideContainer"
import Aside from "../../../components/aside/Aside"
import AsideSection from "../../../components/aside/AsideSection"
import DataLoader from "../../../components/loader/DataLoader"
import ErrorText from "../../../components/error/ErrorText"
import { capitalizeText } from "../../../utils/stringFormat"
import AsideTitle from "../../../components/aside/AsideTitle"
import AsideLinkLists, { AsideLinkListsItem } from "../../../components/aside/AsideLinkLists"

import './RayonPemudaAnak.css'
import SectionTitle from "../../../components/section/SectionTitle"
import SectionTitleSep from "../../../components/section/SectionTitleSep"
import ProfileCard from "../../../components/card/ProfileCard"
import SectionSubtitle from "../../../components/section/SectionSubtitle"
import { useTitleHeader } from "../../../components/titleHeader/TitleHeaderContext"

const RayonPemudaAnak = ()=>{

  const {data,isLoading,error} = useSWR('/api/pengurusrayon',getPengurusRayon)
  const [mappedPengurusRayon,setMappedPengurusRayon] = useState<MappedPengurusRayonModel>()
  const [selectedPengurusRayon,setSelectedPengurusRayon] = useState<PengurusRayonModel[]>()

  const {setTitle} = useTitleHeader()

  useEffect(()=>{
    if(data){
      data.data.data.forEach(value=>{
        value.jabatan = capitalizeText(value.jabatan.split('-').join(' '))
        const namaLengkapArr = value.nama_lengkap.split(' ')
        value.nama_lengkap = namaLengkapArr[0]+' '+namaLengkapArr[namaLengkapArr.length-1]
      })

      const mappedData:MappedPengurusRayonModel = {}
      const rayon = [...new Set(data.data.data.map(value =>value.rayon))]

      rayon.forEach(key=>{
        mappedData[key.split('-').join('_')] = data.data.data.filter(value => value.rayon === key)
      })

      setMappedPengurusRayon(mappedData)
    }
  },[data])

  useEffect(()=>{
    if(mappedPengurusRayon) setSelectedRayon(Object.keys(mappedPengurusRayon)[0])
  },[mappedPengurusRayon])

  const setSelectedRayon = (rayon:string)=>{
    if(mappedPengurusRayon){
      setSelectedPengurusRayon(mappedPengurusRayon[rayon])
      setTitle('Rayon Pemuda Remaja Anak - '+capitalizeText(rayon.split('_').join(' ')))
    }
  }

  return (
    <MainAsideContainer>
      <Aside style={{width: '250px'}}>
        <AsideSection>
          <AsideTitle text="Rayon"/>
          {(data && mappedPengurusRayon && !error) &&
          <AsideLinkLists>
            {Object.keys(mappedPengurusRayon).map(key=>(
            <AsideLinkListsItem key={key}>
              <span 
              onClick={()=>setSelectedRayon(key)}
              className={(selectedPengurusRayon && selectedPengurusRayon[0].rayon===mappedPengurusRayon[key][0].rayon)?'active':undefined}>
                {capitalizeText(key.split('_').join(' '))}
              </span>
            </AsideLinkListsItem>
            ))}
          </AsideLinkLists>
          }
          {isLoading && <DataLoader/>}
          {error && <ErrorText text="Terjadi kesalahan mendapatkan data Pengurus Rayon!"/>}
        </AsideSection>
      </Aside>

      {selectedPengurusRayon &&
        <main>
          <div className="pp_rayon-section-container">
            <section className="pp_rayon-section">
              <SectionTitle text="Pengurus Rayon Pemuda Remaja"/>
              <SectionSubtitle text={selectedPengurusRayon[0].rayon.split('-').join(' ')}/>
              <SectionTitleSep/>
              <div className="pp_rayon-card-container">
                {selectedPengurusRayon.filter(value => value.pelayanan_kategorial === 'pemuda-remaja').map(value=>(
                  <ProfileCard 
                  key={value.id} 
                  nama={value.nama_lengkap}
                  desc={value.jabatan} 
                  picture_url={value.foto_url || undefined}>
                    {value.nama_lengkap} - {value.jabatan}
                  </ProfileCard>
                ))}
              </div>
            </section>
            <section className="pp_rayon-section">
              <SectionTitle text="Pengurus Rayon Anak"/>
              <SectionSubtitle text={selectedPengurusRayon[0].rayon.split('-').join(' ')}/>
              <SectionTitleSep/>
              <div className="pp_rayon-card-container">
                {selectedPengurusRayon.filter(value => value.pelayanan_kategorial === 'anak').map(value=>(
                  <ProfileCard 
                  key={value.id} 
                  nama={value.nama_lengkap}
                  desc={value.jabatan} 
                  picture_url={value.foto_url || undefined}>
                    {value.nama_lengkap} - {value.jabatan}
                  </ProfileCard>
                ))}
              </div>
            </section>
          </div>
        </main>
      }

      {error && <ErrorText text="Terjadi kesalahan mendapatkan data Pengurus Rayon!"/>}
    </MainAsideContainer>
  )
}

export default RayonPemudaAnak