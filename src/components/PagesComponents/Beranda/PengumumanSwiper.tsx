import PengumumanCard from './PengumumanCard'
import {Swiper,SwiperSlide} from "swiper/react"
import {Pagination} from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import useSWR from 'swr'
import { getPengumuman } from '../../../services/api'
import PengumumanModel from '../../../interfaces/api/PengumumanModel'
import InternalServerError from '../../error/InternalServerError'

const PengumumanSwiper = () => {
  const swiperProps: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      1050: {
        slidesPerView: 2
      }
    },
    speed: 600,
    pagination: {
      clickable: true,
      el: '.pengumuman-swiper-pagination',
      bulletClass: 'swiper-bullet',
      bulletActiveClass: 'swiper-bullet-active',
    }
  }

  const {data,error,mutate} = useSWR('/api/pengumuman',getPengumuman,{revalidateOnFocus: true})
  const pengumuman = data?.data.data as PengumumanModel[]

  if(error) return (
    <div style={{width:'100%',position:'relative',textAlign:'center',top:50}}>
      <div>
        <InternalServerError message='Tidak bisa mendapatkan pengumuman.' refreshMessage='Refresh Pengumuman' onRefresh={mutate}/>
      </div>
    </div>
  )

  return (
    <Swiper {...swiperProps}>
      {pengumuman && pengumuman.map((data)=>(
        <SwiperSlide key={data.id}>
          <PengumumanCard data={data}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default PengumumanSwiper