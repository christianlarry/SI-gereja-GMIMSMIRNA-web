import Paragraph from "../../Paragraph"
import SectionSubtitle from "../../section/SectionSubtitle"
import SectionTitle from "../../section/SectionTitle"
import SectionTitleSep from "../../section/SectionTitleSep"
import Button from "../../button/Button"
import { Link } from "react-router-dom"

import './TentangGerejaSection.css'
import SlideReveal from '../../reveal/SlideReveal'
import FadeReveal from '../../reveal/FadeReveal'
import StatistikCardLists from '../../StatistikCardLists'

const TentangGerejaSection = ()=>{
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
                  <Link to='/profil-gereja' className="font-family-primary">
                    Lihat Selengkapnya
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
              <StatistikCardLists/>
            </SlideReveal>
          </div>
        </FadeReveal>
      </div>
    </section>
  )
}

export default TentangGerejaSection