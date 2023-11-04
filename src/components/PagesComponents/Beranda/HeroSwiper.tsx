import {Swiper,SwiperSlide} from "swiper/react"
import {EffectFade,Autoplay} from 'swiper/modules'

import heroImages from '../../../data/heroImages.json'

import './HeroSwiper.css'

const HeroSwiper = () => {
  return (
    <Swiper
      modules={[EffectFade,Autoplay]}
      slidesPerView={1}
      effect="fade"
      loop
      speed={2000}
      autoplay={{
        disableOnInteraction: false
      }}
    >
      {heroImages.map((val, i) => (
        <SwiperSlide key={i}>
          <div className="beranda-hero-img-wrapper">
            <img src={val.url} alt={val.name} className="beranda-hero-img" />
            <div className="beranda-hero-img-filter"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HeroSwiper