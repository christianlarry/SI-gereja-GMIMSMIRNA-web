import UpkTable from "../../../components/PagesComponents/PerangkatPelayanan/Kolom/UpkTable"
import Aside from "../../../components/aside/Aside"
import AsideSection from "../../../components/aside/AsideSection"
import MainAsideContainer from "../../../layouts/Containers/MainAsideContainer"
import SectionTitle from "../../../components/section/SectionTitle"
import SectionTitleSep from "../../../components/section/SectionTitleSep"

import './Kolom.css'
import DataLoader from "../../../components/ui/Loader/DataLoader"
import ErrorText from "../../../components/error/ErrorText"
import { useEffect, useState } from "react"
import { KolomModel } from "../../../interfaces/api/KolomModel"
import ProfileCard from "../../../components/ui/Card/ProfileCard"
import AsideLinkLists, { AsideLinkListsItem } from "../../../components/aside/AsideLinkLists"
import AsideTitle from "../../../components/aside/AsideTitle"
import usePerangkatPelayanan from "../../../hooks/usePerangkatPelayanan"
import { useLocation } from "react-router-dom"
import FadeReveal from "../../../components/reveal/FadeReveal"
import { motion, useAnimationControls } from "framer-motion"
import useTitleHeader from "../../../hooks/useTitleHeader"

const Kolom = ()=>{

  const {kolom:kolomSwr} = usePerangkatPelayanan()
  const {data,error,isLoading} = kolomSwr

  const [kolom,setKolom] = useState<KolomModel>()
  const {setTitle} = useTitleHeader()

  const location = useLocation()

  useEffect(()=>{
    // SET FIRST KOLOM TO SHOW (KOLOM 1)
    if(data) {
      data.data.forEach(value=>{
        const penatuaArr = value.penatua.nama_lengkap.split(' ')
        const diakenArr = value.diaken.nama_lengkap.split(' ')
        value.penatua.nama_lengkap = penatuaArr[0]+' '+penatuaArr[penatuaArr.length-1]
        value.diaken.nama_lengkap = diakenArr[0]+' '+diakenArr[diakenArr.length-1]
      })
      setSelectedKolom(data.data[0].id)
    }
  },[data])

  const setSelectedKolom = (idKolom:number)=>{
    if(data){
      const selectedKolom = data.data.filter(value=>value.id === idKolom)[0]
  
      setKolom(selectedKolom)
    }
  }

  useEffect(()=>{
    if(kolom) setTitle(`Kolom ${kolom.kolom}`)
  },[kolom,location])

  // ANIMATION
  const animateControls = useAnimationControls()

  useEffect(()=>{
    animateControls.set({opacity:0})
    animateControls.start({
      opacity: 1,
      transition:{
        ease: 'easeInOut',
        duration: 0.6
      }
    })
  },[kolom])

  useEffect(()=>{if(error)setKolom(undefined)},[error])

  return (
    <FadeReveal>
      <MainAsideContainer>
        <Aside className="pp_kolom-aside">
          <AsideSection>
            <AsideTitle className="pp_kolom-aside-title" text="Kolom"/>
            {(data && !error) &&
              <AsideLinkLists className="pp_kolom-lists">
                {data.data.map(kol=>(
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
          <motion.div animate={animateControls}>
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
          </motion.div>
        </main>
        }
        {error &&
        <div style={{display:'flex',justifyContent:'center',width: '100%'}}>
          <ErrorText text="Terjadi kesalahan mendapatkan data kolom!"/>
        </div>
        }
      </MainAsideContainer>
    </FadeReveal>
  )
}

export default Kolom