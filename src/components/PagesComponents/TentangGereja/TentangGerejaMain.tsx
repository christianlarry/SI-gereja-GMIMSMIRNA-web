import { Link } from "react-router-dom"
import Paragraph from "../../ui/Text/Paragraph"
import StatistikCardLists from "../../StatistikCardLists"
import Button from "../../ui/Button/Button"
import SectionSubtitle from "../../section/SectionSubtitle"
import SectionTitle from "../../section/SectionTitle"
import SectionTitleSep from "../../section/SectionTitleSep"

import './TentangGerejaMain.css'
import UnderlineTextButton from "../../ui/Button/UnderlineTextButton"

const MainContent = () => {
  return (
    <>
      <div style={{display: 'flex',flexDirection: 'column', gap: '3rem'}}>
        <section className="pg-about">
          <div className="pg-about-img-wrapper">
            <a href="https://www.gmim.or.id/" target="_blank">
              <img className="pg-about-img" src="/images/gmim-large.png" alt="GMIM LOGO" />
            </a>
          </div>
          <div className="pg-about-content">
            <SectionTitle text='GEREJA MASEHI INJILI DI MINAHASA' />
            <SectionSubtitle text="GMIM Yang Kudus, Am dan Rasuli" style={{ textTransform: 'none' }} />
            <SectionTitleSep />
            <Paragraph text="Gereja Masehi Injili di Minahasa (GMIM) adalah persekutuan orang-orang Minahasa dan suku lain serta ras lain, yang ada di tanah Minahasa dan di luar tanah Minahasa, yang percaya kepada Yesus Kristus untuk memberitakan perbuatan-perbuatan besar Tuhan Allah dan menjadi berkat bagi orang banyak di manapun dan kapanpun." />
          </div>
        </section>
        <section id="visi-misi" className="pg-visi-misi">
          <SectionSubtitle text="Visi & Misi GMIM"/>
          <SectionTitleSep/>
          <div className="pg-visi-misi-wrapper">
            <div className="pg-visi-misi-content">
              <SectionTitle text='VISI' style={{marginBottom: '1rem'}}/>
              <span className="pg-visi-text">GMIM Yang Kudus, Am dan Rasuli</span>
              <Paragraph text="- GMIM Yang Kudus. Gereja, secara khusus GMIM dipahami sebagai persekutuan orang-orang kudus yang telah dibenarkan dan ditebus oleh Yesus Kristus (1 Korintus 1:30)." />
              <Paragraph text="- GMIM Yang Am. Gereja itu adalah am, karena pekerjaan Yesus Kristus yang merupakan Kepalanya dan bahwasannya Kristus adalah Juruselamat untuk dunia dan seluruh umat manusia." />
              <Paragraph text="- GMIM Yang Rasuli. Gereja diutus ke dalam dunia untuk tugas khusus untuk memberitakan tentang keselamatan di dalam Kristus." />
            </div>
            <div className="pg-visi-misi-content">
              <SectionTitle text='MISI' style={{marginBottom: '1rem'}}/>
              <Paragraph text="- Meningkatkan kualitas karakter dan spiritualitas Kristiani warga Gereja." />
              <Paragraph text="- Meningkatkan pelayanan misi yang holistik bagi keadilan, perdamaian dan kesejahteraan sosial yang menjamin keberlangsungan keutuhan ciptaan."/>
              <Paragraph text="- Meningkatkan keesaan bersama Gereja-Gereja di Indonesia dan di seluruh dunia secara oikumenis."/>
              <Paragraph text="- Meningkatkan kapasitas kelembagaan GMIM dalam presbiterial sinodal sebagai Gereja global."/>
            </div>
          </div>
        </section>
        <section className="pg-about">
          <div className="pg-about-img-wrapper">
            <img className="pg-about-img" src="/images/smirna-large.png" alt="SMIRNA LOGO" />
          </div>
          <div className="pg-about-content">
            <SectionTitle text='JEMAAT SMIRNA' />
            <SectionTitleSep />
            <Paragraph text="Jemaat Smirna merupakan bagian dari Gereja Masehi Injili di Minahasa (GMIM) yang berkedudukan di Kelurahan Malalayang Dua Kota Manado. Jemaat Smirna masuk dalam Wilayah Manado Malalayang Barat." />
          </div>
        </section>
        <section className="pg-statistik">
          <SectionTitle text="Statistik Jemaat GMIM Smirna"/>
          <SectionTitleSep style={{marginBottom: '2rem'}}/>
          <StatistikCardLists/>
          <Button style={{marginTop:'3rem'}}><Link to='/data-jemaat'>Lihat Data Jemaat</Link></Button>
        </section>
        <UnderlineTextButton style={{alignSelf:'flex-end'}}>
          <Link to='/sejarah-gereja'>Berikutnya sejarah gereja →</Link>
        </UnderlineTextButton>
      </div>
    </>
  )
}

export default MainContent