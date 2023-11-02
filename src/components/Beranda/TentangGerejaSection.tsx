import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faPeopleRoof, faTableCells } from '@fortawesome/free-solid-svg-icons'
import Paragraph from "../../components/Paragraph"
import SectionSubtitle from "../../components/SectionSubtitle"
import SectionTitle from "../../components/SectionTitle"
import SectionTitleSep from "../../components/SectionTitleSep"
import Button from "../../components/button/Button"
import { Link } from "react-router-dom"

import './TentangGerejaSection.css'
import SlideReveal from '../reveal/SlideReveal'
import { useEffect,useState } from 'react'
import { getTotalAnggotaJemaat, getTotalKeluarga, getTotalKolom } from '../../services/api'
import { isAxiosError } from 'axios'
import FadeReveal from '../reveal/FadeReveal'

const TentangGerejaSection = ()=>{

  const [totalAnggotaJemaat,setTotalAnggotaJemaat] = useState<number>(0)
  const [totalKeluarga,setTotalKeluarga] = useState<number>(0)
  const [totalKolom,setTotalKolom] = useState<number>(0)

  // EFFECT
  useEffect(()=>{
    const getStatistik = async ()=>{
      try {
        const totalAnggotaJemaat = await getTotalAnggotaJemaat()
        const totalKeluarga = await getTotalKeluarga()
        const totalKolom = await getTotalKolom()
        
        setTotalAnggotaJemaat(totalAnggotaJemaat.data.data.total)
        setTotalKeluarga(totalKeluarga.data.data.total)
        setTotalKolom(totalKolom.data.data.total)

      } catch (err) {
        console.error(err)
        if(isAxiosError(err)) console.error('Request error: '+err.response?.status)
      }
    }

    getStatistik()
  }, [])

  return (
    <section>
      <div className="container">
        <div className="tentang-gereja-row">
          <SlideReveal direction='y' translateFrom={100} duration={0.6} delay={0.5}>
            <img className="tentang-gereja-image" src="images/smirna-gedung-small.png" alt="Gedung Gereja Smirna" />
          </SlideReveal>
          <div className="tentang-gereja-content">
            <SlideReveal direction='y' translateFrom={100} duration={0.8}>
              <div className="tentang-gereja-content-title">
                <SectionSubtitle text='Tentang Gereja' />
                <SectionTitle text='Jemaat GMIM "Smirna" Malalayang Dua' />
                <SectionTitleSep />
              </div>
            </SlideReveal>
            <SlideReveal direction='y' translateFrom={100} duration={0.8}>
              <div className="tentang-gereja-content-description">
                <Paragraph text="Jemaat Smirna merupakan bagian dari Gereja Masehi Injili di Minahasa (GMIM) yang berkedudukan di Kelurahan Malalayang Dua Kota Manado. Jemaat Smirna masuk dalam Wilayah Manado Malalayang Barat." style={{ textAlign: 'justify' }} />
                <Button style={{ marginTop: '1rem' }}>
                  <Link to='/profil' className="font-family-primary">
                    Lihat Profil Gereja
                  </Link>
                </Button>
              </div>
            </SlideReveal>
          </div>
        </div>
        <FadeReveal duration={1}>
          <div className="tentang-gereja-statistik">
            <SlideReveal direction='y' translateFrom={100} duration={0.8}>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <SectionTitle text="Statistik Jemaat" style={{ textAlign: 'center' }} />
                <SectionTitleSep />
              </div>
            </SlideReveal>
            <SlideReveal direction='y' translateFrom={100} duration={0.8}>
              <ul className="tentang-gereja-statistik-boxs">
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faPerson} />
                  </span>
                  <SectionTitle text={totalAnggotaJemaat.toString()} style={{ fontWeight: 600 }} />
                  <span className="tg-statistik-desc">Anggota Jemaat</span>
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faPeopleRoof} />
                  </span>
                  <SectionTitle text={totalKeluarga.toString()} style={{ fontWeight: 600 }} />
                  <span className="tg-statistik-desc">Jumlah Keluarga</span>
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faTableCells} />
                  </span>
                  <SectionTitle text={totalKolom.toString()} style={{ fontWeight: 600 }} />
                  <span className="tg-statistik-desc">Jumlah Kolom</span>
                </li>
              </ul>
            </SlideReveal>
          </div>
        </FadeReveal>
      </div>
    </section>
  )
}

export default TentangGerejaSection