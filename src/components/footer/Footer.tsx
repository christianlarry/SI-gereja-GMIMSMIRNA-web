import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <footer>
    <div className="footer-top">
      <div className="container footer-top-wrapper">
        <section className='footer-about-section' style={{flex:3}}>
          <h2 className="footer-section-title">Tentang Gereja</h2>
          <div className="footer-section-content">
            <p>Jemaat Smirna merupakan bagian dari Gereja Masehi Injili di Minahasa (GMIM) yang berkedudukan di Kelurahan Malalayang Dua Kota Manado. Jemaat Smirna masuk dalam Wilayah Manado Malalayang Barat.</p>
          </div>
        </section>

        <section className="footer-social-section" style={{flex:2}}>
          <h2 className="footer-section-title">Sosial Media</h2>
          <ul className="footer-about-social-list">
            <li className="footer-about-social-item">
              <a href="https://www.facebook.com/groups/170536833353382/" target="_blank">
                <i className="transition-fast"><FontAwesomeIcon icon={faFacebook}/></i>
              </a>
            </li>
            <li className="footer-about-social-item">
              <a href="https://www.instagram.com/gmim_smirna_malalayang/" target="_blank">
                <i className="transition-fast"><FontAwesomeIcon icon={faInstagram}/></i>
              </a>
            </li>
            <li className="footer-about-social-item">
              <a href="https://www.youtube.com/@smirnamalabar" target="_blank">
                <i className="transition-fast"><FontAwesomeIcon icon={faYoutube}/></i>
              </a>
            </li>
            <li className="footer-about-social-item">
              <a href="mailto:malabar.smirna@gmail.com" target="_blank">
                <i className="transition-fast"><FontAwesomeIcon icon={faEnvelope}/></i>
              </a>
            </li>
          </ul>
        </section>

        <section className="footer-alamat-section" style={{flex:3}}>
          <h2 className="footer-section-title">Alamat</h2>
          <div className='footer-section-content'>
            <ul className="footer-alamat-lists">
              <li><span>Kelurahan Malalayang Dua - Lingkungan 8 - Manado - 95163</span></li>
              <li><span>Telepon : +62 813-5603-3368;  +62 812-4386-8008</span></li>
              <li><span>Email : malabar.smirna@gmail.com</span></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom-wrapper">
          <div className="footer-bottom-copyright">
            <span>Copyrights © 2023 Christian Rondonuwu</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer