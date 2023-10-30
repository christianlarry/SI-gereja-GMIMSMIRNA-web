import SectionTitle from '../SectionTitle'
import './StrukturBpmjSection.css'
import strukturBpmj from '../../data/strukturBpmj.json'
import ProfileCardRounded from '../ProfileCardRounded'
import SectionSubtitle from '../SectionSubtitle'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const StrukturBpmjSection = ()=>(
  <section className='struktur-bpmj'>
    <div className="container">
      <div className="struktur-bpmj-wrapper">
        <div className="struktur-bpmj-title">
          <SectionTitle text='Badan Pekerja Majelis Jemaat'/>
          <SectionTitle text='GMIM Smirna Malalayang'/>
          <SectionSubtitle text='Periode Pelayanan 2022 - 2026' style={{color: '#fff',marginTop: '10px'}}/>
        </div>
        <ul className="struktur-bpmj-lists">
          {strukturBpmj.map((value,i)=>(
            <li className="struktur-bpmj-list-item" key={i}>
              <ProfileCardRounded name={value.nama} desc={value.jabatan} imageUrl={value.imageUrl} />
            </li>
          ))} 
        </ul>
        <div style={{display:'flex',justifyContent: 'center'}}>
          <Button style={{marginTop:'2rem'}}>
            <Link to="/perangkatpelayanan#bpmj" className="font-family-primary">Struktur BPMJ Selengkapnya</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default StrukturBpmjSection