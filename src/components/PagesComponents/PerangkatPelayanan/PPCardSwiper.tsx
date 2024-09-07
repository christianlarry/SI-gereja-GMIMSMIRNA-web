import './PPCardSwiper.css'

import { SwiperSlide,Swiper } from "swiper/react"
import { Pagination } from 'swiper/modules'
import ProfileCard from "../../ui/Card/ProfileCard"
import KomisiKategorialModel from "../../../interfaces/api/KomisiKategorialModel"
import { hashString } from "../../../utils/hashString"
import KomisiKerjaModel from '../../../interfaces/api/KomisiKerjaModel'

const PPCardSwiper = ({data}:{data:KomisiKategorialModel[] | KomisiKerjaModel[]}) => {

  const swiperPaginationId = hashString('sofj9084jskafpsauif47f')

  return (
    <div className="pp_card-swiper-container">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={30}
        speed={600}
        pagination={{
          el: `.pp_card-swiper-pagination-${swiperPaginationId}`,
          clickable: true,
          bulletClass: 'swiper-bullet',
          bulletActiveClass: 'swiper-bullet-active'
        }}
        breakpoints={{
          1350: {
            slidesPerView: 3
          },
          800: {
            slidesPerView: 2
          }
        }}>
        {data.map(value => (
          <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }} key={value.id}>
            <ProfileCard nama={value.nama_lengkap} desc={value.jabatan} picture_url={value.foto_url ? value.foto_url : undefined} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`pp_card-swiper-pagination pp_card-swiper-pagination-${swiperPaginationId}`}></div>
    </div>
  )
}

export default PPCardSwiper