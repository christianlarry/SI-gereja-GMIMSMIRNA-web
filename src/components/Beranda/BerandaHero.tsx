import Button from '../button/Button'
import './BerandaHero.css'
import HeroSwiper from './HeroSwiper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNewspaper,faChurch,faTrowel,faImage} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const BerandaHero = () => {
  return (
    <section id="hero">
      <div className="hero-container swiper">
        <HeroSwiper />
        <div className="hero-content">
          <motion.div 
          className="logo"
          variants={{
            hidden: {opacity: 0, y:-100},
            visible: {opacity: 1, y:0}
          }}
          initial="hidden"
          animate="visible"
          transition={{duration: 2,type:'spring',bounce: 0.3,delay: 0.25}}
          >
            <img src="/images/gmim-large.png" alt="logo gmim" width="150px" />
          </motion.div>
          <div className="text">
            <motion.h3
            variants={{
              hidden: {opacity: 0},
              visible: {opacity: 1}
            }}
            initial='hidden'
            animate='visible'
            transition={{duration: 1.5,delay: 1}}
            >
              Website Resmi Jemaat
            </motion.h3>
            <motion.h1
            variants={{
              hidden: {opacity: 0,scale: 1.4},
              visible: {opacity: 1,scale: 1}
            }}
            initial='hidden'
            animate='visible'
            transition={{type:'spring',duration: 2,delay: 0.8}}
            >GMIM Smirna Malalayang</motion.h1>
          </div>
          <motion.div 
          className="category"
          variants={{
            hidden: {opacity: 0, y:50},
            visible: {opacity: 1, y:0}
          }}
          initial="hidden"
          animate="visible"
          transition={{duration: 1.4,type:'spring',bounce: 0.5,delay: 1.5}}
          >
            <div className="category-menu">
              <Button tabIndex={-1}>
                <Link to="/berita">
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
          </motion.div>
        </div>
        {/* <button className="hero-btn hero-swiper-next"><i className="fa-solid fa-caret-right"></i></button>
        <button className="hero-btn hero-swiper-prev"><i className="fa-solid fa-caret-left"></i></button> */}
      </div>
    </section>
  )
}

export default BerandaHero