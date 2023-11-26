import SectionTitle from '../../section/SectionTitle'
import './StrukturBpmjSection.css'
import strukturBpmj from '../../../data/strukturBpmj.json'
import ProfileCardRounded from '../../card/ProfileCardRounded'
import SectionSubtitle from '../../section/SectionSubtitle'
import Button from '../../button/Button'
import { Link } from 'react-router-dom'
import SlideReveal from '../../reveal/SlideReveal'
import FadeReveal from '../../reveal/FadeReveal'

const StrukturBpmjSection = ()=>(
  <section className='struktur-bpmj'>
    <div className="container">
      <div className="struktur-bpmj-wrapper">
        <SlideReveal direction='y' translateFrom={50}>
          <div className="struktur-bpmj-title">
            <SectionTitle text='Badan Pekerja Majelis Jemaat'/>
            <SectionTitle text='GMIM Smirna Malalayang'/>
            <SectionSubtitle text='Periode Pelayanan 2022 - 2026' style={{color: '#fff',marginTop: '10px'}}/>
          </div>
        </SlideReveal>
        <ul className="struktur-bpmj-lists">
          {strukturBpmj.map((value,i)=>(
            <li className="struktur-bpmj-list-item" key={i}>
              <FadeReveal delay={i*0.2}>
                <ProfileCardRounded name={value.nama} desc={value.jabatan} imageUrl={value.imageUrl} />
              </FadeReveal>
            </li>
          ))} 
        </ul>
        <SlideReveal direction='y' translateFrom={50} duration={1}>
          <div style={{display:'flex',justifyContent: 'center'}}>
            <Button style={{marginTop:'2rem'}}>
              <Link to="/perangkat-pelayanan/bpmj" className="font-family-primary">Struktur BPMJ Selengkapnya</Link>
            </Button>
          </div>
        </SlideReveal>
      </div>
    </div>
  </section>
)

export default StrukturBpmjSection