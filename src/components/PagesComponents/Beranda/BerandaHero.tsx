import Button from '../../button/Button'
import './BerandaHero.css'
import HeroSwiper from './HeroSwiper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNewspaper,faChurch,faTrowel,faImage} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SlideReveal from '../../reveal/SlideReveal'
import FadeReveal from '../../reveal/FadeReveal'
import ZoomReveal from '../../reveal/ZoomReveal'

const BerandaHero = () => {
  return (
    <section id="beranda-hero">
      <div className="beranda-hero-container swiper">
        <motion.div
          initial={{opacity: 0.7,}}
          animate={{opacity: 0,transitionEnd: {display: "none"}}}
          transition={{
            duration: 0.5,
            ease: 'linear'
          }}
          className='beranda-hero-animate-box'/>
        <HeroSwiper />
        <div className="beranda-hero-content">
          <FadeReveal duration={1.2} delay={1.2}>
            <div className="logo">
              <img src="/images/gmim-large.png" alt="logo gmim" width="150px" />
            </div>
          </FadeReveal>
          <div className="text">
            <SlideReveal direction='y' translateFrom={-50} delay={0.7}>
              <h3>Website Resmi Jemaat</h3>
            </SlideReveal>
            <ZoomReveal scaleFrom={1.4} duration={1}>
              <h1>GMIM Smirna Malalayang</h1>
            </ZoomReveal>
          </div>
          <SlideReveal direction='y' translateFrom={50} delay={1.4} duration={1}>
            <div className="category">
              <div className="category-menu">
                <Button tabIndex={-1}>
                  <Link to="/berita?halaman=1">
                    <i><FontAwesomeIcon icon={faNewspaper}/></i>Berita
                  </Link>
                </Button>
                <Button tabIndex={-1}>
                  <Link to="/ibadahminggu"><i><FontAwesomeIcon icon={faChurch}/></i>Ibadah Minggu</Link>
                </Button>
                <Button tabIndex={-1}>
                  <Link to="/pembangunan"><i><FontAwesomeIcon icon={faTrowel}/></i>Pembangunan</Link>
                </Button>
                <Button tabIndex={-1}>
                  <Link to="/galeri"><i><FontAwesomeIcon icon={faImage}/></i>Galeri</Link>
                </Button>
              </div>
            </div>
          </SlideReveal>
        </div>
      </div>
    </section>
  )
}

export default BerandaHero