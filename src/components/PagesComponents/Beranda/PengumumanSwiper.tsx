import PengumumanCard from './PengumumanCard'
import {Swiper,SwiperSlide} from "swiper/react"
import {Pagination} from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { getPengumuman } from '../../../services/api'
import InternalServerError from '../../error/InternalServerError'
import { toastError } from '../../../utils/toast'

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

  const {data,error,mutate} = getPengumuman({revalidateOnFocus: true})

  const handleRefresh = ()=>{
    mutate()
      .then(val=>{
        if(val && val.data.length === 0) return toastError('Belum ada pengumuman yang diposting')
        toastError('Terjadi kesalahan saat mendapatkan data')
      })
      .catch(()=>toastError('Terjadi kesalahan saat mendapatkan data'))
  }

  if(error) return (
    <div style={{width:'100%',position:'relative',textAlign:'center',top:50}}>
      <div>
        <InternalServerError message='Tidak bisa mendapatkan pengumuman.' refreshMessage='Refresh Pengumuman' onRefresh={handleRefresh}/>
      </div>
    </div>
  )

  return (
    <Swiper {...swiperProps}>
      {data && data.data.map((data)=>(
        <SwiperSlide key={data.id}>
          <PengumumanCard data={data}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default PengumumanSwiper