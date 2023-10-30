import './PengumumanSection.css'
import PengumumanSwiper from './PengumumanSwiper'

const Pengumuman = () => {
  return (
    <section id="pengumuman">
      <div className="container">
        <div className="pengumuman-outer">
          <div className="pengumuman-wrapper">
            <PengumumanSwiper/>
          </div>
          <div className="pengumuman-swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default Pengumuman