import FadeReveal from '../../reveal/FadeReveal'
import SlideReveal from '../../reveal/SlideReveal'
import './PengumumanSection.css'
import PengumumanSwiper from './PengumumanSwiper'

const Pengumuman = () => {
  return (
    <section id="pengumuman">
      <div className="container">
        <div className="pengumuman-outer">
          <div className="pengumuman-wrapper">
            <SlideReveal direction='y' translateFrom={100} delay={0.3}>
              <PengumumanSwiper/>
            </SlideReveal>
          </div>
          <FadeReveal delay={1.1} duration={0.6}>
            <div className="pengumuman-swiper-pagination"></div>
          </FadeReveal>
        </div>
      </div>
    </section>
  )
}

export default Pengumuman