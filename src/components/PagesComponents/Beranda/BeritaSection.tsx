import { Link } from 'react-router-dom'
import './BeritaSection.css'
import SectionSubtitle from '../../section/SectionSubtitle'
import SectionTitle from '../../section/SectionTitle'
import SectionTitleSep from '../../section/SectionTitleSep'
import Button from '../../ui/Button/Button'
import SlideReveal from '../../reveal/SlideReveal'
import FadeReveal from '../../reveal/FadeReveal'
import BeritaSectionMain from './BeritaSectionMain'

const BeritaSection = () => (
  <section>
    <div className="container berita-container">
      <SlideReveal direction='y' translateFrom={50}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

          <Link to="/berita">
            <SectionSubtitle text='Berita Gereja'/>
          </Link>
          <SectionTitle text='Berita Terbaru'/>
          <SectionTitleSep />

        </div>
      </SlideReveal>

      <div className="berita-main-container">
        <SlideReveal direction='y' translateFrom={50} className='w-full'>
          <BeritaSectionMain/>
        </SlideReveal>
      </div>

      <FadeReveal duration={1}>
        <div style={{display: 'flex',justifyContent:'center'}}>
          <Button><Link to='/berita' className='font-family-primary'>Lihat Berita Lainnya</Link></Button>
        </div>
      </FadeReveal>

    </div>
  </section>
)

export default BeritaSection