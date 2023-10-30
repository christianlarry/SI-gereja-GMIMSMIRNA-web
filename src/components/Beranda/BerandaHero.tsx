import Button from '../button/Button'
import './BerandaHero.css'
import HeroSwiper from './HeroSwiper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNewspaper,faChurch,faTrowel,faImage} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const BerandaHero = () => {
  return (
    <section id="hero">
      <div className="hero-container swiper">
        <HeroSwiper />
        <div className="hero-content">
          <div className="logo">
            <img src="/images/gmim-large.png" alt="logo gmim" width="150px" />
          </div>
          <div className="text">
            <h3>Website Resmi Jemaat</h3>
            <h1>GMIM Smirna Malalayang</h1>
          </div>
          <div className="category">
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
          </div>
        </div>
        {/* <button className="hero-btn hero-swiper-next"><i className="fa-solid fa-caret-right"></i></button>
        <button className="hero-btn hero-swiper-prev"><i className="fa-solid fa-caret-left"></i></button> */}
      </div>
    </section>
  )
}

export default BerandaHero