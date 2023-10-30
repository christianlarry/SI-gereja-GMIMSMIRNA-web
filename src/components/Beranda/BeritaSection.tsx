import { Link } from 'react-router-dom'
import './BeritaSection.css'
import SectionSubtitle from '../SectionSubtitle'
import SectionTitle from '../SectionTitle'
import SectionTitleSep from '../SectionTitleSep'
import Button from '../button/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'

const BeritaSection = () => {

  const beritaSwiperProps:SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 48,
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: ".berita-swiper-pagination",
        clickable: true,
        bulletClass: 'swiper-bullet',
        bulletActiveClass: 'swiper-bullet-active',
    },
    breakpoints: {
        910: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        1300: {
            slidesPerView: 3,
            slidesPerGroup: 3
        }
    }
  }

  return (<section>
    <div className="container berita-container">
      <div className="berita-wrapper">
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

          <Link to="/berita">
            <SectionSubtitle text='Berita Gereja'/>
          </Link>
          <SectionTitle text='Berita Terbaru'/>
          <SectionTitleSep />

        </div>
        <div className="berita-main-container">
          <Swiper {...beritaSwiperProps}>
            <SwiperSlide>

            </SwiperSlide>
          </Swiper>

          <div className="berita-swiper-pagination"></div>
        </div>

        <div style={{display: 'flex',justifyContent:'center', marginTop: '2rem'}}>
          <Button><Link to='/berita' className='font-family-primary'>Lihat Berita Lainnya</Link></Button>
        </div>
      </div>

    </div>
  </section>)
}

export default BeritaSection