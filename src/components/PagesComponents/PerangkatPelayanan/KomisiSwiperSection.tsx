import SectionTitle from '../../section/SectionTitle'
import SectionTitleSep from '../../section/SectionTitleSep'
import './KomisiSwiperSection.css'

const KomisiSwiperSection = ({children,title}:{children:React.ReactNode,title:string}) => (
  <section className='komisi-swiper-section'>
    <div className="komisi-swiper-section-title-wrapper">
      <SectionTitle text={title} />
      <SectionTitleSep />
    </div>
    {children}
  </section>
)

export default KomisiSwiperSection