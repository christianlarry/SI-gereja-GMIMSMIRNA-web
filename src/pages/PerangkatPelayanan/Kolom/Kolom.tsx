import useSWR from "swr"
import UpkTable from "../../../components/PagesComponents/PerangkatPelayanan/Kolom/UpkTable"
import Aside from "../../../components/aside/Aside"
import AsideSection from "../../../components/aside/AsideSection"
import MainAsideContainer from "../../../components/layouts/MainAsideContainer"
import SectionTitle from "../../../components/section/SectionTitle"
import SectionTitleSep from "../../../components/section/SectionTitleSep"

import './Kolom.css'
import { getKolom } from "../../../services/api"
import DataLoader from "../../../components/loader/DataLoader"
import ErrorText from "../../../components/error/ErrorText"
import { useEffect, useState } from "react"
import { KolomModel } from "../../../interfaces/KolomModel"
import ProfileCard from "../../../components/card/ProfileCard"
import { useTitleHeader } from "../../../components/titleHeader/TitleHeaderContext"
import AsideLinkLists, { AsideLinkListsItem } from "../../../components/aside/AsideLinkLists"
import AsideTitle from "../../../components/aside/AsideTitle"

const Kolom = ()=>{

  const {data,error,isLoading} = useSWR('/api/kolom',getKolom)
  const [kolom,setKolom] = useState<KolomModel>()
  const {setTitle} = useTitleHeader()

  useEffect(()=>{
    // SET FIRST KOLOM TO SHOW (KOLOM 1)
    if(data) {
      data.data.data.forEach(value=>{
        const penatuaArr = value.penatua.nama_lengkap.split(' ')
        const diakenArr = value.diaken.nama_lengkap.split(' ')
        value.penatua.nama_lengkap = penatuaArr[0]+' '+penatuaArr[penatuaArr.length-1]
        value.diaken.nama_lengkap = diakenArr[0]+' '+diakenArr[diakenArr.length-1]
      })
      setSelectedKolom(data.data.data[0].id)
    }
  },[data])

  const setSelectedKolom = (idKolom:number)=>{
    if(data){
      const selectedKolom = data.data.data.filter(value=>value.id === idKolom)[0]
  
      setKolom(selectedKolom)
      setTitle(`Kolom ${selectedKolom.kolom}`)
    }
  }

  useEffect(()=>{if(error)setKolom(undefined)},[error])

  return (
    <MainAsideContainer>
      <Aside className="pp_kolom-aside">
        <AsideSection>
          <AsideTitle className="pp_kolom-aside-title" text="Kolom"/>
          {(data && !error) &&
            <AsideLinkLists className="pp_kolom-lists">
              {data.data.data.map(kol=>(
                <AsideLinkListsItem key={kol.id}>
                  <span className={(kolom?.id === kol.id)?'active':undefined} onClick={()=>setSelectedKolom(kol.id)}>Kolom {kol.kolom}</span>
                </AsideLinkListsItem>
              ))}
            </AsideLinkLists>
          }
          {isLoading && <DataLoader/>}
          {error && <ErrorText text="Terjadi kesalahan mendapatkan data kolom!"/>}
        </AsideSection>
      </Aside>
      
      {kolom &&
      <main className="pp_kolom-main">
        <div className="pp_kolom-main-container">
          <section className="pp_kolom-main-section">
            <SectionTitle className="pp_kolom-section-title" text={`Pelayan Khusus Kolom ${kolom.kolom}`}/>
            <SectionTitleSep/>
            <div className="pp_kolom-card-container">
              <ProfileCard nama={`Pnt. ${kolom.penatua.nama_lengkap}`} desc="Penatua" picture_url={kolom.penatua.foto_url || undefined}/>
              <ProfileCard nama={`Dkn. ${kolom.diaken.nama_lengkap}`} desc="Diaken" picture_url={kolom.diaken.foto_url || undefined}/>
            </div>
          </section>
          <section className="pp_kolom-main-section">
            <SectionTitle className="pp_kolom-section-title" text={`Unit Pelayanan Kategorial Kolom ${kolom.kolom}`}/>
            <SectionTitleSep/>
            <div className="pp_kolom-upk-container">
              {kolom.upk.bapak && <UpkTable penatalayanan="Upk Bapak" anggota={kolom.upk.bapak}/>}
              {kolom.upk.ibu && <UpkTable penatalayanan="Upk Ibu" anggota={kolom.upk.ibu}/>}
              {kolom.upk.pemuda && <UpkTable penatalayanan="Upk pemuda" anggota={kolom.upk.pemuda}/>}
              {kolom.upk.remaja && <UpkTable penatalayanan="Upk remaja" anggota={kolom.upk.remaja}/>}
              {kolom.upk.pemuda_remaja && <UpkTable penatalayanan="Upk pemuda remaja" anggota={kolom.upk.pemuda_remaja}/>}
              {kolom.upk.anak && <UpkTable penatalayanan="Upk anak" anggota={kolom.upk.anak}/>}
              {kolom.upk.tim_doa && <UpkTable penatalayanan="Upk tim doa" anggota={kolom.upk.tim_doa}/>}
            </div>
          </section>
        </div>
      </main>
      }
      {error &&
      <div style={{display:'flex',justifyContent:'center',width: '100%'}}>
        <ErrorText text="Terjadi kesalahan mendapatkan data kolom!"/>
      </div>
      }
    </MainAsideContainer>
  )
}

export default Kolom