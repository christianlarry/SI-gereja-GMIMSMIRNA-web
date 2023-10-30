import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faPeopleRoof, faTableCells } from '@fortawesome/free-solid-svg-icons'
import Paragraph from "../../components/Paragraph"
import SectionSubtitle from "../../components/SectionSubtitle"
import SectionTitle from "../../components/SectionTitle"
import SectionTitleSep from "../../components/SectionTitleSep"
import Button from "../../components/button/Button"
import { Link } from "react-router-dom"

import './TentangGerejaSection.css'

const TentangGerejaSection = ()=>(
  <section>
    <div className="container">
      <div className="tentang-gereja-row">
        <img className="tentang-gereja-image" src="images/smirna-gedung-small.png" alt="Gedung Gereja Smirna" />
        <div className="tentang-gereja-content">
          <div className="tentang-gereja-content-title">
            <SectionSubtitle text='Tentang Gereja' />
            <SectionTitle text='Jemaat GMIM "Smirna" Malalayang Dua' />
            <SectionTitleSep />
          </div>
          <div className="tentang-gereja-content-description">
            <Paragraph text="Jemaat Smirna merupakan bagian dari Gereja Masehi Injili di Minahasa (GMIM) yang berkedudukan di Kelurahan Malalayang Dua Kota Manado. Jemaat Smirna masuk dalam Wilayah Manado Malalayang Barat." style={{ textAlign: 'justify' }} />
            <Button style={{ marginTop: '1rem' }}>
              <Link to='/profil' className="font-family-primary">
                Lihat Profil Gereja
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="tentang-gereja-statistik">
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <SectionTitle text="Statistik Jemaat" style={{ textAlign: 'center' }} />
          <SectionTitleSep />
        </div>
        <ul className="tentang-gereja-statistik-boxs">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faPerson} />
            </span>
            <SectionTitle text="5" style={{ fontWeight: 600 }} />
            <span className="tg-statistik-desc">Anggota Jemaat</span>
          </li>
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faPeopleRoof} />
            </span>
            <SectionTitle text="5" style={{ fontWeight: 600 }} />
            <span className="tg-statistik-desc">Jumlah Keluarga</span>
          </li>
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faTableCells} />
            </span>
            <SectionTitle text="5" style={{ fontWeight: 600 }} />
            <span className="tg-statistik-desc">Jumlah Kolom</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default TentangGerejaSection